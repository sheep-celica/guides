# App Usage Guide

> **Warning - Precondition:** Complete the [App Setup Guide](app-setup.md) first.

## Sections

1. Basic Information
2. Serial Connection
3. Statistical Data
4. Settings
5. Errors
6. Manufacture Data
7. Service
8. Firmware

## Basic Information

This section covers the header shown near the top of the main app window after the controller is connected.

![Header information area from the main app window.](../../images/pop-up-controller-v10/screenshots/app-usage/overview_information.png)

### Header Values

- **FW version:** Shows the firmware version currently running on the connected controller.
- **Build date:** Shows the build date of the currently running firmware.
- **Controller state:** Current mode of the controller.
- **External:** Shows the `I2C` address of the remote module.
- **Temperature:** Controller board temperature.

### Controller States

- **BENCH MODE:** Voltage < 7 Volts. Controller runs in limited functionality, pop-up control is disabled.
- **RUNNING:** Controller is running in the standard mode as is expected in the car.

## Serial Connection

This section covers controller detection, connection state, and the connection control buttons.

![Serial connection area from the main app window.](../../images/pop-up-controller-v10/screenshots/app-usage/serial_section.png)

### Main Areas

- **COM port:** Shows which `COM` port the controller was found on.
- **Status:** Shows connection status.
- **Find controller:** Button that searches the `COM` ports for the controller.
- **Connect / Disconnect:** Button that connects to or disconnects from the controller.
- **Reboot controller:** Button that reboots the controller. This will save all data to memory before reboot.

## Statistical Data

This section covers the Statistical Data dialog.

![Statistical Data dialog overview.](../../images/pop-up-controller-v10/screenshots/app-usage/statistical_dialog.PNG)

### Main Areas

- **Runtime:** The total controller runtime along with boot counter.
- **Pop-up statistics:** Shows total pop-up cycles, runtime, and errors.
  Note: This includes cleared error codes.
- **Input activity:** Shows activity counters for physical buttons and remote inputs.

## Settings

This section covers the individual settings categories in the Settings dialog.

### Safety

![Safety category in the Settings dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/settings_dialog_safety.PNG)

- **Sleepy eyes with headlights:** Determines if Sleepy Eye mode can be activated with light-switch in other positions than `OFF`.
- **Remote inputs with light-switch:** Determines if remote control works with light-switch in other positions than `OFF`.

### Pop-up Settings

![Pop-up settings category in the Settings dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/settings_dialog_popups.PNG)

**Warning:** It is not recommended to adjust the following settings without consulting me first.

- **Minimum time to change states:** The minimum amount of time the mechanical switch needs to maintain a position before it becomes valid.
- **Pop-up sensing delay:** The amount of time a sensing impulse is settling during a pop-up position readout.
- **Motor Stall Protection:** Toggle and configuration for pop-up stall protection.
- **Pop-up timing calibration:** Stored timing data to improve the precision of sleepy eye mode.

### Remote

![Remote category in the Settings dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/settings_dialog_remote.PNG)

- **Remote input mapping:** Allows mapping controller actions to different buttons on the remote.
- **Remote inputs with light-switch:** Determines if remote control works with light-switch in other positions than `OFF`.

### Idle

![Idle category in the Settings dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/settings_dialog_idle.PNG)

**Info:** This time is only incremented while the light-switch is in the `OFF` position. Any input or pop-up movement resets it.

- **Idle time to power off:** The amount of idle time needed for the controller to shutdown.

### Other

![Other category in the Settings dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/settings_dialog_other.PNG)

- **Battery voltage calibration:** Allows getting live readings of voltage and adjustments of calibration constants.

### Potentiometers

![Potentiometers category in the Settings dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/settings_dialog_potentiometers.png)

![Live potentiometer positions in the Settings dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/settings_dialog_potentiometers_2.png)

- **RH offset:** Time offset of RH Pop-up when going into Sleepy Eye mode position.
- **LED Adjust:** LED brightness.

## Errors

This section covers the Errors dialog.

![Errors dialog overview.](../../images/pop-up-controller-v10/screenshots/app-usage/error_dialog.PNG)

### Main Areas

- **Headlight / pop-up stored errors:** Shows stored errors related to the pop-up mechanisms.
- **Other module stored errors:** Shows other stored controller errors that do not belong to the pop-up mechanism section.
- **Clear errors:** Allows clearing the error list.
- **Refresh errors:** Refreshes the error list.

## Manufacture Data

This section covers the Manufacture Data dialog.

![Manufacture Data dialog overview.](../../images/pop-up-controller-v10/screenshots/app-usage/manufacture_dialog.PNG)

### Main Areas

- **Overview:** Shows serial number, manufacture date, and initial firmware version.
- **Board identity:** Shows board serial, board revision, and car model.

## Service

This section covers the Service access dialog.

Contains service actions intended during manufacturing to load manufacturing data and setup calibrations.

**Warning:** This section is not intended for users.

![Service access dialog.](../../images/pop-up-controller-v10/screenshots/app-usage/service_dialog.PNG)

## Firmware

This section covers the firmware area in the app and how it relates to the separate flashing guide.

![Firmware area from the main app window.](../../images/pop-up-controller-v10/screenshots/app-usage/firmware_section.png)

**Info:** Follow the [App Flashing Guide](app-flashing.md) for more detailed instructions.

### Main Areas

- **Firmware file:** The selected firmware file to be used for the flashing.
- **GitHub release:** The latest firmware file available on GitHub.
- **Browse:** Button that opens dialog for manually selecting a firmware file.
- **Flash firmware:** Button that flashes the selected firmware file to the controller.
- **Download latest:** Button that downloads the latest GitHub firmware release and selects the file.
