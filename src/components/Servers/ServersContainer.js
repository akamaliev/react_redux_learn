// import React from 'react';
import { addServerActionCreator, serverNameInputHandlerActionCreator } from '../../redux/servers-reducer';
import Servers from "./Servers";
import { connect } from 'react-redux';

// export default function ServersContainer(props) {

//     let inputText = React.createRef();
//     let addSrv = () => {
//         props.dispatch(addServerActionCreator());
//     };

//     let inputChangeHandler = () =>  {
//         let txt = inputText.current.value;
//         props.dispatch(serverNameInputHandlerActionCreator(txt))
//     };

//     let srvs = props.srvs.map((srv, index) => {
//         return (
//             <li key={index}>{srv.srvName + ", " + srv.srvIp}</li>
//         )
//     })

//     return (
//         <div>
//             <h1>Сервера</h1>
//             <ul>
//                 {srvs}
//             </ul>
//             <input ref={inputText} type="text" value={props.srvName} onChange={inputChangeHandler}/>
//             <button onClick={addSrv}>Добавить сервер</button>
//         </div>
//     )
// }


let mapStateToProps = (state) => {
    return {
        serversPage: state.serversPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addSrv: () => {
            dispatch(addServerActionCreator())
        },
        inputChangeHandler: (inputTxt) => {
            dispatch(serverNameInputHandlerActionCreator(inputTxt))
        }
    }
};

export const ServersContainer = connect(mapStateToProps, mapDispatchToProps)(Servers)