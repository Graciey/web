import React from 'react';
import Navbar from '../Navbar/navbar';

// Css
import '../../css/grid.css';


const CookiePolicy = () => {
    return(
        <div>
            <Navbar/>
            <section className="about-us1">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-3 py-5">
                            <h3>Cookie Policies</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-3 side_menu">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="/tos">Terms of Service</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/pp">Privacy Policies</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/cp"><b>Cookie Policies</b></a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-9">
                            <p>A cookie is a text-only string of information that a website transfers to the cookie file of the browser of your computer's hard disk so that the website can remember who you are and other details. Cookies may be set by a website or originate with third parties, such as advertisers. A cookie itself is not designed or intended to read any information from a user's computer (other than the contents of the cookie). A cookie is simply an identifier used by the website that originally placed it on your hard drive. The actual contents of the cookie information can be retrieved by the same server to identify the computer and subsequently to customize, track, or regulate the use of a site based on information stored on the host server.</p>
                            <p>We may make use of cookies on our website. We use cookies to allow us to automate the access and the data entry functions of our website and to correlate online ordering information for purchases you may make while at the website (if any), tailor our website to your preferences or interests, or customize promotions or marketing. In addition, cookies allow us to track use of our website to determine those areas which are useful or popular and those that are not thereby enabling us to improve and update our website effectively.</p>
                            <p>Most web browsers can either alert you to the use of cookies or refuse to accept cookies entirely. You have the ability to accept or decline cookies by modifying the settings in your browser. However, you may not be able to use all the interactive features of the website if cookies are disabled.</p>
                            <p>We do not use flash cookies.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default CookiePolicy;