JFW Script File                                                           �  h    autostartevent       autostartevent                  getscriptfilename     stringlower   chat.jsb    
     $  togglemirandaspeech            &  togglemirandaspeech    %   &  mirandaeventsx       FreedomSci.UIA          UIAScriptAPI.x.manifest   createobjectex  &  mirandaeventsx             getcurrentwindow      getappmainwindow      �    finddescendantwindow    '  %     $  mirandaeventsx    %    getelementfromhandle    &  mirandamsgctrl  $  mirandaeventsx      ]u  $  mirandamsgctrl            
    addpropertychangedeventhandler            Error: Message field not bound                say          $  mirandaeventsx    UIA_Edit_                             comattachevents                       getfromlog    sayformattedmessage                    uia_edit_propertychangedevent           %     getmessagelogwindow '  $  chatbfr '  %  &  chatbfr    %  %          stringtrimcommon          %    stringisblank        $  togglemirandaspeech      
                  getscriptfilename     stringlower   chat.jsb    
        %                say       $  togglemirandaspeech       
  # �$  togglemirandaspeech      
  
          JAWSCursor  %         sayusingvoice                     \     getmessagelogwindow    %       getvaluepattern '  %      value      	      �     getfromlog           $  mirandamsgctrl    getmessagelogwindow            %   
    stringsegment      	      T    $processmessagesegment          getcurrentscriptkeyname   stringlower '      %     shift     stringcontains  '     %     alt   stringcontains  '     %     ctrl      stringcontains  '     %     shift           stringreplacesubstrings '      %     alt         stringreplacesubstrings '      %     ctrl            stringreplacesubstrings '      %     +           stringreplacesubstrings '      %     stringtoint '  %        
       
   '     %     %        %    getfromlog  '     %          
   %  
    getfromlog  '        %    http      stringcontains        %     %    http      stringcontains       
    stringchopleft  '       '     %    stringlength    '  %  %  
        %  %         substring   ' 	    % 	   stringisblank   " �   % 	   stringispunctuation 
  # �   % 	   @#%&_-+=;:/?.     stringcontainschars   
        %       %       
    substring   ' 
 %       
  '     %       
  '         % 
       % 
   copytoclipboard       % 
               say       % 
   run             %        %    getfromlog  '     %          
   %  
    getfromlog  '        %    copytoclipboard             %    sayformattedmessage          (    $togglemirandaspeech    $  togglemirandaspeech           &  togglemirandaspeech      Incoming messages will be announced no matter which window has focus.                 say       $  togglemirandaspeech      
          &  togglemirandaspeech      Incoming messages will not be announced.                  say       $  togglemirandaspeech      
           &  togglemirandaspeech      Incoming messages will be announced only when the chat window has focus.                  say          