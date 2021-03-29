import React from 'react';

export default function Chat(props) {

    debugger;

    let updatedInputTxt = props.chat.inputMsg;

    let dialogs = props.chat.dialogs.map(dialog => {
        return <li key={dialog.id}>{dialog.user}</li>
    });

    let messages = props.chat.messages.map(message => {
        return <li key={message.id}>{message.msg}</li>
    });

    let sendMsg = () => {
        props.sendMsg()
    };
    let updInputTxt = (e) => {
        props.updateInputTxt(e.target.value);
    };

    return (
        <div className="chat">
            <ul>
                {dialogs}
            </ul>
            <ul>
                {messages}
                <textarea onChange={updInputTxt } name="" id="" cols="30" rows="5" value={updatedInputTxt}></textarea><br/>
                <button onClick={sendMsg}>Send msg</button>
            </ul>
        </div>
    )
}
