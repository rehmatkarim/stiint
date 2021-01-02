function  Billing(){
    return (
        <div className="container mt-4">
            <div className="row heading-row">
            <div className="col-md-2">
                <h4><b>OVERVIEW</b></h4>
            </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-sm-6">
                <div className="card top-cards">
                <div className="card-body">
                    <p className="card-title"><b>Last Payment</b>$10.00,08 May 2017 via <b>Visa Card Ending 877**</b>
                    </p>
                    <p><b>Current Balance</b> $10</p>
                    <p className="card-text">Your Yearly Subscription will renew on <b>08 May,2018.</b></p>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card top-cards">
                <div className="card-body">
                    <p className="card-text">Visa ending in 77**</p>
                    <p className="card-text">expire on 12/2019</p>
                    <p className="card-text">USD10.00/year</p>
                    <a href="#" className="btn btn-primary-outline">CHANGE PAYMENT METHOD</a>
                </div>
                </div>
            </div>
            </div>
            <div className="row heading-table">
            <div className="col-md-4">
                <h4><b>UPCOMING INVOICE</b></h4>
            </div>
            </div>
            <div className="row justify-content-center mt-2">
            <div className="col-md-12 table-box">
                <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table user-table ">
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Refrence</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col" />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2017/2018</td>
                            <td>Yearly Subscription</td>
                            <td>STB1435738</td>
                            <td>08/May/2018</td>
                            <td>USD10.00</td>
                            <td>Upcoming</td>
                            <td className="border"><img src="images/pdf.png" /></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="row heading-table">
            <div className="col-md-4">
                <h4><b>INVOICE HISTORY</b></h4>
            </div>
            </div>
            <div className="row justify-content-center mt-2">
            <div className="col-md-12 table-box">
                <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                    <table className="table user-table ">
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Refrence</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col" />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2017/2018</td>
                            <td>Yearly Subscription</td>
                            <td>STB1435738</td>
                            <td>08/May/2018</td>
                            <td>USD10.00</td>
                            <td>Paid</td>
                            <td className="border"><img src="images/pdf.png" /></td>
                        </tr>
                        <tr>
                            <td>2015/2016</td>
                            <td>Yearly Subscription</td>
                            <td>STB1435743</td>
                            <td>08/May/2018</td>
                            <td>USD10.00</td>
                            <td>Paid</td>
                            <td className="border"><img src="images/pdf.png" /></td>
                        </tr>
                        <tr>
                            <td>2014/2015</td>
                            <td>Yearly Subscription</td>
                            <td>STB1435543</td>
                            <td>08/May/2018</td>
                            <td>USD10.00</td>
                            <td>Paid</td>
                            <td className="border"><img src="images/pdf.png" /></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
      

    );
}
export default Billing;