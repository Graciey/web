import React from "react";
import Navbar from "../Navbar/navbar";

// Images
import Staff1 from '../../images/2.jpg';
import Staff2 from '../../images/3.jpg';
import Staff3 from '../../images/4.jpg';
import Staff4 from '../../images/5.jpg';
import Staff5 from '../../images/6.jpg';
import Staff6 from '../../images/7.jpg';
import Staff7 from '../../images/8.jpg';
import Staff8 from '../../images/9.jpg';
import Staff9 from '../../images/10.jpg';
import Staff10 from '../../images/11.jpg';
import Staff11 from '../../images/12.jpg';
import Staff12 from '../../images/2.jpg';
import intern from '../../images/intern.jpg';
import adult from '../../images/adult.jpg';

// Css
import "../../css/grid.css";

const Career = () => {
  return (
    <div>
      <Navbar />
      <div className="title-bar">
        <div className="container">
          <h1>Careers</h1>
          <p>
            <a href="/#/">Home</a> | Careers
          </p>
        </div>
      </div>

      <section className="text-center">
        <div className="row">
          <div className="col-md-8 offset-md-2 py-5 plugs">
            <p>
              Emplug is committed to helping team members become part of the
              change, creating opportunities and empowering ideas one person at
              a time thereby making them feel valued and proud of this noble
              cause. We aim to attract, retain, empower, and motivate a great
              team and to create an inclusive environment where all feel like
              the partners they are.
            </p>

            <h3 className="py-3">Why Emplug?</h3>
            <hr />
            <p>
              As the most prolific and leading voice in the hiring and
              empowerment space with activities in startup funding, enterprise
              development, development initiatives, social projects and media,
              Emplug offers a multitude of career opportunities and benefits
              across several disciplines. We are constantly looking for
              individuals that want to make a difference and impact their world.
              Join us?
            </p>

            <h3 className="py-3">The Emplug Culture</h3>
            <hr />
            <p>
              What we practice on the outside begins from who we are, a people
              centred organization where team members are supported through the
              process of value creation in the work place. At Emplug our work is
              our passion and our motivation for success.
            </p>
          </div>
        </div>
      </section>
<section className="otherProgs bg-light">
      <div className="container text-center">
        <h3>Students At Emplug</h3>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <img src={adult} className="img-fluid"/>
          </div>
          <div className="col-md-6 margin_top ">
            <h4>Studentpreneurship</h4>
            <p>
              Join our student talent competitions to have your business idea
              funded as s student and don’t bother looking for a job by the time
              you leave school.
            </p>
            <a href="http://128.199.97.198/emplug-home1.com/#/student" className="btn btn-outline-secondary btn_color">Apply Now</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 margin_top ">
            <h4>Internship</h4>
            <p>
              Join our student talent competitions to have your business idea
              funded as a student and don’t bother looking for a job by the time
              you leave school.
            </p>
            <a href="http://128.199.97.198/emplug-home1.com/#/intern" className="btn btn-outline-secondary btn_color">Apply Now</a>
          </div>
          <div className="col-md-6">
            <img src={intern} className="img-fluid"/>

          </div>
        </div>

      </div>
    </section>
    <section className="success pt-5 text-center ml-5">
      <div className="container">
        <h3>Working with Emplug</h3>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <iframe height="150px" width="100%" src="https://www.youtube.com/embed/BPw-4dqcPEs" frameborder="0"
                    allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
              </div>
              <div className="col-md-12">
                <iframe height="150px" width="100%" src="https://www.youtube.com/embed/BPw-4dqcPEs" frameborder="0"
                  allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
              <div className="col-md-12">
                <iframe height="150px" width="100%" src="https://www.youtube.com/embed/BPw-4dqcPEs" frameborder="0"
                  allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </div>
            <div className="col-md-8">
              <iframe height="450px" width="100%" src="https://www.youtube.com/embed/BPw-4dqcPEs" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section className="success py-5 text-center">

    <div className="container">
      <h3>Fun And Activities</h3>
      <hr />
      <div id="carouselExampleSlidesOnly" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div className="row">
              <div className="col-md-2 change">
                <img src={Staff1} alt="..." className='w-100 img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff2} alt="..." className='w-100 img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff3} alt="..." className='w-100 img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff4} alt="..." className='w-100 img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff5} alt="..." className='w-100 img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff6} alt="..." className='w-100 img-fluid'/>
              </div>

            </div>

          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-2 change">
                <img src={Staff7} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff8} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff9} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff10} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff11} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff4} alt="..." className=' img-fluid'/>
              </div>

            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-2 change">
                <img src={Staff9} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff2} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff6} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff10} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff11} alt="..." className=' img-fluid'/>
              </div>
              <div className="col-md-2 change">
                <img src={Staff12} alt="..." className=' img-fluid'/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      <section className="parallax-feature">
        <div className="starfield" />
        <i className="fa fa-paper-plane" />
        <div className="feature-title">SUBSCRIBE TO OUR NEWSLETTER</div>
        <div className="feature-input">
          <div id="subscribe">
            <input
              type="text"
              className="enteremail error"
              name="EMAIL"
              id="subscribe-email"
              placeholder="Enter your email address"
              spellcheck="false"
            />
            <button type="submit" id="signup-button" className="signup-button">
              Submit
            </button>
            <label for="subscribe-email" className="subscribe-message error">
              <i className="fa fa-warning" />
              <span className="message-content" />
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Career;
