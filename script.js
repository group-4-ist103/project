//pulling the button by class
let switch_button = document.getElementsByClassName ('dark-mode-button');
// adding event listerner to know the status of the switch
switch_button.addEventListener('chane', function(){
   // functionality of the button 
    if (switch_button.checked){
        console.log('switch on');
    } 
    else{
        console.log('switch off')
    }
});
//