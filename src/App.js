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
import User from "./pages/user/User";

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
            <Route exact path='/users'>
              <UserList />
            </Route>
            <Route path='/users/:userId'>
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
