import React from "react";
import Navbar from "../Navbar/navbar";

// Images


const Intern = () => {
  return (
    <div>
      <Navbar />
      <div className="title-bar">
    <div className="container">
      <h1>Programs</h1>
      <p><a href="/#/">Home</a> | Our Programs</p>
    </div>
  </div>
  <section class="application py-5 container px-5">
  <form>
                        <div class="formText">
                            <h3>Internship Application Form</h3>
                            <hr/>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            <label for="">Title</label>
                            <select class="custom-select" id="inputGroupSelect01">
                                {/* <option selected>Choose...</option> */}
                                <option value="1">Mr</option>
                                <option value="2">Mrs</option>
                                <option value="3">Miss</option>
                            </select>
                            </div>

                            <div class="col-md-10">
                            <label for="">Full Name</label>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <label for="">Phone</label>
                                <input type="text" class="form-control"/>
                            </div>
                            <div class="col">
                                <label for="">Email</label>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="">
                                <label for="">Highest Level of education currently</label>
                                <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group">
                        <label for="">Address</label>
                        <input type="text" class="form-control" />
                        </div>
                        {/* <!-- <div class="row py-3">
                            <div class="col">
                                <label for="">Number of key team members</label>
                                <select class="custom-select" id="inlineFormCustomSelectPref">
                                    <option selected>Choose...</option>
                                    <option value="1">1 - 10</option>
                                    <option value="2">11 - 20</option>
                                    <option value="3">21 - 50</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="">Emplug ID</label>
                                <input type="text" class="form-control">
                            </div>
                        </div> --> */}
                        <div class="form-group">
                        <label id="emailHelp" class="">What are your preferred areas of work</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                       <div>
                           <label>Dates available for internship</label>
                           <div className='row'>
                                <div className="col-md-6">
                                    <input type="text" class="form-control" placeholder='From:'/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" class="form-control" placeholder='To:'/>
                                </div>

                           </div>
                       </div>
                       <div class="form-group py-2">
                            <label for="exampleFormControlFile1">Upload your CV(must include two references)</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                        <div class="form-group">
                        <label id="emailHelp" class="">What are your objectives in undertaking an internship with Emplug</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button type="submit" class="btn btn-info btn-lg w-50 py-1">Submit</button>
                        </div>
                            <div className='d-flex justify-content-center pt-2'>

                            <span>To find out more about <a href='#' style={{textDecoration: 'underline'}}>The Emplug Build Program</a> click<a href='#' style={{textDecoration: 'underline'}}> Here</a></span>
                            </div>
                    </form>

    </section>


    </div>
  );
}
export default Intern;
