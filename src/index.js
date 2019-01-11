"use strict";

import "./assets/scss/style.scss";
import "./assets/css/test.css";
import { info } from "./assets/js/info";

const { name, job, avatar } = info;

const template = `
  <div class="center">
    <img class="avatar" src=${avatar}/>
    <h1 class="name">${name}</h1>
    <h3 class="job">${job}<h3>
  </div>
`;

document.write(template);
