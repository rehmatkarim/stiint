import $ from 'jquery';
import './sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DashBoard from '../page-components-company/Dashboard';
import FindContractor from '../page-components-company/FindContractor';
import Position from '../page-components-company/Positions';
import Test from '../page-components-company/Test';
import CreateTest from '../page-components-company/CreateTest';
import EditPosition from '../page-components-company/EditPosition';
import CreateNewPosition from '../page-components-company/CreateNewPosition';
import CreditsAndBilling from '../page-components-company/CreditsAndBilling';
import LoginDetails from '../page-components-company/ManageLoginDetail';


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
                    <Link to="/comp-dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/find-contract" className="list-group-item list-group-item-action bg-light">Find Contractors</Link>
                    <Link to="/positions" className="list-group-item list-group-item-action bg-light">Positions <span className="notification">2</span></Link>
                    <Link to="/test" className="list-group-item list-group-item-action bg-light">Tests</Link>
                    <button className="dropdown-btn">Account
                        <i className="fa fa-caret-down" />
                    </button>
                    <div className="dropdown-container">
                        <ul className="submenu-links">
                        <li>
                            
                            <h4 className="submenu-head" ><Link to="/creditsAndBilling"><b>Credits & Billing&gt;</b></Link></h4>
                            
                        </li>
                        <li>
                           <Link to="/loginDetails">Manage Login details</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
                {/* #sidebar-wrapper */}
                {/* Page Content */}
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <a href="#"><img src="images/hamburger.png" id="menu-toggle" onClick={toggleSidebar} alt /></a>
                </nav>
               
                <Route exact path="/comp-dashboard" component={DashBoard} />
                <Route  path="/find-contract" component={FindContractor} />
                <Route  path="/positions" component={Position} />
                <Route  path="/test" component={Test} />
                <Route  path="/createTest" component={CreateTest} />
                <Route  path="/editPosition" component={EditPosition} />
                <Route  path="/createPosition" component={CreateNewPosition} />
                <Route path="/creditsAndBilling" component={CreditsAndBilling}/>
                <Route path="/loginDetails" component={LoginDetails}/>
            </div>
            
            
           
           
                
            
                {/* /#page-content-wrapper */}
        </div>
        
            

    </Router>
    );
}
export default SideBar;