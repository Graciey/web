import React from 'react';
import Navbar from '../Navbar/navbar';

// Css
import '../../css/grid.css';


const TOS = () => {
    return(
        <div>
            <Navbar/>
            <section className="about-us1">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-3 py-5">
                            <h3>Terms &amp; Policies</h3>
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
                                    <a href="/tos"><b>Terms of Service</b></a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/pp">Privacy Policies</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/cp">Cookie Policies</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-9">

                            <p className="heading">Terms</p>

                            <p>By accessing this web site, you are agreeing to be bound by these web site Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark laws.</p>

                            <hr />

                            <p className="heading">USE LICENSE</p>

                            <p>
                                Permission is granted to temporarily download one copy of the materials (Information or software) on emplug.com's web site for personal, Non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.
                                <br /> Use the materials for any commercial purpose, or for any public display (commercial or non-commercial) attempt to decompile or reverse engineer any software contained on emplug.com's web site.
                                <br /> Remove any copyright or other proprietary notations from the materials;
                                <br /> Transfer the materials to another person or "mirror" the materials on any other server.
                                <br /> This license shall automatically terminate if you violate any of these restrictions and may also be terminated by emplug.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

                            </p>

                            <hr />

                            <p className="heading">DISCLAIMER</p>
                            <p>The materials on emplug.com's web site are provided "as is". emplug.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, emplug.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</p>

                            <hr />

                            <p className="heading">LIMITATIONS</p>
                            <p>In no event shall emplug.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on emplug.com's Internet site, even if emplug.com or a emplug.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

                            <hr />

                            <p className="heading">REVISION AND ERRATA</p>
                            <p>The materials appearing on emplug.com's web site could include technical, typographical, or photographic errors. emplug.com does not warrant that any of the materials on its web site are accurate, complete, or current. emplug.com may make changes to the materials contained on its web site at any time without notice. emplug.com does not, however, make any commitment to update the materials.</p>

                            <hr />

                            <p className="heading">LINKS</p>
                            <p>emplug.com has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by emplug.com of the site. Use of any such linked web site is at the user's own risk.</p>

                            <hr />

                            <p className="heading">SITE TERMS OF USE MODIFICATION</p>
                            <p>emplug.com may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use</p>

                            <hr />

                            <p className="heading">GOVERNING LAW</p>
                            <p>Any claim relating to emplug.com's web site shall be governed by the laws of the Federal Republic of Nigeria without regard to its conflict of law provisions.</p>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}
export default TOS;