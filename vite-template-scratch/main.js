import file from "./file";
import classes from "./style.module.css";
console.log(file);
console.log("world");

console.log(classes); //{title: '_title_1q0gt_1'} this is constant
document.querySelector("h2").className = classes.title;
