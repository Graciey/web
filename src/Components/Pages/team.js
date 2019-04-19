import React from 'react';
import Navbar from '../Navbar/navbar';

// Imports Images
import '../../css/team.css';
import TeamImg from '../../images/ad_board.jpg';


const Team = ()=> {
    return(
        <div>
            {/* <Navbar/>
            <div className="title-bar">
                <div className="container">
                    <nav className="nav d-flex ">
                        <div className="col-12">
                            <h3>Company</h3></div>
                        <p className="px-1">
                            <a className="p-2 text-muted" href="/#/about">About Us</a> |
                            <a className="p-2 text-muted" href="/#/team">Team</a>
                        </p>

                    </nav>
                </div>
            </div> */}

            <div className="bg_up">
        <div className="bg-top text-center">
            <p>MEET THE TEAMS</p>
        </div>
        <div className="bg_container">
            <div className="clearfix">
                <div className="grid">
                    <figure className="">
                        <figcaption>
                            <div className='text-center board'>
                                <h2>BOARD OF <br />DIRECTORS</h2>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="effect-goliath">
                        <img src={TeamImg} alt="img23" />
                        <figcaption>
                            <div className='goliath_text text-justify'>
                                <h2>Jane Doe</h2>
                                <span className="">Chairman & Investor</span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempora dolor quaenam beatae? Quasi quia accusamus sequi, eum in alias impedit.<br/><span className="text-primary font-weight-bold text_color"><a href="#"><i className="fas fa-plus text-primary"></i>READMORE..</a></span></p>

                            {/* <!-- <a href="#">View more</a> --> */}
                        </figcaption>
                    </figure>
                    <figure className="effect-goliath">
                        <img src={TeamImg} alt="img23" />
                        <figcaption>
                            <div className='goliath_text  text-justify'>
                                <h2>Jane Doe</h2>
                                <span className="">Chairman & Investor</span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempora dolor quae
                                nam
                                beatae? Quasi quia accusamus sequi, eum in alias impedit...<br /><span
                                    className="text-primary font-weight-bold text_color"><a href="#"><i className="fas fa-plus text-primary"></i>READ
                                        MORE..</a></span></p>
                            {/* <!-- <a href="#">View more</a> --> */}
                        </figcaption>
                    </figure>
                </div>
                <div className="grid">
                    <figure className="effect-goliath">
                        <img src={TeamImg} alt="img23" />
                        <figcaption>
                            <div className='goliath_text  text-justify'>
                                <h2>Jane Doe</h2>
                                <span className="">Chairman & Investor</span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempora dolor quae
                                nam
                                beatae? Quasi quia accusamus sequi, eum in alias impedit..<br /><span
                                    className="text-primary font-weight-bold text_color"><a href="#"><i className="fas fa-plus text-primary"></i>READ
                                        MORE..</a></span></p>
                            {/* <!-- <a href="#">View more</a> --> */}
                        </figcaption>
                    </figure>
                    <figure className="effect-goliath">
                        <img src={TeamImg} alt="img23" />
                        <figcaption>
                            <div className='goliath_text  text-justify'>
                                <h2>Jane Doe</h2>
                                <span className="">Chairman & Investor</span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempora dolor quae
                                nam
                                beatae? Quasi quia accusamus sequi, eum in alias impedit..<br /><span
                                    className="text-primary font-weight-bold text_color"><a href="#"><i className="fas fa-plus text-primary"></i>READ
                                        MORE..</a></span></p>
                            {/* <!-- <a href="#">View more</a> --> */}
                        </figcaption>
                    </figure>
                    <figure className="effect-goliath">
                        <img src={TeamImg} alt="img23" />
                        <figcaption>
                            <div className='goliath_text  text-justify'>
                                <h2>Jane Doe</h2>
                                <span className="">Chairman &amp; Investor</span>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempora dolor quae
                                nam
                                beatae? Quasi quia accusamus sequi, eum in alias impedit..<br /><span
                                    className="text-primary font-weight-bold text_color"><a href="#"><i className="fas fa-plus text-primary"></i>READ
                                        MORE..</a></span></p>
                            {/* <!-- <a href="#">View more</a> --> */}
                        </figcaption>
                    </figure>
                </div>
            </div>


        </div>
    </div>

    <div style={{height: "980px"}}></div>
        </div>
    )
}
export default Team;
