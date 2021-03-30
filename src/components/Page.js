import React from 'react'
import Index from './Index'
import {
  Switch,
  Route
} from "react-router-dom";
import Cameras from './Cameras';
import Map from './Map';
import NoMatch from './NoMatch';
import ServerInfo from './ServerInfo';
import BadCams from './BadCams';
import {ChatContainer} from './Chat/ChatContainer';
import { ServersContainer } from './Servers/ServersContainer';

export default function Page(props) {

    let badCams = props.state.badCamsPage.badCams;
    let camsList = props.state.camsListPage.camsList;

    return (
        <div className="page">
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>            
                <Route exact path="/servers">
                    <ServersContainer store={props.store}/>
                </Route>
                <Route exact path="/servers/:id">
                    <ServerInfo />
                </Route>
                <Route path="/cameras">
                    <Cameras camsList={camsList} />
                </Route>
                <Route path="/map">
                    <Map />
                </Route>
                <Route path="/badcams">
                    <BadCams badCams={badCams}/>
                </Route>
                <Route path="/chat">
                    <ChatContainer store={props.store}/>
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>            
        </div>
    )
}
