#!/usr/bin/env python3
"""
Windows notifier for a Codex-style "notify" hook.

Behavior:
- If run with no arguments, shows a test notification.
- If run with one argument of `agent-turn-complete`, shows a completion
  notification.
- If run with one JSON argument and `type == "agent-turn-complete"`,
  shows a completion notification.
"""

import json
import sys
from windows_toasts import WindowsToaster, Toast


def show_notification(title: str, body: str) -> None:
    toaster = WindowsToaster("Codex")
    toast = Toast()
    toast.text_fields = [title, body]
    toaster.show_toast(toast)


def parse_event_type(argument: str) -> str | None:
    if argument == "agent-turn-complete":
        return argument

    try:
        event = json.loads(argument)
    except Exception:
        return None

    if isinstance(event, dict):
        event_type = event.get("type")
        if isinstance(event_type, str):
            return event_type

    return None


def handle_notification(title: str, body: str) -> int:
    try:
        show_notification(title, body)
    except PermissionError as exc:
        sys.stderr.write(
            "notify.py: Windows blocked the toast from this execution context. "
            "For real desktop notifications, configure Codex's user-level "
            "`notify` hook in `%USERPROFILE%\\.codex\\config.toml` so the script "
            "runs client-side instead of inside the sandboxed task shell.\n"
        )
        sys.stderr.write(f"notify.py: {exc}\n")
        return 1
    except Exception as exc:
        sys.stderr.write(f"notify.py: failed to show notification: {exc}\n")
        return 1

    return 0


def main() -> int:
    # Easy manual test:
    #   python notify.py
    if len(sys.argv) == 1:
        return handle_notification("Test", "The script ran successfully.")

    # Hook mode:
    #   python notify.py agent-turn-complete
    #   python notify.py "{\"type\":\"agent-turn-complete\"}"
    if len(sys.argv) != 2:
        return 0

    if parse_event_type(sys.argv[1]) == "agent-turn-complete":
        return handle_notification("Codex", "Agent turn complete.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
