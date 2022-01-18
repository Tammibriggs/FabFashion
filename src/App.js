import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <UserList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
