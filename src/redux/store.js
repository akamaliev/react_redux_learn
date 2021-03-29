import { chatPageReducers } from "./chat-reducer";
import { serversPageReducer } from "./servers-reducer";
import { badCamsPageReducers } from "./badCams-reducer";



let store = {
    _state: {
        serversPage: {
            srvs: [
                        {id: '1', srvName: 'Сервер 1', srvIp: '10.1.1.1'},
                        {id: '2', srvName: 'Сервер 2', srvIp: '10.1.1.2'},
                        {id: '3', srvName: 'Сервер 3', srvIp: '10.1.1.3'},
                        {id: '4', srvName: 'Сервер 4', srvIp: '10.1.1.4'},
                        {id: '5', srvName: 'Сервер 5', srvIp: '10.1.1.5'},
                        {id: '6', srvName: 'Сервер 6', srvIp: '10.1.1.6'}
                    ],
            srvName: ''
        },
        badCamsPage: {
            badCams: [

                ]
        },
        camsListPage : {
            camsList: [
                {id: '1', camName: 'Кам 1', camIp: '10.1.1.1'},
                {id: '2', camName: 'Кам 2', camIp: '10.1.1.2'},
                {id: '3', camName: 'Кам 3', camIp: '10.1.1.3'},
                {id: '4', camName: 'Кам 4', camIp: '10.1.1.4'},
                {id: '5', camName: 'Кам 5', camIp: '10.1.1.5'},
                {id: '6', camName: 'Кам 6', camIp: '10.1.1.6'}
            ]
        },
        chat : {
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

        }
    },
    _rerenderFunction(){},
    subscribe (observer) {
        this._rerenderFunction = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action){
        this._state.serversPage = serversPageReducer(this._state.serversPage, action);
        this._state.chat = chatPageReducers(this._state.chat, action);
        this._rerenderFunction();
    }
};



export default store;
