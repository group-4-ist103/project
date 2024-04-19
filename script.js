//pulling the button by class
/*let switch_button = document.getElementsByid("switch-container");
// adding event listerner to know the status of the switch
switch_button.addEventListener("click", function () {
  // functionality of the button
  if (!switch_button) {
    console.log("switch on");
  } else {
    console.log("switch off");
  }
});*/
// slide do switch
/*const sco = document.getElementById("switch-container");
const sck = document.getElementById("switch-checkbox");
const btl = document.querySelector("#dark-mode-button span");
sco.addEventListener("click", function () {
  sck.checked = !ckb.checked;
  updateTheme();
});
// fuction add o light e dark mode mo html
/*function updateTheme(){
    if(sck.checked) {
        
    }
    else() {
        
    }
}*/
/*let switch_checkbox = document.getElementById("switch-checkbox");
let switch_container = document.getElementById("switch-container");
let span = document.getElementById("legenda");
switch_container.addEventListener("click", function () {
  if (switch_checkbox.checked) {
    span.innerText = "Light mode";
    document.getElementsByTagName("html")[0].id = "light_mode";
  } else {
    span.innerText = "Dark mode";
    document.getElementsByTagName("html")[0].id = "";
  }
});*/
let switch_checkbox = document.getElementById("switch-checkbox");
let span = document.getElementById("legenda");
let switch_container = document.getElementById("switch-container");

switch_container.addEventListener("click", () => {
  switch_checkbox.checked = !switch_checkbox.checked;

  if (switch_checkbox.checked) {
    span.innerText = "Light mode";
    document.getElementsByTagName("html")[0].id = "light_mode";
  } else {
    span.innerText = "Dark mode";
    document.getElementsByTagName("html")[0].id = "";
  }
});
