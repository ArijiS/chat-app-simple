import React, { useState, useRef, useEffect } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import { BsFillSendFill} from "react-icons/bs";
import { RiEmojiStickerLine } from "react-icons/ri";
import EmojiPicker from 'emoji-picker-react';

const MessageInput = () => {
  const { loading, sendMessage } = useSendMessage();
  const [ message, setMessage ] = useState("");
  const [ showEmojiPicker, setShowEmojiPicker ] = useState( false );
  const emojiPickerRef = useRef( null );
  const emojiPickerButtonRef = useRef( null );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message){return};
    await sendMessage(message);
    setMessage("");
  }

  useEffect(
    ()=>{
     const handleEmojiClose = ( event ) => {
      if( emojiPickerRef.current && !emojiPickerRef.current.contains( event.target ) && !emojiPickerButtonRef.current.contains( event.target )){
        setShowEmojiPicker( false );
      }
     }
     document.addEventListener( "mousedown", handleEmojiClose );

     return ()=>{
      document.removeEventListener( "mousedown", handleEmojiClose );
     }
    },
    []
  );

  return (
    <form className="relative px-4 mt-3 mb-0 flex items-center gap-x-2" onSubmit={handleSubmit}>
        
        <div className="w-full bg-base-100 flex items-center justify-between px-3 py-1.5 rounded-full">
          <div>
            <button type="button" className="cursor-pointer btn btn-circle btn-md btn-soft btn-success"
              onClick={ () => setShowEmojiPicker( prev => !prev ) } ref={ emojiPickerButtonRef }>
              <RiEmojiStickerLine className="size-8 text-primary-content"/>
            </button>

            {showEmojiPicker && (
              <div className="absolute bottom-full mb-2 left-4 message-enter" ref={ emojiPickerRef }>
                <EmojiPicker open={showEmojiPicker} onEmojiClick={( emojiData )=> { setMessage( prev=> prev + emojiData.emoji ) }}/>
              </div>
            )}
          </div>                  

            <input type="text" placeholder="Send message..." className="border w-full px-2 py-2.5 text-md text-primary-content bg-transparent border-none focus:border-base-content focus:outline-0"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}/>
            
            <button type="submit" className="cursor-pointer btn btn-circle btn-md btn-soft btn-success">
              {loading ? <span className="loading loading-spinner"></span> : <BsFillSendFill className="size-4 text-primary-content"/>}
            </button>
        </div>
        
    </form>
  )
}

export default MessageInput;