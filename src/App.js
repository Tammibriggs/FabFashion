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
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

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
            <Route path='/newUser'>
              <NewUser />
            </Route>
            <Route exact path='/products'>
              <ProductList />
            </Route>
            <Route path='/product/:productId'>
              <User />
            </Route>
            <Route path='/newProduct'>
              <NewUser />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
