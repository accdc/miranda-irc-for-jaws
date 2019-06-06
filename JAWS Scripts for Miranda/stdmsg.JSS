/*
JAWS Scripts for the portable Miranda NG  IRC Client, V1.1
https://github.com/accdc/miranda-irc-for-jaws
Rewritten by Bryan Garaventa.
To enable global message announcement no matter which window has focus, press Ctrl+Shift+D to open the default script, and add the following line at the top of the scripting file then save it.
use "stdmsg.jsb"
Then press Control+S within the chat window to toggle between speech output modes.
*/

Include "HjGlobal.jsh" ; default HJ global variables
Include "hjconst.jsh" ; default HJ constants
Include "common.jsm"
include "UIA.jsh"

Globals
object mirandaEvents,
object mirandaMsgCtrl,
collection mirandaObj,
string mirandaHwndStr,
string mirandaLastMsg,
string mirandaLastChatTitle
const
scriptFileName = "stdmsg.jsb",
mirandaMsgCtrlId = 3011,
mirandaEditCtrlId = 3012

Void Function AutoStartEvent ()
if StringLower (GetScriptFileName (true)) == scriptFileName 
GetHwndKey ()
endIf
EndFunction

Void Function FocusChangedEvent (handle FocusWindow, handle PrevWindow)
if StringLower (GetScriptFileName (true)) == scriptFileName && GetControlID (FocusWindow) == mirandaEditCtrlId
var string t = GetWindowName (GetRealWindow (FocusWindow))
if t != mirandaLastChatTitle
mirandaLastChatTitle = t
Say (t, 0, false)
UIABindEventObjects ()
endIf
else
FocusChangedEvent (FocusWindow, PrevWindow)
endIf
EndFunction

Function UIABindEventObjects ()
if !mirandaObj 
mirandaObj = new collection
endIf
GetHwndKey ()
if !mirandaObj[mirandaHwndStr] 
if not mirandaEvents.AddPropertyChangedEventHandler(UIA_ValueValuePropertyId, mirandaMsgCtrl, TreeScope_Element | TreeScope_Descendants) 
Say ("Error: Message field not bound", 0, false)
endIf
if ComAttachEvents (mirandaEvents, "UIA_Edit_", "", "", 0, 0) 
mirandaObj[mirandaHwndStr] = 1
UIA_Edit_PropertyChangedEvent (mirandaMsgCtrl, "", "")
endIf
else
var string s = GetFromLog (1)
if s != mirandaLastMsg
mirandaLastMsg = s
Say (s, 0, false)
endIf
endIf
EndFunction

Object Function CreateDictionaryObject ()
return CreateObjectEx ("Scripting.Dictionary", true)
EndFunction

Function StoreInCollection (object ByRef element, string s, string h)
if not StringIsBlank (s) 
if !mirandaObj[h + "x"] 
mirandaObj[h + "x"] = 1
else
mirandaObj[h + "x"] = mirandaObj[h + "x"] + 1
endIf
if !mirandaObj[h + "bfr"] 
mirandaObj[h + "bfr"] = CreateDictionaryObject ()
endIf
var string k = "l" + IntToString (mirandaObj[h + "x"])
var object d = mirandaObj[h + "bfr"]
d.Add(k, s)
if !mirandaObj[h + "log"] 
mirandaObj[h + "log"] = ""
endIf
mirandaObj[h + "log"] = mirandaObj[h + "log"] + s
endIf
EndFunction

Void Function UIA_Edit_PropertyChangedEvent (object ByRef element, string id, string value)
var string h = "h" + IntToString (element.getPropertyValue(UIA_NativeWindowHandlePropertyId))
var string s = GetMessageLogWindow (element)
var string c = mirandaObj[h + "tmp"]
mirandaObj[h + "tmp"] = s
if not StringIsBlank (c) 
var int i = 1
var int max = StringLength (s)
var string con = SubString (s, i, 1)
while (StringContains (c, con) && i <= max)
i = i + 1
con = con + SubString (s, i, 1)
endWhile
con = stringChopRight (con, 1)
s = StringDiff (s, con)
endIf
if not StringIsBlank (s) 
StoreInCollection (element, s, h)
var int toggleMirandaSpeech = mirandaObj[h + "spk"]
if !toggleMirandaSpeech 
toggleMirandaSpeech = 0
endIf
if toggleMirandaSpeech <= 1 
if StringLower (GetScriptFileName (true)) == scriptFileName && element.getPropertyValue(UIA_NativeWindowHandlePropertyId) == mirandaMsgCtrl.getPropertyValue(UIA_NativeWindowHandlePropertyId)
if IsPCCursor ()
Say (s, 0, false)
endIf
else
if toggleMirandaSpeech > 0 && toggleMirandaSpeech < 2 
SayUsingVoice (VCTX_JAWSCURSOR, s, ot_message)
endIf
endIf
endIf
endIf
EndFunction

String Function GetMessageLogWindow (object ByRef element)
var object v = element.GetValuePattern()
return v.Value
EndFunction

