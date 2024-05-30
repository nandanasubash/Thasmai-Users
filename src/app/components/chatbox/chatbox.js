import React from 'react';

const Chatbox = () => {
    return (
        <div>
        
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary bg-slate-50">What kind of nonsense is this</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary  bg-slate-50">Put me on the Council and not make me a Master!??</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-accent  bg-slate-50">That's never been done in the history of the Jedi. It's insulting!</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-info bg-[#dcdada]">Calm down, Anakin.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-success bg-[#dcdada]">You have been given a great honor.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-warning bg-[#dcdada]">To be on the Council at your age.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-error bg-[#dcdada]">It's never happened before.</div>
            </div>
            <input class="m-20 border-black border-3 w-[70%] h-12 rounded-3xl" id="inputField3" type="text" placeholder=""/>            
            {/* <div className="absolute bottom-0 right-0 m-4 rounded-full bg-blue-600 h-16 w-16 flex items-center justify-center"></div> */}

        </div>
  
    );
};

export default Chatbox;
