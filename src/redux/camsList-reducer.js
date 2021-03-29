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
            camsList: [
                {id: '1', camName: 'Кам 1', camIp: '10.1.1.1'},
                {id: '2', camName: 'Кам 2', camIp: '10.1.1.2'},
                {id: '3', camName: 'Кам 3', camIp: '10.1.1.3'},
                {id: '4', camName: 'Кам 4', camIp: '10.1.1.4'},
                {id: '5', camName: 'Кам 5', camIp: '10.1.1.5'},
                {id: '6', camName: 'Кам 6', camIp: '10.1.1.6'}
            ]
        };

export const camsListPageReducers = (state = initialState, action) => {

    switch (action.type) {

        // case UPDATE_INPUT_TEXT:
        //     state.inputMsg = action.msg;
        //     return state;

    
        default:
            return state;
    }


}
