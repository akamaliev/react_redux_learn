import React from 'react';
import { addServerActionCreator, serverNameInputHandlerActionCreator } from '../../redux/servers-reducer';

export default function Servers(props) {

    let inputText = React.createRef();
    let addSrv = () => {
        props.addSrv();
    };

    let inputChangeHandler = () =>  {
        let txt = inputText.current.value;
        props.inputChangeHandler(txt)
    };

    let srvs = props.srvs.map((srv, index) => {
        return (
            <li key={index}>{srv.srvName + ", " + srv.srvIp}</li>
        )
    })

    return (
        <div>
            <h1>Сервера</h1>
            <ul>
                {srvs}
            </ul>
            <input ref={inputText} type="text" value={props.srvName} onChange={inputChangeHandler}/>
            <button onClick={addSrv}>Добавить сервер</button>
        </div>
    )
}
