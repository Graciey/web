import React from "react";
import Navbar from "../Navbar/navbar";

// Images


const Student = () => {
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
                            <h3>Studentpreneurship Application Form</h3>
                            <hr/>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="">First Name</label>
                                <input type="text" class="form-control"/>
                            </div>

                            <div class="col">
                            <label for="">Last Name</label>
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

                        <div class="form-group">
                        <label for="">Describe Yourself</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <small className='d-flex justify-content-end'>500 words</small>
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
                            <label for="exampleFormControlFile1">Upload your business plan and budget</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                        <div class="formText mb-3">
                            <h3>Idea Description</h3>
                            <hr/>
                            <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Name of Idea/Startup'/>
                        </div>

                        {/* <div class="row py-3">
                            <div class="col-6">
                                <label for="">Field of Work</label>
                                <select class="custom-select" id="inlineFormCustomSelectPref">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div> */}

                        <div class="form-group">
                            {/* <label for="exampleFormControlTextarea1">Your Value proposition</label> */}
                            <label id="emailHelp" class="">Tell us how your startup works and the solution you provide in 300 characters or less.</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label id="emailHelp" class="">What makes your idea unique</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label id="emailHelp" class="">What are the foreseen challenges ahead?</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        {/* <div class="form-group">
                            <small id="emailHelp" class="form-text text-muted">What are the forseen challenges ahead?</small>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div> */}

                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">I have read and agree to your <a href="tos.html">terms of
                                    service</a></label>
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
export default Student;