String Function GetFromLog (int n)
var string k = "l" + IntToString (mirandaObj[mirandaHwndStr + "x"] + 1 - n)
var object d = mirandaObj[mirandaHwndStr + "bfr"]
var string m = d(k)
return m
EndFunction

Script ProcessMessageSegmentAlt ()
GetHwndKey ()
var string key = StringLower (GetCurrentScriptKeyName ())
key = StringReplaceSubstrings (key, "leftalt", "")
key = StringReplaceSubstrings (key, "rightalt", "")
key = StringReplaceSubstrings (key, "alt", "")
key = StringReplaceSubstrings (key, "+", "")
var int n = StringToInt (key)
if !n 
n = 10
endIf
var string m = GetFromLog (n)
CopyToClipboard (m)
SayFormattedMessage (ot_no_disable, m)
EndScript

Script ProcessMessageSegmentCtrl ()
GetHwndKey ()
var string key = StringLower (GetCurrentScriptKeyName ())
key = StringReplaceSubstrings (key, "leftcontrol", "")
key = StringReplaceSubstrings (key, "rightcontrol", "")
key = StringReplaceSubstrings (key, "control", "")
key = StringReplaceSubstrings (key, "+", "")
var int n = StringToInt (key)
if !n 
n = 20
else
n = n + 10
endIf
var string m = GetFromLog (n)
CopyToClipboard (m)
SayFormattedMessage (ot_no_disable, m)
EndScript

Script ProcessMessageSegmentShift ()
GetHwndKey ()
var string key = StringLower (GetCurrentScriptKeyName ())
var int isAlt = StringContains (key, "alt") > 0
var int isCtrl = StringContains (key, "control") > 0
key = StringReplaceSubstrings (key, "leftshift", "")
key = StringReplaceSubstrings (key, "rightshift", "")
key = StringReplaceSubstrings (key, "shift", "")
key = StringReplaceSubstrings (key, "leftcontrol", "")
key = StringReplaceSubstrings (key, "rightcontrol", "")
key = StringReplaceSubstrings (key, "control", "")
key = StringReplaceSubstrings (key, "leftalt", "")
key = StringReplaceSubstrings (key, "rightalt", "")
key = StringReplaceSubstrings (key, "alt", "")
key = StringReplaceSubstrings (key, "+", "")
var int n = StringToInt (key)
if !n 
if !isCtrl 
n = 10
else
n = 20
endIf
else
if isCtrl 
n = n + 10
endIf
endIf
var string m = GetFromLog (n)
if StringContains (m, "http") 
var string u = stringChopLeft (m, StringContains (m, "http") - 1)
var int i = 1
var int l = StringLength (u)
var string goTo
while (i <= l)
var string c = SubString (u, i, 1)
if (StringIsBlank (c) || StringIsPunctuation (c) || i == l) && !StringContainsChars (c, "@#%&_-+=;:/?.") 
if i == l 
goTo = SubString (u, 1, l)
else
goTo = SubString (u, 1, i - 1)
endIf
i = l + 1
else
i = i + 1
endIf
endWhile
if goTo 
CopyToClipboard (goTo)
Say (goTo, 0, false)
Run (goTo)
endIf
endIf
EndScript

Script ToggleMirandaSpeech ()
GetHwndKey ()
var int toggleMirandaSpeech = mirandaObj[mirandaHwndStr + "spk"]
if !toggleMirandaSpeech 
toggleMirandaSpeech = 1
Say ("Incoming messages will be announced no matter which window has focus.", 0, false)
elIf toggleMirandaSpeech == 1 
toggleMirandaSpeech = 2
Say ("Incoming messages will not be announced.", 0, false)
elIf toggleMirandaSpeech == 2 
toggleMirandaSpeech = 0
Say ("Incoming messages will be announced only when the chat window has focus.", 0, false)
endIf
mirandaObj[mirandaHwndStr + "spk"] = toggleMirandaSpeech
EndScript

Script VirtualizeMsgLog ()
GetHwndKey ()
if !mirandaObj[mirandaHwndStr + "log"] 
Say ("The message log for this session is empty.", 0, false)
return
endIf
var string l = mirandaObj[mirandaHwndStr + "log"]
l = StringReplaceSubstrings (l, "\r", "\n")
l = StringReplaceSubstrings (l, "\n\n", "\n")
CopyToClipboard (l)
SayFormattedMessage (ot_user_buffer, l, "", "", "")
EndScript

String Function GetHwndKey ()
var handle hwnd = FindDescendantWindow (GetParent (GetFocus ()), mirandaMsgCtrlId)
if !mirandaEvents 
mirandaEvents = CreateObjectEx ("FreedomSci.UIA", false, "UIAScriptAPI.x.manifest")
endIf
mirandaMsgCtrl = mirandaEvents.GetElementFromHandle(hwnd)
mirandaHwndStr = "h" + IntToString (mirandaMsgCtrl.getPropertyValue(UIA_NativeWindowHandlePropertyId))
return mirandaHwndStr
EndFunction
