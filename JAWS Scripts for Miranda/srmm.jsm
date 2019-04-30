;every thing in this file should be localized.
const 
msg_ScriptName="Miranda IM",
Msg_is="is",
Msg_Says" says,",
msg_TypeMessage="Type message",
Msg_MessageLog="message Log",
msg_contactList="contact list",
Msg_TypingAlertOn="Typing alert  on",
Msg_TypingAlertOff="Typing alert  off",
msg_ReadInComingMessagesOn="read in coming messages  on",
msg_ReadInComingMessagesOff="read in coming messages  off"
messages
@msg_MessageSeshon
Message  seshon help 

settings 
%keyfor(ReadIncomingMessagesOnOff)  turns the reading of incoming messages on or off
%keyfor( TypingAlertOnOff)  turns on or off the typing alert

message reading commands 

%keyfor(sayLastMessage) Speaks the most recent message in the conversation window.
%keyfor(message2) Speaks the second most recent message in the conversation window.
%keyfor(message3)  Speaks the third most recent message in the conversation window.
%keyfor(message4) Speaks the fourth most recent message in the conversation window.
%keyfor(message5) Speaks the fifth most recent message in the conversation window.
%keyfor(message6)Speaks the sixth most recent message in the conversation window
%KeyFor(message7) Speaks the seventh most recent message in the conversation window
%KeyFor(message8) Speaks the eighth most recent message in the conversation window
%KeyFor(message9)  Speaks the ninth most recent message in the conversation window
%keyfor(message10)Speaks the tenth most recent message in the conversation window
%keyfor(message11)  Speaks the  eleventh most recent message in the conversation window
%keyfor(message12)  Speaks the  twelvth most recent message in the conversation window
%keyfor(message13) Speaks the  tirteen th most recent message in the conversation window
%keyfor(message14) Speaks the  fourteenth most recent message in the conversation window
%KeyFor(message15) Speaks the  fifteenth most recent message in the conversation window 
%KeyFor(message16) Speaks the  sixteenth most recent message in the conversation window
%KeyFor(message17) Speaks the  seventeenth most recent message in the conversation window 
%keyfor(message18) Speaks the  eightteenth most recent message in the conversation window
%keyFor(message19) Speaks the  nineteenth most recent message in the conversation window
%keyfor(message20) Speaks the  twentyth  most recent message in the conversation window


press escape to close this help message!
@@
	@Msg_ContactListHelp 
the following is a list of commands available   from the Miranda IM contact list  window. 

Main menu 
%KeyFor(MainMenu)
Opens the main menu.  
the main menu will not be documented here, do to the fact it can change depending on witch  Miranda IM plugins you
 have installed.  
note This is where you will find the options dialog witch allows you to configure the program to meat your needs.  
This dialog will change bassed on the plug -ins  you have installed, and enabled. 
So it is not posible to document this dialog here.
to open the Miranda IM help page press f1.  
this will take you to the Miranda IM support page.  


status commands 
these commands are used to set your on line status.
  so for example if you are on line but you want your friends to know that you are working you might set your status to away. 
status menu alt+s 
this opens the status menu, where you can control what your status is on each network, or on all networks.  
to control what your status is on a network bases,
  click on the network name in the menu. 
for example to set your status to off line on msn, but leave your status alone on all other networks. 
you  would select the msn menu option, with the arrow keys. Then press enter.
 You can select the off line option by  pressing  enter at this point, or you can arrow threw the other options.  
when you find the option you want press enter. 
so if you selected off line as in are above example. 
all  the msn users who have you  in   their contact list will now see that you are off line.  

the following commands are seen in the main status menu. 
 these will apply to all the networks that you are logged in to with Miranda IM.
so if for example  you were to set your status to off line here,  your status would be off line for every network. 
 Offline Ctrl+0
Online Ctrl+1
 Away Ctrl+2
 NA Ctrl+3
 Occupied Ctrl+4
 DND Ctrl+5
Free for chat Ctrl+6 
 Invisible Ctrl+7
 On the Phone Ctrl+8
 Out to Lunch Ctrl+9

contact list commands
to organize  groups use the jaws  drag and drop feature. %keyFor(DragAndDrop) 
this feature is clearly documented in jaws help and will not be documented here. 
 to open and close groups use the left and right arrow. 
so for example you are on your family group, 
and you know that you do not wish to  speak with a member of your family at this time. 
you can close this group by pressing the left arrow key.  
when you want to open it later you can press the right arrow key. 
to select contacts or groups use the up and down arrow keys. 
for example lets say you have jim grimsby you also have your mother and your bet friend Raquel. 
you have them in three groups. 
your mother is in your family   group so you would use the up and down arrows to move to family.  
then using your arrow keys move down the list to your mother. 
note if you do not see your mother here then you might need to expand this group. 
now Raquel is in friends so you would repeat the above steps to get to her. 
except this time it would be your friends group you are looking for.  
jim grimsby is in your help and support group so you would move to that group and then go under that group for him.  
now lets say you decide you want to talk to one of them let say you want to talk to Raquel you would arrow to her name with the up or down arrow. 
then to start a message session,  press enter.  
to see a list of all the available commands for the selected contact press shift+f10,
 or you can press the applications key on your keyboard, if your keyboard has one. 
so for example if you are on Raquel, and you want to send her a file you would press the applications key and go down the open menu tell you arrive on the option you want and press enter.  
note each plug-in will have different  options so it is beyond  the scope of this help message to document here. 
press escape to close this help message!
@@
@Read1st 
ok for eas of use  we have provided a profile with the best jaws configuration settings. 
my thanks to kim and sarah for there help with this.
put the file jaws_user.dat 
in the main miranda folder 
then enable the plug-ins that you wish to use in the miranda optionts dialog.
after you have enabled the plug-ins you wish to use then exit miranda restart miranda and configure the networks you wish to use.
one thing I think you might wish to do is have some sound files handy. 
from the miranda options dialog you can set sound files for many events and this is a handy feature.  this is optional there is no need to do this unless you want to.
now you need do no more configuring just use the program and have fun.
for thoughs of you that want to play with your settings more make sure you have a backup of your profile just in case you make a setting change that causes a problem for the scripts.
places that might cause problems.
you should leave your chat log and your message log  alone.  do not make any changes here what so ever.
you should never mark the box use tool style for main window. 
this causes miranda to go in to the system tray when ever you move away from it and can cause problems when trying to get it back.
make note of the plug-ins 
enabled when you first start with the jaws profile.
these should never be disabled. 
 do not do not change the plug in for sending and recieving messages. always always use the clistclasic for your contact list.
these are the settings I know about that might brake the scripts.
note as I say else where miranda is a plug-in bassed system and there for the options you have will depend on the plug ins you use.  
I do hope this helps.
now if you have questions or problems I will always try to help.  
please note I can not fix a problem I have not seen before or can not reproduce. 
you may contact me in the following ways!
email: jimgrims@pacbell.net 
the subject should read a problem or question about or with miranda.
msn: jim.grimsby@att.net 
yahoo jimgrims@pacbell.net 
aol: drpepperman32
skype jim.grimsby 
note if you just want to talk use everything but email.  I do not write letters back and forth threw email.
also if you are going to skype me take in to acount that I do have a hearing problem as well and if you do not speak good english or have a hevvy accent I may have a problem understanding you.
in such an event the best thing to do is use text chat.
I hope this helps people use miranda and I hope they injoy using it. 
@@
EndMessages 

