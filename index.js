tabs=document.getElementsByClassName("tab");
content=document.getElementsByClassName("pri");
let clickedState=tabs[0];
let clickedPrevState=tabs[0];



for(var i=0;i<tabs.length;i++){

tabs[i].addEventListener("click",function(before){

clickedState.classList.remove("active_tab");
clickedPrevState.classList.remove("semi_active_tab");

this.classList.add("active_tab");
clickedState=this;
updatePrevState();

});


}

function updatePrevState(){

  for(var i=0;i<tabs.length;i++){

    if (clickedState===tabs[0]){

    continue;

  }else if (clickedState===tabs[i]){

    tabs[i-1].classList.add("semi_active_tab");
    clickedPrevState=tabs[i-1];

    }

  }


}


function submit(){

content[0].classList.add("hide");
content[1].classList.add("cent");
content[1].classList.remove("hide");
document.getElementById("result").innerHTML=(clickedState.innerHTML);
}
