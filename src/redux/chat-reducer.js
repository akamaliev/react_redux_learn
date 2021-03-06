const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
const SEND_MSG = 'SEND_MSG';

export const sendMessageActionCreator = () => (
    {
        type: SEND_MSG
    }
);

export const updateInputTxt = (txt) => (
    {
        type: UPDATE_INPUT_TEXT,
        msg: txt
    }
);

let initialState = {
            dialogs: [
                {id: 1, user: 'Ivan'},
                {id: 2, user: 'Irek'},
                {id: 3, user: 'Almaz'},
                {id: 4, user: 'Azan'},
                {id: 5, user: 'Ilnaz'},
                {id: 6, user: 'Ilnur'},
                {id: 7, user: 'Jo'}
            ],
            messages : [
                {id: 1, msg: 'Hello'},
                {id: 2, msg: 'Kak dela'},
                {id: 3, msg: 'Che kogo?'},
                {id: 4, msg: 'Kaka'},
                {id: 5, msg: 'Uiiiiii'},
                {id: 6, msg: 'Hohoho'},
            ],
            inputMsg : ''

        };

export const chatPageReducers = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_INPUT_TEXT:{
            return {
                ...state,
                inputMsg: action.msg
            }
        }

        case SEND_MSG:{
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 99,
                        msg: state.inputMsg
                    }
                ],
                inputMsg: ''
            }
        }
    
        default:
            return state;
    }


}
