function popTable(){
    document.getElementById("order-pop").style.zIndex="999"
    document.getElementById("pop-content").style.transform="scale(1)"
}
function popOutOf(){
    document.getElementById("pop-content").style.transform="scale(0)"
    setTimeout("removeZindexTable()",500)   
}
function removeZindexTable(){
    document.getElementById("order-pop").style.zIndex="-1"
}

function clickedImg(num){
    document.getElementById("gallery-pop").style.zIndex="999"
    document.getElementById("gallery-con").style.transform="scale(1.3)"
    if(num==3){
        document.getElementById("image-content").src="images/pic12.jpg"
    }else if(num==12){
        document.getElementById("image-content").src="images/pic3.jpg"
    }else if(num==21){
        document.getElementById("image-content").src="images/pic1.jpg"
    }else{
        document.getElementById("image-content").src="images/pic"+num+".jpg"
    }
    document.getElementById("currentnum").innerHTML=""+num;
    
}
function next_images(){
    var current_string = document.getElementById("currentnum").innerHTML
    var current = current_string*1;
    var next = current+1
    var imgid = 0;
    if(next > 21){
        imgid = 1;
        next = 1;
    }else if(next == 3){
        imgid = 12;
    }else if(next == 12){
        imgid = 3;
    }else if(next==21){
        imgid = 1;
    }else{
        imgid = next;
    }
    document.getElementById("image-content").src="images/pic"+imgid+".jpg"
    document.getElementById("currentnum").innerHTML=""+next
}
function previous_images(){
    var current_string = document.getElementById("currentnum").innerHTML
    var current = current_string*1;
    var prev = current-1
    var imgid = 0;
    if(prev <= 0){
        imgid = 1;
        prev = 21;
    }else if(prev == 3){
        imgid = 12;
    }else if(prev == 12){
        imgid = 3;
    }else if(prev==21){
        imgid = 1;
    }else{
        imgid = prev;
    }
    document.getElementById("image-content").src="images/pic"+imgid+".jpg"
    document.getElementById("currentnum").innerHTML=""+prev
}

function popOutImg(){
    document.getElementById("gallery-con").style.transform="scale(0)"
    setTimeout("removeZinGal()",300)
}
function removeZinGal(){
    document.getElementById("gallery-pop").style.zIndex="-2"
}