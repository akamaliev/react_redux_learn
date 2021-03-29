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
            badCams: [

                ]
        };

export const badCamsPageReducers = (state = initialState, action) => {

    switch (action.type) {

        // case UPDATE_INPUT_TEXT:
        //     state.inputMsg = action.msg;
        //     return state;

    
        default:
            return state;
    }


}
