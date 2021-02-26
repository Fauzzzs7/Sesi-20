function recentprojectStream(num){
    document.getElementById("projectstreampop").style.zIndex="999"
    document.getElementById("projectstream-con").style.transform="scale(1)"
    document.getElementById("projectstreamimg").src="images/pic"+num+".jpg"
}
function popOutofProjectStream(){
    document.getElementById("projectstream-con").style.transform="scale(0)"
    setTimeout("removeZindexProject()",300)
}
function removeZindexProject(){
    document.getElementById("projectstreampop").style.zIndex="-3"
}