import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Login from './Component/Login';
import Profiles from './Component/Profiles';
import {Switch , Route } from 'react-router-dom'
import {Users} from './Component/Users'
import Details from './Component/Details'
import {useState} from 'react'
function App() {
  const [login, setLogin] = useState(false)
  
  return (
    <div className="App"> 
      <NavBar setLogin={setLogin} login={login}/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Login" component={Login}></Route>
        {/* <Route path="/Profiles">
        <Profiles user={Users}/>
        </Route> */}
        <Route path="/Profiles" render={(props)=> <Profiles {...props} Liste={Users}/>}></Route> 
        <Route path="/Details/:id" render={(props)=> <Details {...props} Liste={Users} />}></Route> 
                     {/* //:id parametre dynamic */}
      </Switch>
    </div>
  );
}

export default App;
