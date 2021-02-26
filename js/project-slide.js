function movetoleft(){
    document.getElementById("slide-project-content").style.transform="translateX(40px)"
}
function movetoright(){
    document.getElementById("slide-project-content").style.transform="translateX(-675px)"
}
function movecontenttoright(){
    var classList = document.getElementsByClassName("imgofpro")
    var current = whichOne(classList)
    if(current==19){
        var next = 0
        var idcurrent = classList[current].id
        var idnext = classList[next].id
        var nextimg = 1
        movetoleft()
        document.getElementById(idcurrent).style.border="3px solid rgb(0, 0, 0)"
        document.getElementById(idnext).style.border="3px solid rgb(255, 255, 255)"
        document.getElementById("slidetopimage-id").src="images/p"+nextimg+".jpg"
    }else if(current==12){
        var next = current+1;
        var idcurrent = classList[current].id
        var idnext = classList[next].id
        var nextimg = current+2
        movetoright()
        document.getElementById(idcurrent).style.border="3px solid rgb(0, 0, 0)"
        document.getElementById(idnext).style.border="3px solid rgb(255, 255, 255)"
        document.getElementById("slidetopimage-id").src="images/p"+nextimg+".jpg"
    }
    else{
        var next = current+1;
        var idcurrent = classList[current].id
        var idnext = classList[next].id
        var nextimg = current+2

        document.getElementById(idcurrent).style.border="3px solid rgb(0, 0, 0)"
        document.getElementById(idnext).style.border="3px solid rgb(255, 255, 255)"
        document.getElementById("slidetopimage-id").src="images/p"+nextimg+".jpg"
    }
}

function movecontenttoleft(){
    var classList = document.getElementsByClassName("imgofpro")
    var current = whichOne(classList)
    if(current==0){
        var next = 19
        var idcurrent = classList[current].id
        var idnext = classList[next].id
        var nextimg = 20
        movetoright()
        document.getElementById(idcurrent).style.border="3px solid rgb(0, 0, 0)"
        document.getElementById(idnext).style.border="3px solid rgb(255, 255, 255)"
        document.getElementById("slidetopimage-id").src="images/p"+nextimg+".jpg"
    }else if(current==7){
        var next = current-1;
        var idcurrent = classList[current].id
        var idnext = classList[next].id
        var nextimg = current;
        movetoleft()
        document.getElementById(idcurrent).style.border="3px solid rgb(0, 0, 0)"
        document.getElementById(idnext).style.border="3px solid rgb(255, 255, 255)"
        document.getElementById("slidetopimage-id").src="images/p"+nextimg+".jpg"
    }
    else{
        var next = current-1;
        var idcurrent = classList[current].id
        var idnext = classList[next].id
        var nextimg = current;

        document.getElementById(idcurrent).style.border="3px solid rgb(0, 0, 0)"
        document.getElementById(idnext).style.border="3px solid rgb(255, 255, 255)"
        document.getElementById("slidetopimage-id").src="images/p"+nextimg+".jpg"
    }
}
function whichOne(arr){
    var count = 0;
    for(i=0; i<arr.length; i++){
        var id = arr[i].id
        var chosen = document.getElementById(id)
        var border = window.getComputedStyle(chosen, null).getPropertyValue("border")
        if(border=="3px solid rgb(255, 255, 255)"){
            count = i;
        }
    }
    return count;
}
function changeproimg(num){
    var classList = document.getElementsByClassName("imgofpro")
    var currentactive = num - 1
    for(i=0; i<classList.length; i++){
        if(i==currentactive){
            var id = classList[i].id
            document.getElementById(id).style.border="3px solid rgb(255, 255, 255)"
        }else{
            var id = classList[i].id
            document.getElementById(id).style.border="3px solid rgb(0, 0, 0)"
        }
    }
    document.getElementById("slidetopimage-id").src="images/p"+num+".jpg"
    if(num==8){
        movetoleft()
    }else if(num==13){
        movetoright()
    }
}