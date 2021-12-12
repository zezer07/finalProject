
import {Route, Switch} from 'react-router-dom'
import MainPageComp from  './MainPage'
import CreateAccountPageComp from './CreateAccountPage'
import LogInPageComp from './LogInPage'



const HeaderComp = () =>
{

  return (
    <div className = "app-container">

      <h1 className="title"> Cinema - Subscription Web Site </h1>
      
      <Switch>
      <Route exact path="/" component={LogInPageComp} /> 
      <Route path="/CreateAccount" component={CreateAccountPageComp} />
      <Route path="/MainPage" component={MainPageComp} />     
      </Switch>

    </div>
  );
}

export default HeaderComp;