let button = document.getElementById("btn");

// List of all events (mouse_events, keyboard_events,etc):
// "https://developer.mozilla.org/en-US/docs/Web/API/Element" 

button.addEventListener("click",()=>{
    //click on button

    // alert("I was clicked!!") 

    document.querySelector(".box").innerHTML= "<b>Hey you were Clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu",()=>{
    //right-click on button
    document.querySelector(".box").innerHTML= "<b>Don't Hack us by right-click</b>"
})

button.addEventListener("keydown",(e)=>{
 //click on button, then any key on keyboard and see console. 
  
    console.log(e);
})

document.addEventListener("keydown",(e)=>{
 //now no need to click on button, directly press any key.
    console.log(e);
    console.log(e.key,e.keyCode);
})