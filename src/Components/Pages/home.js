import React from "react";

// Imports
import Logo from "../../images/logo.png";
import CompanyLogo2 from "../../images/company-logo2.png";
import CompanyLogo from "../../images/company-logo.png";
import AdCard from "../../images/adcard.png";
import EmCard from "../../images/emcard.png";
import JobCard from "../../images/jobcard.png";
import Coming from "../../images/comingsoon.png";
import Compare from "../../images/compare-after.png";
import Sms from "../../images/envelope1.png";
import io from 'socket.io-client';

import axios from "axios";

var img = [CompanyLogo2,CompanyLogo];
var link = "<span><a href='#'>Apply</a> | <a href='#'>Refer</a></span>";
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
            var img1 = document.createElement('img');
            var row = table.insertRow(i);
            var cella = row.insertCell(0);
            img1.src = `${Sms}`;
            img1.style.height ='25px';
            console.log(img1);
            cella.appendChild(img1);
            // cella. = `image logo here`;
            var cella = row.insertCell(1);
            cella.innerText = `${data.message[i].profession} is needed in ${data.message[i].location}`;
            var cellb = row.insertCell(2);
            cellb.innerText = data.message[i].sector;
            var cellc = row.insertCell(3);
            cellc.innerText = data.message[i].location;
            var celld = row.insertCell(4);
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
    myFunc();


})
}
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      change: "login",
      socket_change: '',
      valueInput: '+234',
      email: "",
     password: "",
    };
    this.changeLogin = this.changeLogin.bind(this);
