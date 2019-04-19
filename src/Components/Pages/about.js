import React from 'react';
import Navbar from '../Navbar/navbar';

// Imports Images
import AdCard from '../../images/adcard.png';
import EmCard from '../../images/emcard.png';
import JobCard from '../../images/jobcard.png';


const About = ()=> {
    return(
        <about>
            <Navbar/>
            <div class="title-bar">
            <div class="container">
                <nav class="nav d-flex ">
                    <div class="col-12">
                        <h3>Company</h3>
                    </div>
                    <p class="px-1">
                        <a class="p-2 text-muted" href="#">About Us</a> |
                        <a class="p-2 text-muted" href="http://128.199.97.198/emplug-home1.com/#/team">Team</a>
                    </p>

                </nav>
            </div>
        </div>

        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Who We Are</h1>
                        <p>Emplug is a social enterprise, pioneering the world's first global hub for integrated
                            democratized job access, collaborative entrepreneurial support services and a unique process
                            of
                            integrating the informal sector into the formal economy. Emplug, leverages the power of
                            technology to facilitate its processes. Through its innovative and low cost services,
                            members of
                            the Emplug community are connected to its solutions including the underserved informal
                            sector
                            players in remote locations with little or no internet access. </p>

                        <p>At Emplug, we recognize that the informal sector makes up a significant portion of the world
                            workforce (61%), even though it is often characterized as difficult and uncontrollable. This
                            enormous sector provides critical economic opportunities for the underserved members of the
                            society. Given the importance of these critical players, Emplug facilitates the integration
                            of
                            the informal economy into the formal sector working through a multi-stakeholder partnership
                            strategy. As a result, releases the enormous potential of the sector for all stakeholders
                            thereby creating a win-win scenario for the government and other players in the economy.
                        </p>
                        <p>
                            Given our belief that enterprise and society can be mutually reinforcing, Emplug facilitates
                            the
                            implementation of social causes in line with its vision, geared towards creating shared
                            value
                            and sustainable home-grown solutions in underserved communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="mission">
            <div className="text-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Our<br /> Mision</h1>
                        </div>
                        <div className="col-md-6 ">

                            <p className="text-justify">We are committed to curbing global unemployment in the formal and
                                informal economic sectors,
                                by making our platform and
                                solutions easy and affordable to all especially the informal sector, with or without
                                internet access or facility.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="vision">
            <div className="text-center py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <h1>Our<br /> Vision</h1>
                        </div>
                        <div className="col-md-6 mt-3 ">

                            <p className="text-justify">Our Vision is to build a working nation where everyone is a partner
                                and
                                where the informal
                                sector can be mainstreamed
                                into the economy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="parallax">
            <div className="row text-white d-flex justify-content-center ml-5">
                <div className="col-md-8 p-5 ">
                    <h3>How it works</h3>
                    <p className="text-justify">Emplug empowers everyone to plug to businesses, employment opportunities,
                        services, friends and family from socializing and chatting with friends to getting job calls and
                        alerts from employees. Emplug simply grows your business, whether you have access to the
                        internet or
                        not. Emplug works all the time serving as a constant service community for you to make money
                        from
                        tasks. The Emplug platform is built with membership in mind for internet users and non-internet
                        users, providing fast access to real time job seeking, hiring, advertising and service
                        provisions
                        without any internet connection.</p>

                </div>
            </div>
        </div>


        <section id="tabs">
            <div className="text-center">
                <h3>Membership is categorized as follows</h3>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-12 ml-5">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                                    role="tab" aria-controls="nav-home" aria-selected="true">JobCard</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                    role="tab" aria-controls="nav-profile" aria-selected="false">EMCard</a>
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
                                    role="tab" aria-controls="nav-contact" aria-selected="false">AdCard</a>
                            </div>
                        </nav>
                        <div className="tab-content  px-3 px-sm-0 " id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                aria-labelledby="nav-home-tab">

                                <div className="row">
                                    <div className="col-md-5 col-xs-12">
                                        <img src={JobCard} />
                                    </div>
                                    <div className="col-md-7 col-xs-12 float-right">
                                        <h4>Job Card</h4>
                                        <p>This is a membership subscription card which can be obtained online physical
                                            at
                                            ₦300/Annum</p>

                                        <p>For Whom?</p>
                                        <ul>
                                            <li>The Job Seeker</li>
                                            <li>The Entrepreneur</li>
                                            <li>Skilled Persons (e.g. Artisans)</li>
                                            <li>Talented Individuals</li>
                                        </ul>

                                        <p>Membership Privileges:</p>
                                        <ul>
                                            <li>Access to relevant information on employment opportunities</li>
                                            <li>Free entrepreneurial development trainings and seminars</li>
                                            <li>Admissions to job fair and quarterly luncheon</li>
                                            <li>Input academic qualifications and skill details on portal for employment
                                                opportunities</li>
                                            <li>View available employers</li>
                                            <li>Receive recruitment invitation from preferred employers</li>
                                            <li>Submit business ideas for funding</li>
                                            <li>Instant Job offers in EMPLUG job Plugbay Centers</li>
                                            <li>Access to online resources, tools or materials for entrepreneurial
                                                development.</li>
                                        </ul>
                                    </div>

                                    <div className="col-md-5 col-xs-12 contentTab">
                                        <div>
                                            <p>To register JOBCARD TEXT: JOBCARD PIN * Name * Location * Profession *
                                                Gender
                                                * State * L.G.A * email Send to 32810</p>
                                            <hr />
                                            <p>e.g.: JOBCARD 5618306541 * Uche Luka * Ibadan * Accountant * Male * Abia
                                                *
                                                Umahia * ucheakin@yahoo.com</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                aria-labelledby="nav-profile-tab">
                                <div className="row">
                                    <div className="col-md-5 col-xs-12">
                                        <img src={EmCard} />
                                    </div>
                                    <div className="col-md-7 col-xs-12 float-right">
                                        <h4>EM Card</h4>
                                        <p>This membership subscription card can also be obtained online or physically
                                            at
                                            the rate of ₦500/Annum</p>

                                        <p>For Whom?</p>
                                        <ul>
                                            <li>The Job Seeker</li>
                                            <li>The Business Owner</li>
                                            <li>Anyone who requires a service provider</li>
                                        </ul>

                                        <p>Membership Privileges:</p>
                                        <ul>
                                            <li>Request for qualified workers or service providers in your locality via
                                                SMS
                                                or the Web</li>
                                            <li>Receive instant response via SMS or on Web wall</li>
                                            <li>Access registered unemployed formal or informal professionals(based on
                                                preference) in choice location</li>
                                            <li>Attend free Seminars on relevant business trends and developments</li>
                                            <li>Access to Business Applications and Human Resource Tools</li>
                                            <li>View Academic qualifications or skill details of job seekers on Emplug
                                                platform</li>
                                            <li>Post Jobs and invite preferred candidates</li>
                                            <li>Conduct online aptitude test at no cost</li>
                                            <li>Own a homepage.</li>
                                        </ul>
                                    </div>

                                    <div className="col-md-5 col-xs-12 contentTab">
                                        <div>
                                            <p>To register EMCARD TEXT: EMCARDPIN * Employer’s Name * Industry *
                                                Location*Email Send to 33810</p>
                                            <hr />
                                            <p>e.g.: EMCARD 5618306541 * Eloho Eateries * Catering*Jos *
                                                info@eloho.com.ng
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                aria-labelledby="nav-contact-tab">
                                <div className="row">
                                    <div className="col-md-5 col-xs-12">
                                        <img src={AdCard} />
                                    </div>
                                    <div className="col-md-7 col-xs-12 float-right">
                                        <h4>AD Card</h4>
                                        <p>This is a membership subscription card that can be obtained online or
                                            physically
                                            at the rate of ₦1000/Annum.</p>

                                        <p>For Whom?</p>
                                        <ul>
                                            <li>The Advertiser</li>
                                            <li>Product or Business Owner</li>
                                            <li>Agent or Business Representative</li>
                                        </ul>

                                        <p>Membership Privileges:</p>
                                        <ul>


                                            <li>Advertise new products or services to targeted customers</li>
                                            <li>Attend free Seminars on relevant business trends and developments</li>
                                            <li>Opportunity to have an online presence for your product or services

                                            </li>
                                            <li>Send limitless number of adverts via SMS</li>
                                            <li>Own a home page that allows visitors to view business profile,activitiesand contact details</li>
                                            <li>Reach a large number of potential customers or clients with new product or service details at no cost.</li>
                                            <li>Send limitless number of adverts via SMS</li>
                                            <li>Opportunity to reach a wider audience with your goods or services. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, illo!</li>
                                            {/* <li>Reach a large number of potential customers or clients with new product or service details at no cost.</li> */}

                                        </ul>
                                    </div>

                                    <div className="col-md-5 col-xs-12 contentTab">
                                        <div>
                                            <p>To register ADCARD TEXT: ADCARDPIN * Employer’s Name * Industry *
                                                Location*Email Send to 33810</p>
                                            <hr />
                                            <p>e.g.: ADCARD 5618306541 * Eloho Eateries * Catering*Jos *
                                                info@eloho.com.ng
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="success">
            <div className="container">

                <div className="row py-5 text-center">
                    <div className="col-md-8 offset-md-2">
                        <iframe height="450px" width="100%" src="https://www.youtube.com/embed/BPw-4dqcPEs"
                            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>

                <div id="demo" className="carousel slide" data-ride="carousel">

                    <h3>Success Stories</h3>
                    <hr />





                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/gXmxQOAj8UM?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/rxfjzHLtgeM?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/PukRAUcQ40U?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/gXmxQOAj8UM?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/rxfjzHLtgeM?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/PukRAUcQ40U?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/gXmxQOAj8UM?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/rxfjzHLtgeM?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-4">
                                        <a href="#"  className="slider_info">
                                            <iframe width="350" height="200"
                                                src="https://www.youtube.com/embed/PukRAUcQ40U?rel=0&amp;controls=0&amp;showinfo=0"
                                                frameborder="0" allowfullscreen></iframe>
                                            <div className="card-img-overlay t_img">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>



                </div>
            </div>
        </section>

        <section className="parallax-feature">
            <div className="starfield"></div>
            <i className="fa fa-paper-plane"></i>
            <div className="feature-title">
                SUBSCRIBE TO OUR NEWSLETTER
            </div>
            <div className="feature-input">
                <div id="subscribe">
                    <input type="text" className="enteremail error" name="EMAIL" id="subscribe-email"
                        placeholder="Enter your email address" spellcheck="false"/>
                    <button type="submit" id="signup-button" className="signup-button">Submit</button>
                    <label for="subscribe-email" className="subscribe-message error">
                        <i className="fa fa-warning"></i>
                        <span className="message-content"></span>
                    </label>
                </div>
            </div>
        </section>

        </about>
    )
}
export default About;
