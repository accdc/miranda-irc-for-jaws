# miranda-irc-for-jaws
JAWS scripts for the Miranda IRC chat client for auto announcement of chat messages.

Intro
-----

Archive includes the Miranda IM chat application for IRC access.

This includes the JAWS Script files for the portable Miranda IRC client to enable automatic announcement of chat messages. The original scripts have been rewritten to support UI Automation (UIA) and global event binding for system wide message announcement if desired.

Screen Reader Commands for JAWS
-----

* To announce messages 1 through 10, press Alt plus the number 1 through 0.
* To announce messages 11 through 20, press Ctrl plus the number 1 through 0.
* To copy and open a URL posted within a specific message, press Shift plus the keystroke for the desired message. E.G Shift+Alt+1 will open the URL within the latest message received.
* To toggle the automatic speech of incoming messages, press Ctrl+S. This will switch between 3 options. (1 Default) Speak new messages only when the chat window has focus. (2) Speak new messages no matter which window has focus. (3) Do not announce new messages. Global announcement requires modification of the Default.jss file as described below.

Note: Every time a message announcement command is used to repeat a particular message, or when a URL is activated within a message, the announced text is automatically copied to the clipboard.

How to Install the JAWS Scripts
-----

* Copy the files within the JAWS Script Files into the JAWS For Windows script files folder. This is typically located in the path: `"%appdata%\Freedom Scientific\JAWS\2019\Settings\ENU"`, where the number 2019 should be changed to match the JAWS version where the scripts are being installed.
* To enable global message announcement, press Insert+0 to open the JAWS Scripting Manager, press Ctrl+Shift+D to open the Default.jss file, then paste the following on a new line at the top of the file: `use "chat.jsb"` ; (Then save and close the JAWS Scripting Manager.)

How to Run Miranda
-----

* Miranda requires no installation. Within the Miranda IM folder, activate miranda.exe to run the client. (It should automatically be minimized to your task tray.)
* Within the task tray, right click the "MyIRC" icon, then open "Main Menu" > "MyIRC" > "Quick Connect", then enter the IRC server address to connect to. Example: `"irc.w3.org"`
* After the server is connected, right click the "MyIRC" icon; open "Main Menu" > "MyIRC" > "Join Channel", then enter the IRC channel to join.

Distributed under the terms of the Open Source Initiative OSI - MIT License.

Developed and maintained by: Bryan Garaventa https://www.linkedin.com/in/bgaraventa
Or on Twitter at https://twitter.com/bryanegaraventa
