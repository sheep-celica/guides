# Sleepy Eyes Mode Guide

This guide explains how Sleepy Eyes Mode works on the Pop-up Controller V10, what the 7 position settings mean, and how automatic calibration and manual adjustment affect the final pop-up angle.

## How It Works

![Sleepy eye mode overview.](../../images/pop-up-controller-v10/user-guide/sleepy-eye-mode-overview.png)

Sleepy Eyes Mode uses the dedicated controls connected to `X5` to stop both pop-ups at a partial-open position instead of fully `UP` or fully `DOWN`.

When the mode is turned on, both pop-ups first move to `UP` and then continue to the selected intermediate target. The rotary control offers `7` fixed positions.

The intermediate is simple reached by moving each pop-up for a set amount of time.

By default, Sleepy Eyes Mode can only be enabled while the light switch is in the `OFF` position. This safety behavior can be changed in the desktop app.

While the mode is active:

- The LED under the sleepy eye button stays on
- Light-switch commands no longer change the pop-up position
- Wink commands still work and return the pop-up to the same sleepy-eye position afterward

When the mode is turned off:

- The LED under the sleepy eye button turns off
- Normal light-switch control returns immediately

## Possible States

The rotary control provides `7` fixed partial-open targets. Each step raises the pop-ups farther than the one before it.

### Position 1

Approximate target: `12.5%` open.

### Position 2

Approximate target: `25%` open.

### Position 3

Approximate target: `37.5%` open.

### Position 4

Approximate target: `50%` open.

### Position 5

Approximate target: `62.5%` open. 

### Position 6

Approximate target: `75%` open.

### Position 7

Approximate target: `87.5%` open.

## Automatic Calibration

The controller uses stored timing calibration data together with live battery-voltage measurements to estimate how long each pop-up should move to reach the selected sleepy-eye target.

This is important because pop-up travel time changes with supply voltage. A fixed movement time would not land in the same place under every condition.

The firmware continuously builds timing calibration data during normal use and stores it in non-volatile memory, so the calibration survives power cycles.

For most users, no separate calibration routine is needed. The controller improves the sleepy-eye target automatically as it gathers timing data.

NOTE:
If a Pop-up is falsely determined to have reached DOWN position too soon it can produce a severe misalignment of the sleepy eye position for that pop-up.

This might not be visible if it happens once in a 100 cycles, but if it happens often enough, the effect can be clearly visible.

In such a case it is recommended to clear the timing calibration tables from the 'Desktop App'.

## Manual Adjustment

If the left and right pop-ups still do not stop at the same angle closely enough, use the controller's `OFFSET` potentiometer to fine-tune the `RH` pop-up timing.

The `OFFSET` adjustment range is `-50 ms` to `+50 ms`. The middle position is `0 ms`.

Note:
Only do this if the pop-up offset is consistent as this is a fixed timing correction.

Recommended adjustment flow:

1. Select the sleepy-eye position you want to use.
2. Turn Sleepy Eyes Mode on and compare the left and right pop-up angles.
3. Make a small adjustment to the `OFFSET` potentiometer.
4. Turn the mode off and back on so the pop-ups move to the target again.
5. Repeat in small steps until both sides match as closely as needed.

If the mismatch is still too large after small adjustments, let the controller continue normal use so it can keep building timing calibration data before making larger manual changes.
