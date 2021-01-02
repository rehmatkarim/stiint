import $ from 'jquery';
import './sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Billing from '../page-components/billing';
import ManageAccount from '../page-components/ManageAccount';
import ConInbox from '../page-components/Inbox';
import Dashboard from '../page-components/DashBoard';
import YourProfile from '../page-components/YourProfile';
import YourTrade from '../page-components/YourTrade';
import EmploymentHistory from '../page-components/EmploymentHistory';

function SideBar(){
    const toggleSidebar= ()=>{
        
        $("#menu-toggle").on('click', function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
    


   
   
    return (
        <Router>
            <div className="d-flex" id="wrapper">
                {/* Sidebar */}
                <div className="bg-light border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading">Logo</div>
                    <div className="list-group list-group-flush">
                    <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/contrInbox" className="list-group-item list-group-item-action bg-light">Inbox <span className="notification">2</span></Link>
                   
                    <button className="dropdown-btn">Your CV
                        <i className="fa fa-caret-down" />
                    </button>
                    <div className="dropdown-container">
                        <ul className="submenu-links">
                        <li>
                            
                            <h4 className="submenu-head" > <Link to="/yourProfile" className="list-group-item list-group-item-action bg-light">Your Profile</Link></h4>
                            
                        </li>
                        <li>
                           <Link to="/yourTrade">Your Trade</Link>
                        </li>
                        <li>
                           <Link to="/employmentHistory">Employment History</Link>
                        </li>
                        </ul>
                    </div>
                   
                    <button className="dropdown-btn">Account
                        <i className="fa fa-caret-down" />
                    </button>
                    <div className="dropdown-container">
                        <ul className="submenu-links">
                        <li>
                            
                            <h4 className="submenu-head" ><Link to="/billing"><b>Billing&gt;</b></Link></h4>
                            
                        </li>
                        <li>
                           <Link to="/accountDetails">Manage your account details</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
                {/* #sidebar-wrapper */}
                {/* Page Content */}
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <a href><img src="images/hamburger.png" id="menu-toggle" onClick={toggleSidebar} alt /></a>
                </nav>
                <Route exact path="/billing" component={Billing} />
                <Route  path="/accountDetails" component={ManageAccount} />
                <Route  path="/contrInbox" component={ConInbox} />
                <Route  path="/dashboard" component={Dashboard} />
                <Route  path="/yourProfile" component={YourProfile} />
                <Route  path="/yourTrade" component={YourTrade} />
                <Route  path="/employmentHistory" component={EmploymentHistory} />
            </div>
            
            
           
           
                
            
                {/* /#page-content-wrapper */}
        </div>
        
            

    </Router>
    );
}
export default SideBar;