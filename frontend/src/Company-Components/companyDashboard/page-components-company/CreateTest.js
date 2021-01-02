import React from 'react'
import './createTest.css';

const CreateTest = () => {
    var i = 0;
    const addAnotherQuestion=()=>{
      
        
        var original = document.getElementById('question-box');
        var clone = original.cloneNode(true); 
        clone.id = "question-box" + ++i; 
        original.parentNode.appendChild(clone);
    }
    return (
        <>
         <div className="class col-md-8">
    <p className="create-class">
      <small>Tests&gt;</small>
    </p>
    <h5 className="font-weight-bold">Create New Test</h5>
  </div>
  <div className="inner-wrap0">
    <div className="col-md-4">
      <label className="font-weight-bold">Test Title</label>
      <input type="email" className="form-control email-field" placeholder="General Diving Test" />
    </div>
    <div className="toggle-button-wrapper">
      <div className="toggle-button-box">
        <label className="switch">
          <input type="checkbox" />
          <div className="slider" />
          <div className="text" />
        </label>
      </div>
    </div>
  </div>
  <div className="class-time">
    <div className="class col-md-4">
      <label className="font-weight-bold">Time allowed</label>
    </div>
    <div className="class col-sm-2">
      <input type="email" className="form-control email-field" placeholder="10 minutes" />
    </div>
  </div>
  <div className="class col-md-12 col-lg-8 col-xl-4">
    <div className="class card-time mt-4" id="question-box">
      <div className="font-weight-bold">Question title
        <input type="text" className="form-control email-field" placeholder="*Rapture of the deep* is an intoxicated, euphoric feeling sometimes exp" />
      </div>
      <div className="class mid-m">
        <div className="class mid-m-0">
          <label className="font-weight-bold">Answers</label>
        </div>
        <div className="class mid-m-1">
          <label className="font-weight-bold">correct</label>
        </div>
      </div>
      <div className="class1">
        <div className="class-1-0">
          <input type="text" className="form-control email-field mb-4" placeholder="Decompression Sickness(DCS)" />
        </div>
        <div className="class-1-2">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />
            </label>
          </div>
        </div>
      </div>
      <div className="class2">
        <div className="class-1-0">
          <input type="text" className="form-control email-field mb-4" placeholder="Pneumothorax" />
        </div>
        <div className="class-2-1">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />
            </label>
          </div>
        </div>
      </div>
      <div className="class3">
        <div className="class-1-0">
          <input type="text" className="form-control email-field mb-4" placeholder="Enter answer3" />
        </div>
        <div className="class-3-1">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />
            </label>
          </div>
        </div>
      </div>
      <div className="class4">
        <div className="class-1-0">
          <input type="text" className="form-control email-field mb-4" placeholder="Enter answer4" />
        </div>
        <div className="class-4-1">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row ml-3 mr-3 mt-3">
    <div className="class col-md-12 col-lg-8 col-xl-4">
      <button className="btn btn-add" type="button" id="addpassport" onClick={addAnotherQuestion}>+Add another question</button>
    </div>
  </div>
  <div className="col-md-12 col-lg-12 col-sm-8 col-xl-10 mt-4 ml-3">
    <button type="button-1" className="btn btn-savetest">SAVE TEST</button>
  </div>
        </>
    )
}

export default CreateTest;
