let click_1=document.getElementById("click_me").addEventListener("click",show1);
function show1(){
    let show=document.getElementById("links");
    let down=document.getElementById("down1");
    if(show.style.display==="block"){
        show.style.display="none";
        down.style.marginTop="50px";
    }
    else{
        show.style.display="block";
        down.style.marginTop="240px";
    }
}
