import React from "react";
import Navbar from "../Navbar/navbar";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="title-bar">
        <div className="container">
          <h1>Events</h1>
          <p>
            <a href="index.html">Home</a> | Events
          </p>
        </div>
      </div>
      <div className="events container py-5">
        <div className="cardDiv mb-3">
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5_tWjnSAfu7qptWZ_U5YGXLuKmfb68d1WrWw0sajyvn6dHu7"
                className="card-img"
                alt="card item"
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <div className="row pl-3">
                  <div className="">
                    <h5 className="card-title mb-3">Walk 4 Work</h5>
                    <div className="card-text mb-5">
                      <p>
                        Lorem ipsum dolor sit amet | Concert
                        <br />
                        <small>
                          <b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </b>
                        </small>
                      </p>
                    </div>
                    <p className="card-text">
                      <small className="bottom">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <div className="ml-auto text-right mt-4">
                    <h5>Registration starting soon.</h5>
                    <button className="btn btn-info px-3">Get Notified</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cardDiv mb-3">
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5_tWjnSAfu7qptWZ_U5YGXLuKmfb68d1WrWw0sajyvn6dHu7"
                className="card-img"
                alt="card item"
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <div className="row pl-3">
                  <div className="">
                    <h5 className="card-title mb-3">Walk 4 Work</h5>
                    <div className="card-text mb-5">
                      <p>
                        Lorem ipsum dolor sit amet | Concert
                        <br />
                        <small>
                          <b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </b>
                        </small>
                      </p>
                    </div>
                    <p className="card-text">
                      <small className="bottom">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <div className="ml-auto text-right mt-4">
                    <h5>Registration starting soon.</h5>
                    <button className="btn btn-info px-3">Get Notified</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cardDiv mb-3">
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5_tWjnSAfu7qptWZ_U5YGXLuKmfb68d1WrWw0sajyvn6dHu7"
                className="card-img"
                alt="card item"
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <div className="row pl-3">
                  <div className="">
                    <h5 className="card-title mb-3">Walk 4 Work</h5>
                    <div className="card-text mb-5">
                      <p>
                        Lorem ipsum dolor sit amet | Concert
                        <br />
                        <small>
                          <b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </b>
                        </small>
                      </p>
                    </div>
                    <p className="card-text">
                      <small className="bottom">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <div className="ml-auto text-right mt-4">
                    <h5>Registration starting soon.</h5>
                    <button className="btn btn-info px-3">Get Notified</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
