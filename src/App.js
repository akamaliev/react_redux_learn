import './uikit.min.css';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Page from "./components/Page";
import {
  BrowserRouter as Router
} from "react-router-dom";

function App(props) {
  return (
    
    <div className="App">
      <Router>
        <Sidebar></Sidebar>
        <Page state={props.state} dispatch={props.dispatch} store={props.store}></Page>        
      </Router>
    </div>
  );
}

export default App;
