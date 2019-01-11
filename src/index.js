"use strict";

import "./assets/scss/style.scss";
import "./assets/css/test.css";
import { info } from "./assets/js/info";

const { name, job, avatar } = info;

const template = `
  <div class="center">
    <div class="avatar">
      <img src=${avatar}/>
    </div>  
    <h1 class="name">${name}</h1>
    <h3 class="job">${job}<h3>
  </div>
`;

document.write(template);
