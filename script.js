let switch_button = document.getElementsByClassName ('dark-mode-button');

switch_button.addEventListener('chane', function(){
    if (switch_button.checked){
        console.log('switch on');
    } 
    else{
        console.log('switch off')
    }
});
