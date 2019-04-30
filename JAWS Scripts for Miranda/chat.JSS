Include "HjGlobal.jsh" ; default HJ global variables
Include "hjconst.jsh" ; default HJ constants
Include "common.jsm"
include "srmm.jsh" 
include "srmm.jsm" 
Void Function AutoStartEvent ()
SaveCursor ()
JAWSCursor ()
RouteJAWSToPc ()
JAWSPageUp ()
JAWSEnd ()
if StringContains (GetWord (), "max") then 
LeftMouseButton ()
endif 
EndFunction
String Function GetMessageLogWindow ()
var String MessageLogText 
let messageLogtext = GetWindowText (FindDescendantWindow (GetRealWindow (GetFocus ()), chatLogWindow_id), false)
return MessageLogText 
EndFunction
String Function GetLastMessage ()
var  string lastmessage
let lastMessage = GetFromLog (1)
return lastMessage 
EndFunction
String Function GetFromLog (int MessageNumber)
var string requestedMessage 
let requestedMessage =  GetMessageLogWindow () 
let requestedMessage = StringReverse (requestedMessage)
let RequestedMessage = StringSegment (RequestedMessage, "¦", Messagenumber)
let requestedMessage = StringReverse (requestedMessage)
return RequestedMessage 
EndFunction
Globals
string mirandaMessageWas
Void Function ReadNewMessage (handle hwnd)
if GetControlID (hwnd) == 1005 then
var object o, int cid, string s, string t, string n
let o = GetObjectFromEvent (hwnd, -4, 0, cid)
if o.accState(0) == 1048640 then
let s = o.accValue(0)
let t = mirandaMessageWas
let n = s
StringTrimCommon (n, t, 1)
let mirandaMessageWas = s
Say (n, 0, false)
endIf
endIf
EndFunction
Void Function NewTextEvent (handle hwnd, string buffer, int nAttributes,
int nTextColor, int nBackgroundColor, int nEcho, string sFrameName)
if not MenusActive ()then 
ReadNewMessage (hwnd)
else 
NewTextEvent(hWnd, buffer, nAttributes, nTextColor, nBackgroundColor, nEcho, sFrameName)
EndIf 
EndFunction
Script sayLastMessage () 
SayFormattedMessage (ot_no_disable, GetFromLog (1))
EndScript
Script message2 ()
SayFormattedMessage (ot_no_disable, GetFromLog (2))
EndScript

Script message3 ()
SayFormattedMessage (ot_no_disable, GetFromLog (3))
EndScript

Script message4 ()
SayFormattedMessage (ot_no_disable, GetFromLog (4))
EndScript

Script message5 ()
SayFormattedMessage (ot_no_disable, GetFromLog (5))
EndScript

Script message6 ()
SayFormattedMessage (ot_no_disable, GetFromLog (6))
EndScript

Script message7 ()
SayFormattedMessage (ot_no_disable, GetFromLog (7))
EndScript

Script message8 ()
SayFormattedMessage (ot_no_disable, GetFromLog (8))
EndScript

Script message9 ()
SayFormattedMessage (ot_no_disable, GetFromLog (9))
EndScript

Script message10 ()
SayFormattedMessage (ot_no_disable, GetFromLog (10))
EndScript

Script message11 ()
SayFormattedMessage (ot_no_disable, GetFromLog (11))
EndScript

Script message12 ()
SayFormattedMessage (ot_no_disable, GetFromLog (12))
EndScript

Script message13 ()
SayFormattedMessage (ot_no_disable, GetFromLog (13))
EndScript

Script message14 ()
SayFormattedMessage (ot_no_disable, GetFromLog (14))
EndScript

Script message15 ()
SayFormattedMessage (ot_no_disable, GetFromLog (15))
EndScript

Script message16 ()
SayFormattedMessage (ot_no_disable, GetFromLog (16))
EndScript

Script message17 ()
SayFormattedMessage (ot_no_disable, GetFromLog (17))
EndScript

Script message18 ()
SayFormattedMessage (ot_no_disable, GetFromLog (18))
EndScript
Script message19 ()
SayFormattedMessage (ot_no_disable, GetFromLog (19))
EndScript

Script message20 ()	
SayFormattedMessage (ot_no_disable, GetFromLog (20))
EndScript
Int Function HandleCustomWindows ()
if GetCurrentControlID () == MessageLogWindow_id then 
SayString (msg_MessageLog)
return false
Elif   GetCurrentControlID ()  == TypingMessageWindow_id then 
SayString (msg_TypeMessage)
return false 
Endif 

EndFunction
Script ScriptFileName ()
ScriptAndAppNames (msg_ScriptName)
EndScript



