# App Setup Guide

This guide covers downloading the Pop-up Controller V10 desktop app, preparing the controller connection, and confirming that the app can detect the controller.

## What You Need

- A Windows 10 or Windows 11 PC
- The latest desktop app release
- A USB-C cable that supports data transfer
- A Pop-up Controller V10

## Step Overview

1. Download the latest desktop app release.
2. Extract the downloaded files.
3. Open the extracted `.exe`.
4. Connect the controller with a `USB-C` data cable.
5. Open the app and connect to the controller.
6. Confirm that the controller information appears.

## Download the App

Download the latest release here:

[sheep-celica/Pop-up-controller-V10-Application releases](https://github.com/sheep-celica/Pop-up-controller-V10-Application/releases)

![GitHub release page with the desktop app zip package highlighted.](../../images/pop-up-controller-v10/screenshots/app-setup/download_zip.png)

## Extract the downloaded files

Extract the downloaded release before opening the `.exe` file.

![Downloaded desktop app zip file in Windows Explorer.](../../images/pop-up-controller-v10/screenshots/app-setup/extract_files.png)

## Open the extracted `.exe`

Open the extracted `.exe` file.

![Desktop app executable inside the extracted folder.](../../images/pop-up-controller-v10/screenshots/app-setup/open_exe.png)

> **Note:** Windows SmartScreen or antivirus software may warn you about the app because it is not code-signed.
>
> If Windows shows the protection warning, click **More info** and then **Run anyway**.

![Windows SmartScreen warning before the extra launch option is shown.](../../images/pop-up-controller-v10/screenshots/app-setup/windows-smartscreen-warning.png)

![Windows SmartScreen warning with the Run anyway option visible.](../../images/pop-up-controller-v10/screenshots/app-setup/windows-smartscreen-run-anyway.png)

The following window should open:

![Desktop app main window before connecting to the controller.](../../images/pop-up-controller-v10/screenshots/app-setup/app_initial_screen.png)

## Connect the Controller

Connect your controller to your computer.

You can connect the controller directly to your PC or while it is installed in the car.

Use a USB-C cable that supports data transfer. A charge-only cable will not work.

## Connect to the Controller

Open the desktop app and click **Find controller**.

Once the controller is found, click **Connect**.

![Desktop app with the Find controller step highlighted.](../../images/pop-up-controller-v10/screenshots/app-setup/app_find_and_connect.png)

Wait a few seconds for the app to detect the controller and update the device information.

![Desktop app after the controller has connected successfully.](../../images/pop-up-controller-v10/screenshots/app-setup/app_connected_success.png)

## If Detection Fails

- Check that the USB-C cable supports data transfer
- Reconnect the controller and try **Find controller** again
- Close and reopen the app, then try again
- Try different USB ports on your PC
- Last resort is to attempt installation of CH340 drivers

## Next Steps

- For firmware updates, continue with the [App Flashing Guide](app-flashing.md)
- For day-to-day features, continue with the [App Usage Guide](app-usage.md)
