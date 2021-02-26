var position = 0;
function nextBtn(){
    clearInterval(animateIcons)
    position += 190;
    if(position==1520){
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="all .5s ease-in"
        setTimeout("setPositionzero()",500)
    }else{
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="all .5s ease-in"
    }
    
}
function nextBtna(){
    position += 190;
    if(position==1520){
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="all .5s ease-in"
        setTimeout("setPositionzero()",500)
        
    }else{
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="all .5s ease-in"
    }
    
}
function setPositionzero(){
    position=0;
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="none"
}
function setPositionmax(){
    position=1330;
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="all .5s ease-in"
}
function prevBtn(){
    clearInterval(animateIcons)
    position-=190;
    if(position<0){
        position=1520;
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="none"
        setTimeout("setPositionmax()",0)
    }else{
        document.getElementById("carouselslide").style.transform="translateX(-"+position+"px)";
        document.getElementById("carouselslide").style.transition="all .5s ease-in"
    }
}
var animateIcons = setInterval("nextBtna()",2000)