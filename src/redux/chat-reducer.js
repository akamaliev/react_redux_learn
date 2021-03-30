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
            let stateCopy = {...state};
            stateCopy.inputMsg = action.msg;
            return stateCopy;
        }

        case SEND_MSG:{

            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
                
            stateCopy.messages.push({
                id: 99,
                msg: stateCopy.inputMsg
            });

            stateCopy.inputMsg = '';
            return stateCopy;
        }
    
        default:
            return state;
    }


}
