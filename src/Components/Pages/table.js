import React from 'react';
import io from 'socket.io-client';

import Logo from "../../images/logo.png";
import CompanyLogo2 from "../../images/company-logo2.png";
import CompanyLogo from "../../images/company-logo.png";
import AdCard from "../../images/adcard.png";
import EmCard from "../../images/emcard.png";
import JobCard from "../../images/jobcard.png";
import Coming from "../../images/comingsoon.png";
import Compare from "../../images/compare-after.png";

const Socket = ()=> {
    const socket = io('http://207.154.228.170:9090/liveticker');

socket.on('message', (msg)=> {
    function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = previous-current;

        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
             return Math.round(elapsed/msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
             return  Math.round(elapsed/msPerMonth) + ' months ago';
        }

        else {
             return + Math.round(elapsed/msPerYear ) + ' years ago';
        }
    }

    // timeDifference(date,d)
    //=============================================>
    //array0

    var data = JSON.parse(msg);
    console.log(data.message);
    var table =  document.getElementById('myTable');
    var tr = document.getElementsByTagName('tr');
    function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = previous-current;

        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
             return Math.round(elapsed/msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
             return  Math.round(elapsed/msPerMonth) + ' months ago';
        }

        else {
             return + Math.round(elapsed/msPerYear ) + ' years ago';
        }
    }
    function myFunc() {
        for(var i = 0; i < data.message.length; i++) {
            var row = table.insertRow(i);
            var cella = row.insertCell(0);
            cella.innerText = `${data.message[i].profession} is needed in ${data.message[i].location}`;
            var cellb = row.insertCell(1);
            cellb.innerText = data.message[i].location;
            var cellc = row.insertCell(2);
            cellc.innerText = data.message[i].number;
            var celld = row.insertCell(3);
             var date = new Date(data.message[i].timestamp)
            var d = new Date();
            celld.innerText = `${timeDifference(date, d)}`;
        }
        tr[1].className = 'biege';
        tr[2].className = 'two';
        tr[3].className = 'biege';
        tr[4].className = 'two';
        tr[5].className = 'biege';
        tr[6].className = 'two';
        tr[7].className = 'biege';
        tr[8].className = 'two';
        tr[9].className = 'biege';
        table.deleteRow(-1)

    }
    myFunc()
})
}

class Table extends React.Component  {
    constructor() {
        super();
        this.state = {
          change: "login",
          socket_change: ''
        };
        this.changeLogin = this.changeLogin.bind(this);
      }
      changeLogin = () => {
        this.setState({
          change: "register"
        });
      };
      changeBackToLogin = () => {
        this.setState({
          change: "login"
        });
      };
      componentDidMount() {
          Socket();
      }
    render() {
        return(
            <div className="col-md-6 opportunities">

                <div className="table-responsive">
                    <table className="table table-sm ">
                        <thead>
                            <tr className="bg-success">
                                <th scope="col-md-1" className="lemon"></th>
                                <th scope="col-md-5" className="lemon">Opportunities</th>
                                <th scope="col-md-3" className="darkGreen">Industry</th>
                                <th scope="col-md-3" className="darkGreen">Location</th>
                                <th scope="col-md-3" className="darkGreen">Posted</th>
                            </tr>
                        </thead>
                        <tbody id='myTable'>
                            {/* <tr className="biege">
                                <th scope="row" clasName="text-center"><img src={CompanyLogo}  style={{height:"30px"}} alt="logo" /></th>
                                <td >
                                    <span id='need_1'></span>
                                </td>
                                <td id='profession_1'></td>
                                <td id='location_1'></td>
                                <td id='date_1'></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center"><img src={CompanyLogo2}  style={{height:"30px"}} alt="logo" /></th>
                                <td>
                                <span id='need_2'></span>
                                </td>
                                <td id='profession_2'></td>
                                <td id='location_2'></td>
                                <td id='date_2'></td>
                            </tr>
                            <tr className="biege">
                                <th scope="row" className="text-center"><img src={CompanyLogo} style={{height:"30px"}} alt="logo" /></th>
                                <td >
                                    <span id='need_3'></span>
                                </td>
                                <td id='profession_3'></td>
                                <td id='location_3'></td>
                                <td id='date_3'></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center"><img src={CompanyLogo2}  style={{height:"30px"}} alt="logo" /></th>
                                <td >
                                    <span id='need_4'></span>
                                </td>
                                <td id='profession_4'></td>
                                <td id='location_4'></td>
                                <td id='date_4'></td>
                            </tr>
                            <tr className="biege">
                                <th scope="row" className="text-center"><img src={CompanyLogo}  style={{height:"30px"}} alt="logo" /></th>
                                <td >
                                <span id='need_5'></span>
                                </td>
                                <td id='profession_5'></td>
                                <td id='location_5'></td>
                                <td id='date_5'></td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center"><img src={CompanyLogo2}  style={{height:"30px"}} alt="logo" /></th>
                                <td >
                                <span id='need_6'></span>
                                </td>
                                <td id='profession_6'></td>
                                <td id='location_6'></td>
                                <td id='date_6'></td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

            </div>


        )
    }
}
export default Table;
