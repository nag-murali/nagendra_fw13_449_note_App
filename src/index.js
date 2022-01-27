 import "./index.css";
 import imge from './file.jpg';
 

let notearea = document.getElementById("notearea");

let image = document.querySelector("img");
image.setAttribute("src", `${imge}`)
let existValue = JSON.parse( localStorage.getItem("Note_content") ) || null;
if(existValue ){
  notearea.textContent = existValue;
}

notearea.addEventListener("change", save);

function save () {
  let content = notearea.value;
  localStorage.setItem("Note_content", JSON.stringify( content));

}