import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import TableForm from './Pages/TableForm'
import {Provider} from 'react-redux'
import store from './Component/Redux/Store';
import EditUser from './Pages/EditUser';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
     <Navbar/>
     <Switch>
          <Route path="/Home" component={Home}>
         
          </Route>
          <Route path="/Tableform" component={TableForm}>
          
          </Route>
          <Route path="/edit-user/" component={EditUser}>
          
          </Route>
        </Switch>

      </Router>
    
    </div>
    </Provider>
  );
}

export default App;
