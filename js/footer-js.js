function photoStreamClicked(num){
    document.getElementById("photostream-pop").style.zIndex="999"
    document.getElementById("photostream-con").style.transform="scale(2.5)"
    document.getElementById("psconimg").src="images/g"+num+".jpg"
}
function popOutofStream(){
    document.getElementById("photostream-con").style.transform="scale(0)"
    setTimeout("removeZindex()",300)
}
function removeZindex(){
    document.getElementById("photostream-pop").style.zIndex="-3"
}