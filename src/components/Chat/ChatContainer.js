// import React from 'react'
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateInputTxt } from '../../redux/chat-reducer';
import Chat from './Chat';

// export default function ChatContainer(props) {

//     let state = props.store.getState();


//     let sendMsg = () => {
//         props.store.dispatch(sendMessageActionCreator())
//     };
//     let updInputTxt = (inputTxt) => {
//         props.store.dispatch(updateInputTxt(inputTxt))
//     };

//     return (
//         <Chat sendMsg={sendMsg} updateInputTxt={updInputTxt} chat={state.chat} />
//     )
// };

let mapStateToProps = (state) => {
    return {
        chat: state.chat
    }
};

let mapDispatchToProps = (dispatch) => {
    
    return {
        sendMsg: () => {
            dispatch(sendMessageActionCreator())
        },
        updateInputTxt: (inputTxt) => {
            dispatch(updateInputTxt(inputTxt))
        }
    }
};

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)


