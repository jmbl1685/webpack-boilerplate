"use strict";

import "./style.css";
import { info } from "./info";

const { name, job, avatar } = info;

const template = `
  <div class="center">
    <img class="img" src=${avatar}/>
    <h1 class="name">${name}</h1>
    <h3 class="job">${job}<h3>
  </div>
`;

document.write(template);
