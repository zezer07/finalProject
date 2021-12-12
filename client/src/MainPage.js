import './App.css';

import{Switch,Route} from 'react-router-dom'
import MoviesPageComp from './MoviesPage'
import SubscriptionsPageComp from './SubscriptionsPage'
import UsersManagementPageComp from'./UsersManagementPage'
import EditUserPageComp from './EditUserPage'
import AddUserPageComp from './AddUserPage'


function MainPageComp(props) {

const movies = () => {
  props.history.push("/MainPage/Movies");
}

const subscriptions = () => {
  props.history.push("/MainPage/Subscriptions");
}

const userManagement = () => {
  props.history.push("/MainPage/UsersManagement");
}

const logOut = () => {
  props.history.push("/");
}


  return (

    <div>

   <input type="button" className="buttonMainPage" value="Users Management" onClick={userManagement} />
   <input type="button" className="buttonMainPage" value="Movies" onClick={movies} />
   <input type="button" className="buttonMainPage" value="Subscriptions" onClick={subscriptions} />
   <input type="button" className="buttonMainPage" value="Log Out" onClick={logOut} />

   <Switch>

  <Route path="/MainPage/UsersManagement" component={UsersManagementPageComp}/> 
  <Route path="/MainPage/Movies" component={MoviesPageComp}/>
  <Route path="/MainPage/Subscriptions"component={SubscriptionsPageComp}/> 
  <Route path="/MainPage/EditUser/:id"component={EditUserPageComp}/> 
  <Route path="/MainPage/AddUser"component={AddUserPageComp}/> 
  

  </Switch>

    </div>


  );
}

export default MainPageComp;