//    this.onChange = this.onChange.bind(this);
//    this.onSubmit = this.onSubmit.bind(this);

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
  myFunction = (e)=> {
    this.setState({
        valueInput: e.target.value
    })
}

  componentDidMount() {
      Socket();

  }

  render() {
    return (
      <div>
        <section className="homeHeader">
          <div className="container">
            <nav className="nav d-flex justify-content-between">
            <a href="http://128.199.97.198/emplug-home1.com//#/" className="navbar-brand d-flex align-items-center">
                <img src={Logo} alt="emplug logo" />
              </a>
            </nav>
          </div>

          <div className="headerContent">
            <div className="row">
            <div class="col-md-7 col-sm-12 leftRow">
                    <h3>Welcome to Emplug</h3>
                    <p class="mr-5">Emplug enables everyone to plug to business, employment opportunities, services and connect with friends and family. From chatting and socializing with family and friends to getting jobs calls and alerts from employers. Emplug is a trusted service community for you to create wealth, grow your business or just have fun.
                    </p>
                </div>


              <div className="col-md-5 col-sm-12 mt-5">
                <div className="formRow">
                  {this.state.change === "login" ? (

                     <div class="formRow rounded container">

                        <div class="formTitle mb-0 ml-4">
                            <h5 class="font-weight-bold">Login</h5>
                        </div>

                        <form action="https://demo.emplug.com/users/login" method="post">
                            <div class="input-group form-group">
                                <div>
                                    <span><i class="fas fa-envelope pr-4 pb-0"></i></span>
                                </div>
                                <input type="text" name="data[User][email]" class="form-control" placeholder="Email"/>
                                <input type="hidden" name="data[User][id]" class="form-control" value="" placeholder="Email" />
                                <input type="hidden" name="_method" value="POST" class="form-control" placeholder="Email" />
                            </div>
                            <div class="input-group form-group mb-0">
                                <span><i class="material-icons text-white pr-4 pb-0 pt-2">vpn_key</i></span>
                                <input type="password" name="data[User][password]" class="form-control" placeholder="Password"/>
                            </div>
                           <div className="form-check py-4">
                                <div className="row">
                                    <div className="col">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" for="defaultCheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <div className="col ml-auto">
                                        <a href="">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="LOGIN" class="btn btn-block login_btn"  onClick={this.onSubmit}/>
                            </div>
                        </form>

                        <div class="pt-1">
                            <div class="small container-fluid">
                                <div class=" d-flex justify-content-end">
                                    <p class="">Don't have an Account? <a href="#" class="text-light redirect"   >Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                  ) : this.state.change === "register" ? (

                    <div className="sign_up px-3">
                        <h6 className='pt-3 font-weight-bold'>
                            <span className="underline mr-1">GET STARTED</span><span>- IT'S
                            FREE</span>
                        </h6>
                        {/* <hr className="text-light"/> */}
                        <div className="mt-0">
                            <form>
                               <div className="row ">
                                <div className="col-6">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                    placeholder="First name"
                                    required
                                />
                                </div>
                                <div className="col-6">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                    placeholder="Last name"
                                    required
                                />
                                </div>
                            </div>
                            <div className=''>
                                <select name="countryCode" onChange={this.myFunction} className='text-light form-control' style={{backgroundColor: 'black'}}>

                <option data-countryCode="DZ" value="+213" >Algeria </option>
                <option data-countryCode="AD" value="+376" >Andorra </option>
                <option data-countryCode="AO" value="+244" >Angola </option>
                <option data-countryCode="AI" value="+1264">Anguilla </option>
                <option data-countryCode="AG" value="+1268">Antigua &amp; Barbuda </option>
                <option data-countryCode="AR" value="+54">Argentina</option>
                <option data-countryCode="AM" value="+374">Armenia </option>
                <option data-countryCode="AW" value="+297">Aruba </option>
                <option data-countryCode="AU" value="+61">Australia</option>
                <option data-countryCode="AT" value="+43">Austria</option>
                <option data-countryCode="AZ" value="+994">Azerbaijan </option>
                <option data-countryCode="BS" value="+1242">Bahamas </option>
                <option data-countryCode="BH" value="+973">Bahrain </option>
                <option data-countryCode="BD" value="+880">Bangladesh </option>
                <option data-countryCode="BB" value="+1246">Barbados </option>
                <option data-countryCode="BY" value="+375">Belarus </option>
                <option data-countryCode="BE" value="+32">Belgium</option>
                <option data-countryCode="BZ" value="+501">Belize </option>
                <option data-countryCode="BJ" value="+229">Benin </option>
                <option data-countryCode="BM" value="+1441">Bermuda </option>
                <option data-countryCode="BT" value="+975">Bhutan </option>
                <option data-countryCode="BO" value="+591">Bolivia </option>
                <option data-countryCode="BA" value="+387">Bosnia Herzegovina </option>
                <option data-countryCode="BW" value="+267">Botswana </option>
                <option data-countryCode="BR" value="+55">Brazil </option>
                <option data-countryCode="BN" value="+673">Brunei </option>
                <option data-countryCode="BG" value="+359">Bulgaria </option>
                <option data-countryCode="BF" value="+226">Burkina Faso </option>
                <option data-countryCode="BI" value="+257">Burundi </option>
                <option data-countryCode="KH" value="+855">Cambodia </option>
                <option data-countryCode="CM" value="+237">Cameroon </option>
                <option data-countryCode="CA" value="+1">Canada </option>
                <option data-countryCode="CV" value="+238">Cape Verde Islands </option>
                <option data-countryCode="KY" value="+1345">Cayman Islands </option>
                <option data-countryCode="CF" value="+236">Central African Republic </option>
                <option data-countryCode="CL" value="+56">Chile</option>
                <option data-countryCode="CN" value="+86">China </option>
                <option data-countryCode="CO" value="+57">Colombia </option>
                <option data-countryCode="KM" value="+269">Comoros </option>
                <option data-countryCode="CG" value="+242">Congo </option>
                <option data-countryCode="CK" value="+682">Cook Islands </option>
                <option data-countryCode="CR" value="+506">Costa Rica </option>
                <option data-countryCode="HR" value="+385">Croatia </option>
                <option data-countryCode="CU" value="+53">Cuba </option>
                <option data-countryCode="CY" value="+90392">Cyprus North </option>
                <option data-countryCode="CY" value="+357">Cyprus South </option>
                <option data-countryCode="CZ" value="+42">Czech Republic </option>
                <option data-countryCode="DK" value="+45">Denmark </option>
                <option data-countryCode="DJ" value="+253">Djibouti </option>
                <option data-countryCode="DM" value="+1809">Dominica </option>
                <option data-countryCode="DO" value="+1809">Dominican Republic </option>
                <option data-countryCode="EC" value="+593">Ecuador </option>
                <option data-countryCode="EG" value="+20">Egypt </option>
                <option data-countryCode="SV" value="+503">El Salvador </option>
                <option data-countryCode="GQ" value="+240">Equatorial Guinea </option>
                <option data-countryCode="ER" value="+291">Eritrea </option>
                <option data-countryCode="EE" value="+372">Estonia </option>
                <option data-countryCode="ET" value="+251">Ethiopia </option>
                <option data-countryCode="FK" value="+500">Falkland Islands </option>
                <option data-countryCode="FO" value="+298">Faroe Islands </option>
                <option data-countryCode="FJ" value="+679">Fiji </option>
                <option data-countryCode="FI" value="+358">Finland </option>
                <option data-countryCode="FR" value="+33">France</option>
                <option data-countryCode="GF" value="+594">French Guiana </option>
                <option data-countryCode="PF" value="+689">French Polynesia </option>
                <option data-countryCode="GA" value="+241">Gabon </option>
                <option data-countryCode="GM" value="+220">Gambia </option>
                <option data-countryCode="GE" value="+7880">Georgia </option>
                <option data-countryCode="DE" value="+49">Germany</option>
                <option data-countryCode="GH" value="+233">Ghana </option>
                <option data-countryCode="GI" value="+350">Gibraltar </option>
                <option data-countryCode="GR" value="+30">Greece</option>
                <option data-countryCode="GL" value="+299">Greenland </option>
                <option data-countryCode="GD" value="+1473">Grenada </option>
                <option data-countryCode="GP" value="+590">Guadeloupe </option>
                <option data-countryCode="GU" value="+671">Guam </option>
                <option data-countryCode="GT" value="+502">Guatemala </option>
                <option data-countryCode="GN" value="+224">Guinea </option>
                <option data-countryCode="GW" value="+245">Guinea - Bissau </option>
                <option data-countryCode="GY" value="+592">Guyana </option>
                <option data-countryCode="HT" value="+509">Haiti </option>
                <option data-countryCode="HN" value="+504">Honduras </option>
                <option data-countryCode="HK" value="+852">Hong Kong </option>
                <option data-countryCode="HU" value="+36">Hungary</option>
                <option data-countryCode="IS" value="+354">Iceland </option>
                <option data-countryCode="IN" value="+91">India</option>
                <option data-countryCode="ID" value="+62">Indonesia</option>
                <option data-countryCode="IR" value="+98">Iran</option>
                <option data-countryCode="IQ" value="+964">Iraq </option>
                <option data-countryCode="IE" value="+353">Ireland </option>
                <option data-countryCode="IL" value="+972">Israel </option>
                <option data-countryCode="IT" value="+39">Italy </option>
                <option data-countryCode="JM" value="+1876">Jamaica </option>
                <option data-countryCode="JP" value="+81">Japan</option>
                <option data-countryCode="JO" value="+962">Jordan </option>
                <option data-countryCode="KZ" value="+7">Kazakhstan</option>
                <option data-countryCode="KE" value="+254">Kenya </option>
                <option data-countryCode="KI" value="+686">Kiribati </option>
                <option data-countryCode="KP" value="+850">Korea North </option>
                <option data-countryCode="KR" value="+82">Korea South</option>
                <option data-countryCode="KW" value="+965">Kuwait </option>
                <option data-countryCode="KG" value="+996">Kyrgyzstan </option>
                <option data-countryCode="LA" value="+856">Laos </option>
                <option data-countryCode="LV" value="+371">Latvia </option>
                <option data-countryCode="LB" value="+961">Lebanon </option>
                <option data-countryCode="LS" value="+266">Lesotho </option>
                <option data-countryCode="LR" value="+231">Liberia </option>
                <option data-countryCode="LY" value="+218">Libya </option>
                <option data-countryCode="LI" value="+417">Liechtenstein </option>
                <option data-countryCode="LT" value="+370">Lithuania </option>
                <option data-countryCode="LU" value="+352">Luxembourg </option>
                <option data-countryCode="MO" value="+853">Macao </option>
                <option data-countryCode="MK" value="+389">Macedonia </option>
                <option data-countryCode="MG" value="+261">Madagascar </option>
                <option data-countryCode="MW" value="+265">Malawi </option>
                <option data-countryCode="MY" value="+60">Malaysia</option>
                <option data-countryCode="MV" value="+960">Maldives </option>
                <option data-countryCode="ML" value="+223">Mali </option>
                <option data-countryCode="MT" value="+356">Malta </option>
                <option data-countryCode="MH" value="+692">Marshall Islands </option>
                <option data-countryCode="MQ" value="+596">Martinique </option>
                <option data-countryCode="MR" value="+222">Mauritania </option>
                <option data-countryCode="YT" value="+269">Mayotte </option>
                <option data-countryCode="MX" value="+52">Mexico</option>
                <option data-countryCode="FM" value="+691">Micronesia </option>
                <option data-countryCode="MD" value="+373">Moldova </option>
                <option data-countryCode="MC" value="+377">Monaco </option>
                <option data-countryCode="MN" value="+976">Mongolia </option>
                <option data-countryCode="MS" value="+1664">Montserrat </option>
                <option data-countryCode="MA" value="+212">Morocco </option>
                <option data-countryCode="MZ" value="+258">Mozambique </option>
                <option data-countryCode="MN" value="+95">Myanmar</option>
                <option data-countryCode="NA" value="+264">Namibia </option>
                <option data-countryCode="NR" value="+674">Nauru </option>
                <option data-countryCode="NP" value="+977">Nepal </option>
                <option data-countryCode="NL" value="+31">Netherlands</option>
                <option data-countryCode="NC" value="+687">New Caledonia </option>
                <option data-countryCode="NZ" value="+64">New Zealand </option>
                <option data-countryCode="NI" value="+505">Nicaragua </option>
                <option data-countryCode="NE" value="+227">Niger </option>
                <option data-countryCode="NG" value="+234" selected>Nigeria </option>
                <option data-countryCode="NU" value="+683">Niue </option>
                <option data-countryCode="NF" value="+672">Norfolk Islands </option>
                <option data-countryCode="NP" value="+670">Northern Marianas </option>
                <option data-countryCode="NO" value="+47">Norway </option>
                <option data-countryCode="OM" value="+968">Oman </option>
                <option data-countryCode="PW" value="+680">Palau </option>
                <option data-countryCode="PA" value="+507">Panama </option>
                <option data-countryCode="PG" value="+675">Papua New Guinea </option>
                <option data-countryCode="PY" value="+595">Paraguay </option>
                <option data-countryCode="PE" value="+51">Peru </option>
                <option data-countryCode="PH" value="+63">Philippines </option>
                <option data-countryCode="PL" value="+48">Poland </option>
                <option data-countryCode="PT" value="+351">Portugal </option>
                <option data-countryCode="PR" value="+1787">Puerto Rico 8</option>
                <option data-countryCode="QA" value="+974">Qatar </option>
                <option data-countryCode="RE" value="+262">Reunion </option>
                <option data-countryCode="RO" value="+40">Romania</option>
                <option data-countryCode="RU" value="+7">Russia</option>
                <option data-countryCode="RW" value="+250">Rwanda </option>
                <option data-countryCode="SM" value="+378">San Marino </option>
                <option data-countryCode="ST" value="+239">Sao Tome &amp; Principe </option>
                <option data-countryCode="SA" value="+966">Saudi Arabia </option>
                <option data-countryCode="SN" value="+221">Senegal </option>
                <option data-countryCode="CS" value="+381">Serbia </option>
                <option data-countryCode="SC" value="+248">Seychelles </option>
                <option data-countryCode="SL" value="+232">Sierra Leone </option>
                <option data-countryCode="SG" value="+65">Singapore</option>
                <option data-countryCode="SK" value="+421">Slovak Republic </option>
                <option data-countryCode="SI" value="+386">Slovenia </option>
                <option data-countryCode="SB" value="+677">Solomon Islands </option>
                <option data-countryCode="SO" value="+252">Somalia </option>
                <option data-countryCode="ZA" value="+27">South Africa</option>
                <option data-countryCode="ES" value="+34">Spain</option>
                <option data-countryCode="LK" value="+94">Sri Lanka</option>
                <option data-countryCode="SH" value="+290">St. Helena </option>
                <option data-countryCode="KN" value="+1869">St. Kitts </option>
                <option data-countryCode="SC" value="+1758">St. Lucia </option>
                <option data-countryCode="SD" value="+249">Sudan </option>
                <option data-countryCode="SR" value="+597">Suriname </option>
                <option data-countryCode="SZ" value="+268">Swaziland </option>
                <option data-countryCode="SE" value="+46">Sweden </option>
                <option data-countryCode="CH" value="+41">Switzerland </option>
                <option data-countryCode="SI" value="+963">Syria </option>
                <option data-countryCode="TW" value="+886">Taiwan </option>
                <option data-countryCode="TJ" value="+7">Tajikstan </option>
                <option data-countryCode="TH" value="+66">Thailand </option>
                <option data-countryCode="TG" value="+228">Togo </option>
                <option data-countryCode="TO" value="+676">Tonga </option>
                <option data-countryCode="TT" value="+1868">Trinidad &amp; Tobago</option>
                <option data-countryCode="TN" value="+216">Tunisia</option>
                <option data-countryCode="TR" value="+90">Turkey</option>
                <option data-countryCode="TM" value="+7">Turkmenista </option>
                <option data-countryCode="TM" value="+993">Turkmenistan</option>
                <option data-countryCode="TC" value="+1649">Turks &amp; Caicos Islands</option>
                <option data-countryCode="TV" value="+688">Tuvalu</option>
                <option data-countryCode="UG" value="+256">Uganda</option>
                {/* <!-- <option data-countryCode="GB" value="+44">UK (+44</option> --> */}
                <option data-countryCode="UA" value="+380">Ukrain</option>
                <option data-countryCode="AE" value="+971">United Arab Emirates </option>
                <option data-countryCode="UY" value="+598">Uruguay </option>
                {/* <!-- <option data-countryCode="US" value="+1">USA (+1)</option> --> */}
                <option data-countryCode="UZ" value="+7">Uzbekistan </option>
                <option data-countryCode="VU" value="+678">Vanuatu</option>
                <option data-countryCode="VA" value="+379">Vatican City </option>
                <option data-countryCode="VE" value="+58">Venezuela </option>
                <option data-countryCode="VN" value="+84">Vietnam </option>
                <option data-countryCode="VG" value="+84">Virgin Islands - British</option>
                <option data-countryCode="VI" value="+84">Virgin Islands - US </option>
                <option data-countryCode="WF" value="+681">Wallis &amp; Futuna </option>
                <option data-countryCode="YE" value="+969">Yemen (North)</option>
                <option data-countryCode="YE" value="+967">Yemen (South)</option>
                <option data-countryCode="ZM" value="+260">Zambia </option>
                <option data-countryCode="ZW" value="+263">Zimbabwe </option>

</select>

                                </div>

                            <div className="row my-1">
                                <div className="col-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="myText"
                                    placeholder=""
                                    value={this.state.valueInput}
                                    required
                                />
                                </div>
                                <div className="col-8">
                                <input
                                    type="text"
                                    class="form-control"
                                    id=""
                                    placeholder="Phone Number"
                                    required
                                />
                                </div>
                            </div>
                            <div className="my-0">
                                <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Email Address"
                                required
                                />
                            </div>
                            <div className="my-0">
                                <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Password"
                                required
                                />
                            </div>
                            <div className="my-0">
                                <input
                                type="text"
                                class="form-control"
                                id=""
                                placeholder="Cofirm Password"
                                required
                                />
                            </div>
                            {/* <div className="row"> */}
                                {/* <div class="col-7">
                                <div class="form-check">
                                    <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="invalidCheck2"
                                    required
                                    />
                                    <label
                                    class="form-check-label"
                                    for="invalidCheck2"
                                    >
                                    Remember Me
                                    </label>
                                </div>
                                </div> */}
                                <div className="d-flex justify-content-start form_color">
                                    <div class="checkbox">
                                     <label  class="py-2" style={{fontSize: '12px'}}><input type="checkbox" for="exampleCheck1" /> I agree to the <a href='#' className='text-light redirect'>Terms and Conditions</a></label>
                                    </div>
                                {/* <p style={{fontSize: '12px'}} class="form-check-label py-2" ></p> */}
                                </div>
                            {/* </div> */}
                            <div class="form-group">
                                <button
                                className="btn btn-block login_btn font-weight-bold" style={{fontSize: '14px'}}><i class="fas fa-user text-dark"></i> JOIN EMPLUG NOW</button>
                            </div>
                            </form>
                            <div>
                            <p style={{fontSize: '12px'}} className='py-0 d-flex justify-content-end'>
                                have an account?
                                <a href='#'
                                className="form_color px-2 py-0 text-light redirect"
                                onClick={this.changeBackToLogin}
                                >
                                Click to Login
                                </a>
                            </p>
                            </div>
                        </div>
                        {/* <div>Helloooo <a onClick={this.changeBackToLogin}>click</a></div> */}
                    </div>

                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

         <section className="homeContent">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 plugs">
                        <h2> Everyone just loves plugging...</h2>
                        <p className="text-justify">Emplug is a social enterprise, pioneering the world's first global hub for
                            integrated democratized job access, through its innovative and low cost technology,
                            members
                            of the Emplug community are connected to its solutions including the underserved informal sector
                            players in remote locations with little or no internet access.</p>
                        <button type="button" className="btn btn-outline-success btn-lg btn_color rounded-0">Get Plugged
                            Now!</button>
                    </div>
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
                                    <tbody id="myTable">
                                        {/* <tr className="biege">
                                            <th scope="row" className="text-center"><img src={CompanyLogo}  style={{height:"30px"}} alt="logo" /></th>
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
                </div>
            </div>
        </section>

        <section className="cards" id="full">
            <div id="carouselExampleIndicators" className="carousel slide container" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row cardItems ">
                            <div className="col-md-6">
                                <img src={EmCard} className=" " />
                            </div>
                            <div className="col-md-6">
                                <h3>To Register on EMCARD</h3>
                                <p>To register, text information in format below to 32811</p>

                                <p>EMCARD <space>PIN*Employer*Industry*Location*email</space> </p>

                                <p>e.g.: EMCARD 3654918725*Eloho Eateries*Catering*Jos*info@eloho.com.ng</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row cardItems">
                            <div className="col-md-6">
                                <img src={JobCard} className=" " />
                            </div>
                            <div className="col-md-6">
                                <h3>To Register on JOBCARD</h3>
                                <p>To register, text information in format below to 32811</p>

                                <p>JOBCARD<space>PIN*Name*Current Location*Profession*Gender*State of Origin*L.G.A*email</space>
                                </p>

                                <p>e.g.: JOBCARD 5618306541*Uche Musa*Ibadan*Accountant*Male*Bauchi*Ningi*uchemusa@yahoo.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row cardItems">
                            <div className="col-md-6">
                                <img src={AdCard} className=" " />
                            </div>
                            <div className="col-md-6">
                                <h3>To Register on ADCARD</h3>
                                <p>To register, text information in format below to 32811</p>

                                <p>ADCARD<space>PIN*Company *Location*Industry*email</space> </p>

                                <p>e.g.: ADCARD 3814629025*JJ Plc<br/>*Lagos*Construction*jjplc@yahoo.com </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="phone">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-6 leftImg">
                        <h3>Plug via SMS/USSD</h3>
                        <img src={Coming} className="img-fluid" />
                        <p>
                            No internet connection? No smartphone? <br /> No airtime? No problem.
                        </p>
                    </div>
                    <div className="col-md-6 compare">
                        <img src={Compare} className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

     </div>
    );
  }
}
export default Home;
