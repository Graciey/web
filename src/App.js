import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import 'bootstrap-4-react';

// Components
import Footer from "./Components/Footer/footer";
import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Career from "./Components/pages/careers";
import Events from "./Components/pages/events";
import CookiePolicy from "./Components/pages/cookie_policy";
import PrivacyPolicy from "./Components/pages/privacy_policy";
import Programs from "./Components/pages/programs";
import Team from "./Components/pages/team";
import Student from './Components/Pages/student';
import Intern from './Components/Pages/intern';
import TOS from "./Components/pages/tos";
import NotFound from "./Components/pages/NotFound";
import Table from './Components/Pages/table';
// import {Socket} from './Components/Pages/table';

// CSS
import "./css/style.css";
// JS
import "./js/full-script.js"

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //         Table(message => {
    //             console.log(message)
    //         })
    //     }
//    componentDidMount() {
//     Socket();
//    }
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" name="Home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/programs" component={Programs} />
            <Route path="/careers" component={Career} />
            <Route path="/events" component={Events} />
            <Route path="/student" component={Student} />
            <Route path="/intern" component={Intern} />
            <Route path="/cp" component={CookiePolicy} />
            <Route path="/pp" component={PrivacyPolicy} />
            <Route path="/team" component={Team} />
            <Route path="/table" component={Table} />
            <Route path="/tos" component={TOS} />
            {/* <Route path="/studentpreneur" component={Students} /> */}
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
