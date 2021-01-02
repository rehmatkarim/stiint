import('./manageAccount.css');
function ManageAccount(){
    return (
        <div>
            
        <div className="main-container">
            <div className="row top-row">
            <div className="col-md-6">
                <p>Account&gt;</p>
                <h4 className="top-head"><b>Manage Login Details</b></h4>
            </div>
            </div>
        </div>
        {/*Step 1 : Adding HTML*/}
        <div className="main-container">
            <div className="row ">
            <div className="col-md-3">
                <form>
                <div className="form-group">
                    <label><b>First Name</b> </label>
                    <input type="fname" className="form-control" id="fname" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    <label><b>Last Name</b></label>
                    <input type="lname" className="form-control" placeholder="Enter Last Name" />
                </div>
                <div className="form-group">
                    <label><b>Email</b></label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label><b>Password</b></label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label><b>Confirm Password</b></label>
                    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" />
                </div>
                <div>
                    <button type="save" className="btn btn-save"><b>SAVE CHANGES</b> </button>
                    <span>or <a href="#" className="cancel-link">Cancel</a></span>
                </div>
                </form>
            </div>
            </div>
        </div>

</div>
       
  
    );
}
export default ManageAccount;