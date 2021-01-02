import './inbox.css';
// import $ from 'jquery';
function ContractorInbox(){
  
    // const changeActive = () =>{
    //     $('#button-available').removeClass('button-active');
    //     $('#button-won').addClass('button-active');
    //     $('#available-screen').css('display','none');
    //     $('#won-screen').css('display','block');

    // }
    // const activeChange = ()=>{
    //     $('#button-won').removeClass('button-active');
    //     $('#button-lost').addClass('button-active');
    //     $('#won-screen').css('display','none');
    //     $('#lost-screen').css('display','block');

    // }
    return (
        <div className="contractor-inbox">
            <>
  <div className="row">
    <div className="col-md-4 ml-5 mt-5">
      <h5><label className="font-weight-bold ">Inbox</label></h5>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4 mt-2">
      <div className="btn-group " id="btn-container">
        <button type="button" id="button-available" className="btn btn-available button-active btn-class">Available(2)</button>
        <button type="button" id="button-won" className="btn btn-won  btn-class">Won(1)</button>
        <button type="button" id="button-lost" className="btn btn-lost  btn-class">Lost(120)</button>
      </div>
    </div>
  </div>
  <div id="available-screen">
  <div className="apply-div">
    <div className="row">
      <div className="col-md-12 ml-3">
        <div className="form-group">
          <h5>
            <p className="font-weight-bold mt-2">Saturation divers wanted for 2 month contract</p>
          </h5>
        </div>
      </div>
      <div className="row row-ms">
        <div className="col-md-12 ml-3">
          <div className="square-list">
            <ul>
              <li><i className="fa fa-square" aria-hidden="true" /><span> Starts 1 May 2018</span></li>
              <li><i className="fa fa-square" aria-hidden="true" /><span> 6 Weeks</span></li>
              <li><i className="fa fa-square" aria-hidden="true" /><span> Dubai</span></li>
              <li><i className="fa fa-square" aria-hidden="true" /><span> USD 100/Day</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row hr-tag ml-1 mb-2">
      <div className="col-md-4">
        <br />
        <hr width="500px" />
      </div>
    </div>
    <div className="row dummy ml-1 mb-2">
      <div className="col-md-10">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio culpa aut blanditiis nulla tempore, odit facilis reiciendis,</p>
      </div>
    </div>
    <div className="row justify-content-md-end">
      <div className="col-md-4 mt-2 app-col">
        <div className="btn-group apply-btn">
          <button type="button" className="btn btn-app">APPLY</button>
          <button type="button" className="btn btn-left">47:23M LEFT</button>
        </div>
      </div>
    </div>
  </div>
  <div className=" apply-div">
    <div className="row  ">
      <div className="col-md-12 ml-3">
        <div className="form-group">
          <h5>
            <p className="font-weight-bold mt-2">Saturation Dive supervisor</p>
          </h5>
        </div>
      </div>
      <div className="row row-ms">
        <div className="col-md-12 ml-3">
          <div className="square-list ">
            <ul>
              <li><i className="fa fa-square" aria-hidden="true" /><span> Starts 1 June 2018</span></li>
              <li><i className="fa fa-square" aria-hidden="true" /><span> 6 Weeks</span></li>
              <li><i className="fa fa-square" aria-hidden="true" /><span> Mozambique</span></li>
              <li><i className="fa fa-square" aria-hidden="true" /><span> USD 200/Day</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row hr-tag ml-1 mb-2">
      <div className="col-md-4">
        <br />
        <hr width="500px" />
      </div>
    </div>
    <div className="row dummy ml-1 mb-2">
      <div className="col-md-10">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio culpa aut blanditiis nulla tempore, odit facilis reiciendis,</p>
      </div>
    </div>
    <div className="row justify-content-md-end">
      <div className="col-md-4 mt-2 app-col">
        <div className="btn-group apply-btn">
          <button type="button" className="btn btn-app">APPLY</button>
          <button type="button" className="btn btn-left">47:23M LEFT</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  
    <div id="won-screen">
    <div className=" apply-div">
  <div className="row  ">
    <div className="col-md-12 ml-3">
      <div className="form-group">
        <h5>
          <p className="font-weight-bold mt-2">Sat divers x3</p>
        </h5>
      </div>
    </div>
    <div className="row row-mk">
      <div className="col-md-12 ">
        <div className="square-list">
          <ul>
            <li><i className="fa fa-square" aria-hidden="true" /><span> Starts 1 May 2018</span></li>
            <li><i className="fa fa-square" aria-hidden="true" /><span> 6 Weeks</span></li>
            <li><i className="fa fa-square" aria-hidden="true" /><span> Dubai</span></li>
            <li><i className="fa fa-square" aria-hidden="true" /><span> USD 100/Day</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row hr-tag ml-1 mb-2">
    <div className="col-md-4">
      <br />
      <hr width="500px" />
    </div>
  </div>
  <div className="row dummy ml-1 mb-2">
    <div className="col-md-10">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio culpa aut blanditiis nulla tempore, odit facilis reiciendis,</p>
    </div>
  </div>
  <div className="row justify-content-md-end">
    <div className="col-md-12 col-sm-6 col-lg-6 app-col1">
      <i className="fa fa-trophy" /> <span className="mt-2"><b>The employer will contact you soon</b></span>
    </div>
  </div>
</div>

    </div>
    <div id="lost-screen">
    <div className=" apply-div">
  <div className="row  ">
    <div className="col-md-12 ml-3">
      <div className="form-group">
        <h5>
          <p className="font-weight-bold mt-2">Lost divers x3</p>
        </h5>
      </div>
    </div>
    <div className="row row-mk">
      <div className="col-md-12 ">
        <div className="square-list">
          <ul>
            <li><i className="fa fa-square" aria-hidden="true" /><span> Starts 1 May 2018</span></li>
            <li><i className="fa fa-square" aria-hidden="true" /><span> 6 Weeks</span></li>
            <li><i className="fa fa-square" aria-hidden="true" /><span> Dubai</span></li>
            <li><i className="fa fa-square" aria-hidden="true" /><span> USD 100/Day</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row hr-tag ml-1 mb-2">
    <div className="col-md-4">
      <br />
      <hr width="500px" />
    </div>
  </div>
  <div className="row dummy ml-1 mb-2">
    <div className="col-md-10">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio culpa aut blanditiis nulla tempore, odit facilis reiciendis,</p>
    </div>
  </div>
  <div className="row justify-content-md-end">
    <div className="col-md-12 col-sm-6 col-lg-6 app-col1">
      <i className="fa fa-trophy" /> <span className="mt-2"><b>The employer will contact you soon</b></span>
    </div>
  </div>
</div>

    </div>
 </>

        </div>
    );
}
export default ContractorInbox;