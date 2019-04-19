import React from "react";
import Navbar from "../Navbar/navbar";

// Images
import Fellowship from "../../images/fellowship.jpg";
import Hack from "../../images/hack.jpg";
import Fair from "../../images/jobfair.jpg";
import Women from "../../images/wit.jpg";
import Funds from "../../images/funds.png";
import Plugbay from "../../images/plugbay.jpg";
import Wau from "../../images/wau.jpg";
import Clinic from "../../images/clinic.jpg";
import Summit from "../../images/summit.jpg";
import Plug from "../../images/plug.jpg";

const Programs = () => {
  return (
    <programs>
      <Navbar />
      <div className="title-bar">
    <div className="container">
      <h1>Programs</h1>
      <p><a href="/#/">Home</a> | Our Programs</p>
    </div>
  </div>

  <section className="about-us">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="">Sustainable development</h1>
          <p>
            Given our belief that enterprise and society can be mutually
            reinforcing, Emplug facilitates the implementation of social
            causes in line with its vision, geared towards creating shared
            value and sustainable home-grown solutions in underserved
            communities.
          </p>
        </div>
      </div>
    </div>
  </section>

  <div className="bg_programs">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3>The Build Program</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            The Emplug Build Program is a start-up stage business funding
            initiative for members of the Emplug community. It supports
            Innovative and visionary entrepreneurs within the Emplug community
            with the resources, networks and guidance needed to build
            successful businesses. Participants in the Build program are
            provided with a structured support system through their
            entrepreneurship journey, from launch to the growth stage of the
            business life cycle.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Fellowship} width="100%" />
        </div>
      </div>
    </div>
  </div>
  <div className="no_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={Plugbay} width="100%" />
        </div>
        <div className="col-md-6">
          <h3>Plugbay</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            PlugBay is designed to provide multi-level intervention through
            its simple yet innovative solutions in the areas of employment
            creation, sustainable livelihood, Skills Education and social
            inclusion. Through a multi-pronged approach, PlugBay connects and
            provides essential livelihood solutions to the informal sector
            workers across different sectors of the economy. Often engaging a
            multi-layered stakeholders collaboration involving Government,
            Corporate organizations, Non profits and Development agencies.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="bg_programs">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3>Plug to funds</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            Feature me is Emplug’s extended funding program that allows
            members with business ideas or already established businesses to
            be featured in Emplug crowd funding platform.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Plug} width="100%" />
        </div>
      </div>
    </div>
  </div>
  <div className="no_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={Women} width="100%" />
        </div>
        <div className="col-md-6">
          <h3>Women in tech</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            Emplug has observed the gender gap in technology especially in
            sub-Sahara Africa and thus, championing the case of women
            inclusion in technology. To this end, we partner with governments
            and corporations to avail women and girls in tech all the tools
            and resources they need to excel.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="bg_programs">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3>Charity Hack</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            We offer our skill and time to charitable causes. Emplug organises
            hacking events to help solve the technology needs of non-profits
            in local communities. Through our Charity Hack sessions, we
            support non-profit actors with essential technology tools needed
            to enhance their impact and productivity.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Hack} width="100%" />
        </div>
      </div>
    </div>
  </div>
  <div className="no_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={Wau} width="100%" />
        </div>
        <div className="col-md-6">
          <h3>Project WAU</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            Project WAU (War Against Unemployment) is a movement of concerned
            voices geared towards social mindfulness on the issues of
            unemployment. Through public campaigns, petitioning of various
            establishments, training and mentorship; we are strategically
            influencing decisions on unemployment and propelling job creations
            at all levels.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="bg_programs">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3>Funds4Dream</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            Funds4Dream is a non-profit organization committed to facilitating
            sustainable solutions for some of the critical challenges facing
            humanity today. Through a structured process, we connect
            challenges to the resources needed for their actualization. At
            Funds4Dreams our beneficiaries are working partners as we create
            the change we want to see.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Funds} width="100%" />
        </div>
      </div>
    </div>
  </div>
  <div className="no_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={Clinic} width="100%" />
        </div>
        <div className="col-md-6">
          <h3>Career Clinic</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            Welcome to the Emplug Career Clinic, an unconventional 21st
            Century one stop career solution experience for job seekers, young
            professionals and employers. Reflecting both local and global
            needs of the evolving workplace simultaneously, the Emplug Career
            clinic brings into perspective not only international best
            practices but tailored to local market needs.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="bg_programs">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h3>The Expo</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            The Emplug Expo is a 2 day multidimensional platform which creates
            solutions for the workplace, connects stakeholders in the
            education space and plays host to a unique networking event of
            employers and job seekers. It is an opportunity for a glimpse into
            the future of work with on the spot job interviews, discover the
            life changing possibilities with some of our outstanding
            educational institutions at the Expo with on the spot admissions
            for eligible students and a lunch meet up with outstanding
            industry professionals in a fun filled networking atmosphere.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Fair} width="100%" />
        </div>
      </div>
    </div>
  </div>
  <div className="no_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={Summit} width="100%" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h3>Plug Summit</h3>
          <hr className="programs_hr" />
          <div className="clearfix"></div>
          <p>
            The Plug Summit is a gathering of some of the leading tech and
            business leaders shaping the future. It is an annual event from
            Lagos, Nigeria the heart of Africa (The Next Frontier). The Plug
            Summit provides world-className experience and lasting positive
            impression on participants beyond great business networking
            opportunities. We are committed to facilitating the emergence of a
            unique community of tech innovators, change catalyst and ethical
            tech leaders who will shape the future for humanity.
          </p>
          <button type="button" className="btn  btn_color_1">
            <a href="/" target="_blank" className="btn_color_text">Read more ...</a>
          </button>
        </div>
      </div>
    </div>
  </div>
    </programs>
  );
};
export default Programs;
