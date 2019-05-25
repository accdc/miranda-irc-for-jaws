/*
JAWS Scripts for the portable Miranda IM  IRC Client
https://github.com/accdc/miranda-irc-for-jaws
Rewritten by Bryan Garaventa to utilize UIA Automation for reliable message interactions.
To enable global message announcement no matter which window has focus, press Ctrl+Shift+D to open the default script, and add the following line at the top of the scripting file then save it.
use "chat.jsb"
*/
Include "HjGlobal.jsh" ; default HJ global variables
Include "hjconst.jsh" ; default HJ constants
Include "common.jsm"
include "srmm.jsh" 
include "srmm.jsm" 
include "UIA.jsh"
Globals
string chatBfr,
object mirandaEventsX,
object mirandaMsgCtrl,
int toggleMirandaSpeech
Void Function AutoStartEvent ()
AutoStartEvent ()
if StringLower (GetScriptFileName (true)) == "chat.jsb" then
if not toggleMirandaSpeech then
let toggleMirandaSpeech = 0
endIf
var object n
let mirandaEventsX = n
let mirandaEventsX = CreateObjectEx ("FreedomSci.UIA", false, "UIAScriptAPI.x.manifest")
var handle hwnd = FindDescendantWindow (GetAppMainWindow (GetCurrentWindow ()), 1005)
if hwnd then
let mirandaMsgCtrl = mirandaEventsX.GetElementFromHandle(hwnd)
if not mirandaEventsX.AddPropertyChangedEventHandler(UIA_ValueValuePropertyId, mirandaMsgCtrl, TreeScope_Element | TreeScope_Descendants) then
Say ("Error: Message field not bound", 0, false)
endIf
if ComAttachEvents (mirandaEventsX, "UIA_Edit_", "", "", 0, 0) then
SayFormattedMessage (ot_no_disable, GetFromLog (1))
endIf
endIf
endIf
EndFunction
Void Function UIA_Edit_PropertyChangedEvent (object element, string id, string value)
var string s = GetMessageLogWindow (element)
var string c = chatBfr
let chatBfr = s
StringTrimCommon (s, c, 0)
if not StringIsBlank (s) then
if toggleMirandaSpeech <= 1 then
if StringLower (GetScriptFileName (true)) == "chat.jsb" then
Say (s, 0, false)
else
if toggleMirandaSpeech > 0 && toggleMirandaSpeech < 2 then
SayUsingVoice (VCTX_JAWSCURSOR, s, ot_message)
endIf
endIf
endIf
endIf
EndFunction
String Function GetMessageLogWindow (object element)
var object v = element.GetValuePattern()
return v.Value
EndFunction
String Function GetFromLog (int MessageNumber)
return StringSegment (GetMessageLogWindow (mirandaMsgCtrl), "\r", 0 - Messagenumber)
EndFunction
Script ProcessMessageSegment ()
var string key = StringLower (GetCurrentScriptKeyName ())
var int isShift = StringContains (key, "shift")
var int isAlt = StringContains (key, "alt")
var int isCtrl = StringContains (key, "ctrl")
let key = StringReplaceSubstrings (key, "shift", "")
let key = StringReplaceSubstrings (key, "alt", "")
let key = StringReplaceSubstrings (key, "ctrl", "")
let key = StringReplaceSubstrings (key, "+", "")
var int n = StringToInt (key)
if n == 0 then
let n = 10
endIf
var string m
if isShift then
if isAlt then
let m = GetFromLog (n)
elIf isCtrl then
let m = GetFromLog (10 + n)
endIf
if StringContains (m, "http") then
var string u = stringChopLeft (m, StringContains (m, "http") - 1)
var int i = 1
var int l = StringLength (u)
var string goTo
while (i <= l)
var string c = SubString (u, i, 1)
if (StringIsBlank (c) || StringIsPunctuation (c)) && !StringContainsChars (c, "@#%&_-+=;:/?.") then
let goTo = SubString (u, 1, i - 1)
let i = l + 1
else
let i = i + 1
endIf
endWhile
if goTo then
CopyToClipboard (goTo)
Say (goTo, 0, false)
Run (goTo)
endIf
endIf
else
if isAlt then
let m = GetFromLog (n)
elIf isCtrl then
let m = GetFromLog (10 + n)
endIf
CopyToClipboard (m)
SayFormattedMessage (ot_no_disable, m)
endIf
EndScript
Script ToggleMirandaSpeech ()
if not toggleMirandaSpeech then
let toggleMirandaSpeech = 1
Say ("Incoming messages will be announced no matter which window has focus.", 0, false)
elIf toggleMirandaSpeech == 1 then
let toggleMirandaSpeech = 2
Say ("Incoming messages will not be announced.", 0, false)
elIf toggleMirandaSpeech == 2 then
let toggleMirandaSpeech = 0
Say ("Incoming messages will be announced only when the chat window has focus.", 0, false)
endIf
EndScript