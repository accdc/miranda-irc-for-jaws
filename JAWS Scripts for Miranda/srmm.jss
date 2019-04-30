Include "HjGlobal.jsh" ; default HJ global variables
Include "hjconst.jsh" ; default HJ constants
Include "common.jsm"
include "srmm.jsh" 
include "srmm.jsm" 

Void Function AutoStartEvent ()
SpeechOff ()
TypeKey ("alt+space")
TypeKey ("x")
SpeechOn ()
Delay (15)
;PerformScript sayLastMessage()
EndFunction
Script HotKeyHelp ()
If UserBufferIsActive () then
	UserBufferDeactivate ()
endif 
if not MenusActive () then
SayFormattedMessage (ot_user_buffer,msg_MessageSeshon
)
else 
PerformScript HotKeyHelp()
EndIf
EndScript
String Function GetMessageLogWindow ()
var String MessageLogText 
let messageLogtext = GetWindowText (FindDescendantWindow (GetRealWindow (GetFocus ()), MessageLogWindow_id), false)
return MessageLogText 
EndFunction


String Function GetLastMessage ()
var  string lastmessage
let lastMessage = GetFromLog (1)
return lastMessage 
EndFunction





String Function GetFromLog (int MessageNumber)
var String UserName
var string requestedMessage 
var int MessageCount
let MessageCount = messageNumber*3-1
let username= GetMessageLogWindow ()
let UserName = StringReverse (username)
let UserName = StringSegment (Username,":", MessageCount)
let username = StringReverse (username)
if StringIsBlank (username) then 
let requestedmessage =""
else
let username = stringChopLeft (username, 6)
Let userName = username+msg_says
let messageCount = messageCount-1
let requestedMessage =  GetMessageLogWindow () 
let requestedMessage = StringReverse (requestedMessage)
let RequestedMessage = StringSegment (RequestedMessage, ":", MessageCount)
let requestedMessage = StringReverse (requestedMessage)
let requestedMessage = Username+requestedMessage
if   messageNumber >= 2 then 
let requestedMessage = stringChopRight (requestedMessage, 2)  

endif
endif 
return RequestedMessage 
EndFunction


Void Function ReadNewMessage ()
let messageIs = GetLastMessage ()
if messageIs == MessageWas Then 
Else 
if     GetControlID (GetFocus ()) != MessagelogWindow_id then  
if ReadIncomingMessagesIsOn () then 
SayFormattedMessage (ot_no_disable, MessageIs, MessageIs)
endif 
EndIf 
let messageWas = MessageIs 
EndIf 
EndFunction

Void Function ReadTypeingMessages ()
if TypeingAlertIsOn () then 
SaveCursor ()
InvisibleCursor ()
RouteInvisibleToPc ()
SetRestriction (RestrictRealWindow )
JAWSHome ()
JAWSPageDown ()
let StatusLineIs =  GetWindowText (GetCurrentWindow (), false)
RestoreCursor ()
if StringContains (statusLineIs, "typing")then 
if StatusLineIs != StatusLineWas then 
let StatusLineWas = StatusLineIs 
SayString (statusLineIs)
EndIf
else 
let statusLineWas = " "
EndIf
endif 
EndFunction

Void Function NewTextEvent (handle hwnd, string buffer, int nAttributes,
int nTextColor, int nBackgroundColor, int nEcho, string sFrameName)
if not MenusActive ()then 
ReadTypeingMessages ()

ReadNewMessage ()
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

Script TypingAlertOnOff ()
if IniReadInteger ("reading", "TypingAlert", 1, "Miranda IM.ini") ==1 then 
IniWriteInteger ("reading", "TypingAlert", 0, "Miranda IM.ini")
SayString (msg_typingAlertOff)
elif IniReadInteger ("reading", "TypingAlert", 1, "Miranda IM.ini") == 0 then 
IniWriteInteger ("reading", "TypingAlert", 1, "Miranda IM.ini")
SayString (msg_typingAlertOn)
EndIf 
EndScript

Script ReadIncomingMessagesOnOff ()
if IniReadInteger ("reading", "ReadIncomingMessage", 1, "Miranda IM.ini")==1 then 
IniWriteInteger ("reading", "ReadIncomingMessage", 0, "Miranda IM.ini")
SayString (msg_ReadIncomingMessagesOff)
elif IniReadInteger ("reading", "ReadIncomingMessage", 1, "Miranda IM.ini")==0 then 
IniWriteInteger ("reading", "ReadIncomingMessage", 1, "Miranda IM.ini")
SayString (msg_ReadIncomingMessagesOn)
EndIf 
EndScript

Int Function TypeingAlertIsOn ()
if IniReadInteger ("reading", "TypingAlert", 1, "Miranda IM.ini") ==1 then 
return true 
else return false 
Endif 

EndFunction

Int Function ReadIncomingMessagesIsOn ()
if IniReadInteger ("reading", "ReadIncomingMessage", 1, "Miranda IM.ini")==1 then 
return true 
else 
return false 
EndIf
EndFunction

Script switchEditWindows ()
SaveCursor ()
if GetCurrentControlID () == MessageLogWindow_id then 
MoveToControl (GetAppMainWindow (GetFocus ()), TypingMessageWindow_id)
SetFocus (GetCurrentWindow ())
Elif   GetCurrentControlID ()  == TypingMessageWindow_id then 
MoveToControl (GetAppMainWindow (GetFocus ()), MessagelogWindow_id)
SetFocus (GetCurrentWindow ())
else 
MoveToControl (GetAppMainWindow (GetFocus ()), TypingMessageWindow_id)
SetFocus (GetCurrentWindow ())
Endif 
EndScript
