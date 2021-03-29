const ADD_SERVER = 'ADD-SERVER';
const INPUT_HANDLER = 'INPUT-HANDLER';

export const addServerActionCreator = () => (
        {
            type: 'ADD-SERVER'
        }
);

export const serverNameInputHandlerActionCreator = (txt) => (
        {
            type: 'INPUT-HANDLER',
            txt: txt
        }
);

let initialState = {
            srvs: [
                        {id: '1', srvName: 'Сервер 1', srvIp: '10.1.1.1'},
                        {id: '2', srvName: 'Сервер 2', srvIp: '10.1.1.2'}
                    ],
            srvName: ''
        };


export const serversPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_SERVER:
            state.srvs.push({
                id: 7,
                srvName: state.srvName
            });
            state.srvName = '';
            return state;

        case INPUT_HANDLER:
            state.srvName = action.txt;
            return state;

        default:
            return state;
    }

}