import './signUP.css';
import {useState} from 'react';
import axios from 'axios';

function SignUp(props){
    const initialFormData = Object.freeze({
        first_name: "",
        last_name: "",
        email:"",
        password:"",
        confirm_password:""
      });
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
      };
      const formSubmit = (e) => {
        e.preventDefault()
        // console.log(formData);
        // ... submit to API or something
        axios({
            method: 'post',
            url: 'http://localhost/stiint/backend/contractors/createContractor.php',
            data: formData
            
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
      };
    
    return (
        <div className="signUP mt-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center font-weight-bold main-heading">Create Contractor Account</h2>
                        <p className="text-center">All Fields Are Required</p>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form>
                            <div className="form-group">
                                <label for="firstName" className="form-labels font-weight-bold">First Name</label>
                                <input type="text" name="first_name" className="form-control form-input" id="first_name" onChange={handleChange} aria-describedby="emailHelp"/>
                               
                            </div>
                            <div class="form-group">
                                <label for="lastName" className="form-labels font-weight-bold">Last Name</label>
                                <input type="text" name="last_name" className="form-control form-input" onChange={handleChange} id="last_name"/>
                            </div>
                            <div class="form-group">
                                <label for="email" className="form-labels font-weight-bold">Email</label>
                                <input type="email" name="email" className="form-control form-input" onChange={handleChange} id="email"/>
                            </div>
                            <div class="form-group">
                                <label for="password" className="form-labels font-weight-bold">Create Password</label>
                                <input type="password" name="password"  className="form-control form-input" onChange={handleChange} id="password"/>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword" className="form-labels font-weight-bold">Confirm Password</label>
                                <input type="password" name="confirm_password" className="form-control form-input" onChange={handleChange} id="confirm_password"/>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" className="form-check-input check-terms " id="term_agreement_check"/>
                                <label className="form-check-label ml-4" for="terms_agreement">I have read and agreed to all the <a href="#" className="link-text">Terms & Conditions</a></label>
                            </div>
                            <button type="submit" className="btn btn-primary submit-button" onClick={formSubmit}>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default SignUp;