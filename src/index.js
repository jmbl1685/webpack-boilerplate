import "./assets/scss/style.scss";
import "./assets/css/test.css";
import logo from "./assets/img/1168654.svg";

const template = `
  <div class="center">
    <div class="logo">
      <img src=${logo}/>
    </div>  
    <h1 class="name">Create React App 2019</h1>
  </div>
`;

document.write(template);
