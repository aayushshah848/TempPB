import { hot } from 'react-hot-loader/root';
import {render} from "react-dom";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import axios from "axios";
import {Homepage} from "./pages/Template";

const container = document.getElementById("app");

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

// @ts-ignore
axios.defaults.headers.common['X-CSRFToken'] = document.gro["csrf_token"]
// @ts-ignore
axios.defaults.baseURL = document.gro["url"];

const App = hot(Homepage);

render((
    <Router>
        <App/>
    </Router>
), container);
