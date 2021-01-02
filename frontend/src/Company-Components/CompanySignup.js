import './companySignUp.css';

function companyRegistration(){
    

    return (
        <div className="company-registration">
            <div className="container">
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <h2 className="text-center font-weight-bold">Create company Account</h2>
                    </div>
                </div>
                
                 <form>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="companyName" className="form-labels font-weight-bold">Company Name and Branch <span className="span-text font-weight-light">(required)</span></label>
                                <input type="text" className="form-control form-input" id="company_name" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            
                            <div className="form-group">
                                <label for="companyLogo" className="form-labels font-weight-bold">Logo</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile"/>
                                    <label class="custom-file-label" for="customFile">Max 1Mb jpg or png</label>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6 drop-down-box">
                            
                           
                            <label for="headQuartersLoc" className="form-labels font-weight-bold">Headquarters Location</label>
                                    <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle drop-down-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Choose Country
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Pakistan</a>
                                        <a class="dropdown-item" href="#">Russia</a>
                                        <a class="dropdown-item" href="#">Spain</a>
                                    </div>
                                </div>
                           
                           
                        </div>
                        <div className="col-md-2 city-box">
                        <label for="city" className="form-labels font-weight-bold">City</label>
                                <input type="text" className="form-control form-input" id="city_name" aria-describedby="emailHelp"/>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="Division" className="form-labels font-weight-bold">Division</label>
                                <input type="text" className="form-control form-input" id="division" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="telephone" className="form-labels font-weight-bold">Telephone</label>
                                <input type="text" className="form-control form-input" id="telephone" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="Website" className="form-labels font-weight-bold">Website</label>
                                <input type="text" className="form-control form-input" id="website" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="DesignatedPersonsName" className="form-labels font-weight-bold">Designated Persons Name</label>
                                <input type="text" className="form-control form-input" id="d_person_name" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="email" className="form-labels font-weight-bold">Login Email <span className="span-text font-weight-light">(required)Try use a generic email address as info@ or hr@</span></label>
                                <input type="text" className="form-control form-input" id="login_email" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="password" className="form-labels font-weight-bold">Password <span className="span-text font-weight-light">(required)</span></label>
                                <input type="password" className="form-control form-input" id="password" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-md-6">
                            
                        <div className="form-group">
                                <label for="c_password" className="form-labels font-weight-bold">Confirm Password <span className="span-text font-weight-light">(required)</span></label>
                                <input type="password" className="form-control form-input" id="c_password" aria-describedby="emailHelp"/>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <div class="form-group form-check">
                                <input type="checkbox" className="form-check-input check-terms " id="term_agreement_check"/>
                                <label className="form-check-label ml-4" for="terms_agreement">I have read and agreed to all the <a href="#" className="link-text">Terms & Conditions</a></label>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <div class="form-group form-check">
                        <button type="submit" className="btn btn-primary submit-button">Create Account</button>
                            </div>
                        </div>
                    </div>

                </form>
                
            </div>
        </div>

    );
}
export default companyRegistration;