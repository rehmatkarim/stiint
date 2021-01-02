import React, { useState } from "react";
import DatePicker from "react-datepicker";
import $ from 'jquery';
import { useHistory } from "react-router-dom"

import './seconPageReg.css';
function UserRegSecondPage(){
    const history = useHistory();
    const nextPage = ()=>history.push('userReg-3');
    const options = [
        "select options",
        "Driving",
        "Scaffolding",
        "Offshore Crane Operation",
        "Rope Access",
        "Deck",
        "Platform"    ];
    const [startDate, setStartDate] = useState(new Date());
    const [expiryDate, setExpiryDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [tags, setTags] = useState([]);
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
   

    const checkVal = (e)=>{
      let value = e.target.value;
     setSelectedOption(value);
     
     if (value==='Driving'){
      
         $('#drivingFields').show();
     }
     else{
         $('#drivingFields').hide();
     }
    }
    const addAnotherQualification = () =>{
        var container = document.getElementById("addQualificationFields");
        var section = document.getElementById("qualificationFields");
        container.appendChild(section.cloneNode(true));

    }
    
   
   
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                 <div className="col-md-6">
                     <div className="card-1">
                        <div className="card-body ">
                            <h4 className="text-center font-weight-bold">Your Trade</h4>
                            <p className="text-center font-weight-bold para">Your skills &amp; qualifications</p>
                            <div className="row div-row mt-3 ml-3 mr-3">
                                <div className="col-md-12 tags-input">
                                    <label className="font-weight-bold ml-2 mt-4">Your role/Skills<small>you can choose multiple</small></label>
                                    <ul id="tags">
                                        {tags.map((tag, index) => (
                                        <li key={index}>
                                        <span className='tag-title'>{tag}</span>
                                        <span className='tag-close-icon' onClick={() => removeTags(index)}>x</span>
                                    </li>
                                    ))}
                                    </ul>
                                    <input data-role="tagsinput" type="text"  onKeyUp={event => addTags(event)} className="form-control ml-0 mb-5" aria-describedby="passport" placeholder="start typing a role or skill" />
                                   
                                </div>
                            </div>
                            <div className="div-row ml-3 mr-3 " id="qualificationFields">
                            <div className="row  mt-3   justify-content-center">
                                <div className="col-md-11">
                                    <label className="font-weight-bold mt-2">Your qualifications<small> You can add one at a time</small></label>
                                    <select className="browser-default custom-select mb-3" id="qualificationSelect"
                                     value={selectedOption}
                                     onChange={(e)=>checkVal(e)} >
                                         {options.map((option) => (
                                        <option key={option} value={option}>
                                                {option}
                                        </option>
                                            ))}

                                    </select>
                                </div>
                            </div>
                            <div id="drivingFields">
                            <div className="row mt-3 justify-content-center">
                                <div className="col-md-11 ">
                                    <select className="browser-default custom-select">
                                        <option>Choose your option</option>
                                        <option value="1">Pakistan</option>
                                        <option value="2">America</option>
                                        <option value="3">Turkey</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3 justify-content-center">
                                <div className="col-md-11 ">
                                    <select className="browser-default custom-select">
                                        <option>Choose your option</option>
                                        <option value="1">Pakistan</option>
                                        <option value="2">America</option>
                                        <option value="3">Turkey</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3 justify-content-center">
                                <div className="col-md-11   ">
                                    <select className="browser-default custom-select">
                                        <option>Choose your option</option>
                                        <option value="1">Pakistan</option>
                                        <option value="2">America</option>
                                        <option value="3">Turkey</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="row mt-3 justify-content-center ml-2">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="font-weight-bold">Completion date</label>
                                        <DatePicker className="date-box" selected={startDate} onChange={date => setStartDate(date)} />  
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="font-weight-bold">Expiry date</label>
                                        <DatePicker className="date-box" selected={expiryDate} onChange={date => setExpiryDate(date)} />  
                                     </div>
                                </div>
                            </div>
                            </div>
                           
                               
                            
                            </div>
                            <div id="addQualificationFields"></div>
                            <div className="row mt-2 pl-3 pr-3 justify-content-center">
                                <div className="col-md-12 text-center">
                                    <button className="btn btn-add"  type="button" id="addQualification" onClick={addAnotherQualification} >+Add another qualification</button>
                                 </div>
                            </div>
                        <div>
                        
                         <button type="save" className="btn btn-continue2" onClick={nextPage}><b>CONTINUE</b> </button>
                         </div>
                    </div>
                 </div>
                 <div className="row mt-2 pl-3 pr-3">
                    <div className="col-md-12 ">
                        <p className="text-right">Your skills &amp; qualifications</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

      
        

    

    );
}
export default UserRegSecondPage;