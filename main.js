import { colors as c } from "./src/colors.js";
import { createButton  as cb} from "./src/createButton.js";
import { addToContainer } from "./src/addToContainer.js";
import { colorChanger } from "./src/colorChanger.js";
import { reset } from "./src/reset.js";

const btnsContainer = document.querySelector('#btnsContainer');

addToContainer(btnsContainer, c, cb);

// const app = document.querySelector("#app");
const app = document.querySelector("body");

const btns = document.querySelectorAll('.btn');
// console.log(btns);

colorChanger(btns, app);

// const reset = () =>{
//   // const app = document.querySelector('#app');
//   app.style.backgroundColor = "#fff";
// };

const resetBtn = document.querySelector('#reset');
reset(app, resetBtn);
