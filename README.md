# miranda-irc-for-jaws
JAWS scripts for the Miranda IRC chat client for auto announcement of chat messages.

Intro
-----

Archive includes the portable Miranda NG chat application for IRC access, plus the JAWS Script files to enable automatic announcement of chat messages for screen reader users.

JAWS Screen Reader Commands
-----

* To announce the most recent messages 1 through 10, press Alt plus the number 1 through 0. (Automatically copies the spoken message to the clipboard.)
* To announce the most recent messages 11 through 20, press Ctrl plus the number 1 through 0. (Automatically copies the spoken message to the clipboard.)
* To copy and open a URL posted within a specific message, press Shift plus the keystroke for the desired message. E.G Shift+Alt+1 will open the URL within the latest message received. (Automatically copies the spoken URL to the clipboard.)
* To review the full message log in the virtual buffer, press Ctrl+R. (Automatically copies the virtualized log to the clipboard.)
* To toggle the automatic speech of incoming messages, press Ctrl+S. This will switch between 3 options. (1 Default) Speak new messages only when the chat window has focus. (2) Speak new messages no matter which window has focus. (3) Do not announce new messages. Global announcement requires modification of the Default.jss file as described below. (Selection is individually tracked for each group and private chat dialog.)

How to Install the JAWS Scripts
-----

* Copy the files within the JAWS Script Files into the JAWS For Windows script files folder. This is typically located in the path: `"%appdata%\Freedom Scientific\JAWS\2019\Settings\ENU"`, where the number 2019 should be changed to match the JAWS version where the scripts are being installed.
* To enable global message announcement, press Insert+0 to open the JAWS Scripting Manager, press Ctrl+Shift+D to open the Default.jss file, then paste the following on a new line at the top of the file: `use "stdmsg.jsb"` ; (Then save and close the JAWS Scripting Manager.)

How to Run Miranda
-----

1. Miranda requires no installation. Within the Miranda IM folder, activate Miranda32.exe to run the client. (It should automatically be minimized to your task tray.)
2. Then configure Miranda with your personal information by right-clicking the "MyIRC" icon, then click "Options". Change the personal details on the "My IRC" settings page to add your Nick, AltNick, and Email information as you wish.
3. To connect to the IRC server, right click the "MyIRC" icon again in the task tray, then open "Status" > "MyIRC (Locked)" > "Quick Connect", then enter the IRC server address to connect to. Example: `"irc.w3.org"`
4. After the server is connected, right click the "MyIRC" icon; open "Status" > "MyIRC (Locked)" > "Join Channel", then enter the IRC channel to join.

A group chat dialog will then open and focus will be set on the message input field. Shift+Tab can then be pressed to browse the list of currently logged in participants, which you can send a private message to by activating the context menu on any individual contact.

Distributed under the terms of the Open Source Initiative OSI - MIT License.

Developed and maintained by: Bryan Garaventa https://www.linkedin.com/in/bgaraventa
Or on Twitter at https://twitter.com/bryanegaraventa
