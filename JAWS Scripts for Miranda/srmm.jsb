JFW Script File                                                           �   �     autostartevent       speechoff          alt+space     typekey        x     typekey         speechon                 delay         t    $hotkeyhelp      userbufferisactive          userbufferdeactivate               menusactive           (   ��Message  seshon help 

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


press escape to close this help message!      sayformattedmessage            $hotkeyhelp       �     getmessagelogwindow               getfocus      getrealwindow     �    finddescendantwindow            getwindowtext   '   %      	      D     getlastmessage            getfromlog  '   %      	      4    getfromlog     %        
       
  '       getmessagelogwindow '     %    stringreverse   '     %   :   %    stringsegment   '     %    stringreverse   '     %    stringisblank           '        %         stringchopleft  '  %    says,  
  '  %       
  '       getmessagelogwindow '     %    stringreverse   '     %   :   %    stringsegment   '     %    stringreverse   '  %  %  
  '  %        
        %         stringchopright '        %     	      D    readnewmessage       getlastmessage  &  messageis   $  messageis   $  messagewas  
                getfocus      getcontrolid      �  
          readincomingmessagesison                $  messageis   $  messageis     sayformattedmessage          $  messageis   &  messagewas        @    readtypeingmessages      typeingalertison            savecursor          invisiblecursor         routeinvisibletopc               setrestriction          jawshome            jawspagedown               getcurrentwindow            getwindowtext   &  statuslineis         restorecursor         $  statuslineis     typing    stringcontains     $  statuslineis    $  statuslinewas   
     $  statuslineis    &  statuslinewas      $  statuslineis      saystring                 &  statuslinewas            �     newtextevent                  menusactive           readtypeingmessages         readnewmessage           %   %  %  %  %  %  %    newtextevent             \     $saylastmessage                    getfromlog    sayformattedmessage       X     $message2                      getfromlog    sayformattedmessage       X     $message3                      getfromlog    sayformattedmessage       X     $message4                      getfromlog    sayformattedmessage       X     $message5                      getfromlog    sayformattedmessage       X     $message6                      getfromlog    sayformattedmessage       X     $message7                      getfromlog    sayformattedmessage       X     $message8                      getfromlog    sayformattedmessage       X     $message9                 	     getfromlog    sayformattedmessage       X     $message10                
     getfromlog    sayformattedmessage       X     $message11                     getfromlog    sayformattedmessage       X     $message12                     getfromlog    sayformattedmessage       X     $message13                     getfromlog    sayformattedmessage       X     $message14                     getfromlog    sayformattedmessage       X     $message15                     getfromlog    sayformattedmessage       X     $message16                     getfromlog    sayformattedmessage       X     $message17                     getfromlog    sayformattedmessage       X     $message18                     getfromlog    sayformattedmessage       X     $message19                     getfromlog    sayformattedmessage       X     $message20                     getfromlog    sayformattedmessage       �     handlecustomwindows      getcurrentcontrolid   �  
         message Log   saystring               	           getcurrentcontrolid   �  
         Type message      saystring               	         H     $scriptfilename     Miranda IM    scriptandappnames         �    $typingalertonoff       reading  TypingAlert       Miranda IM.ini    inireadinteger       
         reading  TypingAlert        Miranda IM.ini    iniwriteinteger        Typing alert  off     saystring             reading  TypingAlert       Miranda IM.ini    inireadinteger        
         reading  TypingAlert       Miranda IM.ini    iniwriteinteger        Typing alert  on      saystring            (    $readincomingmessagesonoff      reading  ReadIncomingMessage       Miranda IM.ini    inireadinteger       
         reading  ReadIncomingMessage        Miranda IM.ini    iniwriteinteger        read in coming messages  off      saystring             reading  ReadIncomingMessage       Miranda IM.ini    inireadinteger        
         reading  ReadIncomingMessage       Miranda IM.ini    iniwriteinteger        read in coming messages  on   saystring            �     typeingalertison        reading  TypingAlert       Miranda IM.ini    inireadinteger       
             	               	         �     readincomingmessagesison        reading  ReadIncomingMessage       Miranda IM.ini    inireadinteger       
             	               	         0    $switcheditwindows       savecursor          getcurrentcontrolid   �  
                getfocus      getappmainwindow      �    movetocontrol              getcurrentwindow      setfocus               getcurrentcontrolid   �  
                getfocus      getappmainwindow      �    movetocontrol              getcurrentwindow      setfocus                     getfocus      getappmainwindow      �    movetocontrol              getcurrentwindow      setfocus             