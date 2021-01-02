import SignUpAs from './AccountTypes/SignUpAs'
import SignUpForm from './Contractor-Components/SignUp';
import CompanyRegistration from './Company-Components/CompanySignup';
// import GetUsers from './Contractor-Components/GetUser';
import SideBar from './Contractor-Components/Contractor-Dashboard/SideNav/Sidebar';
import CompSideBar from './Company-Components/companyDashboard/sidbar/SideBar';
import UserReg from './user-components/UserReg';
import UserRegPage2 from './user-components/UserRegSecondPage';
import UserRegPage3 from './user-components/UserRegThirdPage';
import subscription from './user-components/Subscription';
import './App.css';
import {  Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>
       <Route path="/" component={SignUpAs} exact />
       <Route path="/signUp" component={SignUpForm} />
       <Route path="/comReg" component={CompanyRegistration} />
       <Route path="/dash" component={SideBar} />;
       <Route path ="/compDash" component={CompSideBar}/>
       {/* <Route path="/getUsers" component={GetUsers} />; */}
       <Route path="/userReg" component={UserReg} />;
       <Route path="/userReg-2" component={UserRegPage2} />;
       <Route path="/userReg-3" component={UserRegPage3} />;
       <Route path="/subscrip" component={subscription} />;
        
                
       </Switch>
     
       
        
     
      
    </div>
  );
}

export default App;
