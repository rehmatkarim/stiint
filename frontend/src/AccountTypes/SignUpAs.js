import './SignUpAs.css'
import { useHistory } from "react-router-dom"
function SignUpAs(){
    const history = useHistory();
    const goSignUp = () => history.push('signUp');
    const goCompanyReg = () => history.push('comReg');
    const goUserReg = () => history.push('userReg');
    return (
        <div className="signUpAs">
            <div className="container">
                <div className="row mt-3 justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center main-heading">I am Signing Up As</h2>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-3 type-card" onClick={goSignUp}>
                        
                        <h4 className="text-center">Contractor</h4>
                    </div>
                    <div className="col-md-3 type-card" onClick={goCompanyReg}>
                        <h4 className="text-center">Company</h4>
                    </div>
                    <div className="col-md-3 type-card" onClick={goUserReg}>
                        <h4 className="text-center">User</h4>
                    </div>
                </div>
                
            </div>
        </div>

    );
}
export default SignUpAs;