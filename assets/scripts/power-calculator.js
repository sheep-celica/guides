(function () {
  const calculators = document.querySelectorAll("[data-power-calculator]");

  calculators.forEach(function (calculator) {
    const form = calculator.querySelector("[data-power-calculator-form]");
    const chart = calculator.querySelector("[data-power-calculator-chart]");
    const fallback = calculator.querySelector("[data-power-calculator-fallback]");
    const summary = calculator.querySelector("[data-power-calculator-summary]");

    if (!form || !chart) {
      return;
    }

    const fields = {
      capacity: form.elements["battery-capacity"],
      parasitic: form.elements["parasitic-current"],
      configuration: form.elements["controller-configuration"],
      idle: form.elements["idle-current"],
      sleep: form.elements["sleep-current"],
      threshold: form.elements["battery-threshold"]
    };

    const presets = {
      standalone: { idle: 35, sleep: 5 },
      "remote-addon": { idle: 37, sleep: 7 }
    };
    const selfDischargeRate = 0.05;
    const daysPerMonth = 30.4375;

    function numberValue(field) {
      return Number.parseFloat(field.value);
    }

    function setPresetState() {
      const isCustom = fields.configuration.value === "custom";
      fields.idle.readOnly = !isCustom;
      fields.sleep.readOnly = !isCustom;

      if (!isCustom) {
        const preset = presets[fields.configuration.value];
        fields.idle.value = preset.idle;
        fields.sleep.value = preset.sleep;
      }
    }

    function formatDuration(days) {
      if (!Number.isFinite(days)) {
        return "does not discharge";
      }

      if (days < 1) {
        return (days * 24).toFixed(1) + " hours";
      }

      return days.toFixed(1) + " days";
    }

    function batteryLevel(current, days, capacity) {
      return Math.max(0, 100 - (current * days * 24 * 100) / (capacity * 1000));
    }

    function disconnectedBatteryLevel(days) {
      return 100 * Math.pow(1 - selfDischargeRate, days / daysPerMonth);
    }

    function linearBatterySeries(current, capacity, days, chartDays) {
      const fullDischargeDays = current > 0 ? (capacity * 1000) / (current * 24) : Infinity;
      const visibleDays = days.filter(function (day) {
        return day < fullDischargeDays;
      });

      if (fullDischargeDays <= chartDays) {
        visibleDays.push(fullDischargeDays);
      }

      return {
        x: visibleDays,
        y: visibleDays.map(function (day) {
          return batteryLevel(current, day, capacity);
        })
      };
    }

    function render() {
      setPresetState();

      if (!form.checkValidity()) {
        if (summary) {
          summary.textContent = "Enter valid values to update the calculation.";
        }
        return;
      }

      const capacity = numberValue(fields.capacity);
      const parasitic = numberValue(fields.parasitic);
      const idle = numberValue(fields.idle);
      const sleep = numberValue(fields.sleep);
      const threshold = numberValue(fields.threshold);
      const currents = {
        noController: parasitic,
        controllerIdle: parasitic + idle,
        controllerAsleep: parasitic + sleep
      };
      const crossingDays = Object.values(currents).map(function (current) {
        return current > 0 ? (capacity * 1000 * (100 - threshold)) / (current * 24 * 100) : Infinity;
      });
      crossingDays.push(
        (daysPerMonth * Math.log(threshold / 100)) / Math.log(1 - selfDischargeRate)
      );
      const finiteCrossings = crossingDays.filter(Number.isFinite);
      const longestCrossing = finiteCrossings.length > 0 ? Math.max.apply(null, finiteCrossings) : 30;
      const chartDays = Math.min(3650, Math.max(30, longestCrossing * 1.15));
      const pointCount = 81;
      const days = Array.from({ length: pointCount }, function (_, index) {
        return (chartDays * index) / (pointCount - 1);
      });

      const traces = [
        {
          name: "No Controller",
          current: currents.noController,
          color: "#79baff"
        },
        {
          name: "Controller Sleep",
          current: currents.controllerAsleep,
          color: "#72d89d"
        },
        {
          name: "Controller Idle",
          current: currents.controllerIdle,
          color: "#ff9c72"
        }
      ].map(function (trace) {
        const series = linearBatterySeries(trace.current, capacity, days, chartDays);

        return {
          x: series.x,
          y: series.y,
          name: trace.name,
          mode: "lines",
          line: { color: trace.color, width: 3 },
          hovertemplate: "%{y:.1f}%<extra>" + trace.name + "</extra>"
        };
      });

      traces.push({
        x: days,
        y: days.map(disconnectedBatteryLevel),
        name: "Battery disconnected",
        mode: "lines",
        line: { color: "#c6a4f5", width: 3, dash: "dot" },
        hovertemplate: "%{y:.1f}%<extra>Battery disconnected</extra>"
      });

      const layout = {
        autosize: true,
        height: 430,
        margin: { t: 20, r: 24, b: 66, l: 64 },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(8,11,15,0.34)",
        font: { color: "#dce7f5", family: "system-ui, sans-serif" },
        hovermode: "x unified",
        hoverlabel: {
          bgcolor: "#182331",
          bordercolor: "rgba(186,206,235,0.42)",
          font: { color: "#f3f7fc", family: "system-ui, sans-serif", size: 12 }
        },
        legend: { orientation: "h", y: 1.12, x: 0, font: { size: 12 } },
        xaxis: {
          title: "Time [days]",
          gridcolor: "rgba(138,164,200,0.16)",
          zerolinecolor: "rgba(138,164,200,0.26)"
        },
        yaxis: {
          title: "Battery level [%]",
          range: [0, 100],
          gridcolor: "rgba(138,164,200,0.16)",
          zerolinecolor: "rgba(138,164,200,0.26)"
        },
        shapes: [
          {
            type: "line",
            xref: "paper",
            x0: 0,
            x1: 1,
            y0: threshold,
            y1: threshold,
            line: { color: "#f4cf58", width: 2, dash: "dash" }
          }
        ],
        annotations: [
          {
            xref: "paper",
            x: 1,
            y: threshold,
            xanchor: "right",
            yanchor: "bottom",
            text: "Threshold: " + threshold + "%",
            showarrow: false,
            font: { color: "#ffe6a8", size: 12 }
          }
        ]
      };

      if (window.Plotly && typeof window.Plotly.react === "function") {
        window.Plotly.react(chart, traces, layout, {
          responsive: true,
          displaylogo: false,
          modeBarButtonsToRemove: ["select2d", "lasso2d"]
        });

        if (!chart.dataset.legendResizeBound && typeof chart.on === "function") {
          chart.on("plotly_legendclick", function () {
            window.setTimeout(function () {
              window.Plotly.relayout(chart, { "xaxis.autorange": true });
            }, 0);
          });
          chart.dataset.legendResizeBound = "true";
        }

        if (fallback) {
          fallback.hidden = true;
        }
      } else if (fallback) {
        fallback.hidden = false;
      }

      if (summary) {
        summary.textContent =
          "Time to " + threshold + "%: No controller " + formatDuration(crossingDays[0]) +
          "; Controller Sleep " + formatDuration(crossingDays[2]) +
          "; Controller Idle " + formatDuration(crossingDays[1]) +
          "; Battery disconnected " + formatDuration(crossingDays[3]) + ".";
      }
    }

    form.addEventListener("input", render);
    form.addEventListener("change", render);
    render();
  });
})();
