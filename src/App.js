import {Outlet} from "react-router-dom";
import Help from "./components/Help";
import {useDispatch} from "react-redux";
import {ToggleHelp} from "./redux/actions/ToggleHelp";


function App() {

    const dispatch=useDispatch();

  return (
    <div className="App">
        <div className="hp" onClick={()=>dispatch(ToggleHelp())}>
            <h3>?</h3>
        </div>
        <Help/>
        <Outlet/>
    </div>
  );
}

export default App;
