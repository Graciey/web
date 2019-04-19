import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div >
        <footer className="footer">
        <div class="container">
            <ul class="foote_bottom_ul_amrc pb-2">
                <li><a href="http://128.199.97.198/emplug-home1.com/#/about">Company</a></li>

                {/* <!-- <li><a href="team">Team</a></li> --> */}
                <li><a href="http://128.199.97.198/emplug-home1.com/#/programs">Programs</a></li>
                <li><a href="http://128.199.97.198/emplug-home1.com/#/careers">Careers</a></li>
                <li><a href="http://128.199.97.198/emplug-home1.com/#/advertise">Advertise</a></li>
                <li><a href="http://128.199.97.198/emplug-home1.com/#/events">Events</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="/#/tos">Terms &amp; Policies</a></li>
                <li><a href="http://blog.emplug.com">Blog &amp Press Center</a></li>
                <li><a href="#">Language</a></li>
            </ul>
            <div class="shadow_top">

            </div>
            {/* <!--foote_bottom_ul_amrc ends here--> */}
            <p class="text-center pt-2">&copy; Copyright 2018 | Emplug, Inc. All rights reserved</p>

        </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
