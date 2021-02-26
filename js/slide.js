function changeConN(){
    clearInterval(animateSlide)
    var content = document.getElementsByClassName("content")
    var current = whichOne(content)
    var button = document.getElementsByClassName("buttons")

    if(current == content.length-1){
        var id = content[current].id
        var next = content[0].id
        var butid = button[current].id
        var butnext = button[0].id

        document.getElementById(id).style.opacity="0"
        document.getElementById(id).style.zIndex="1"
        
        document.getElementById(next).style.opacity="1"
        document.getElementById(next).style.zIndex="999"

        document.getElementById(butid).style.backgroundColor="rgb(51, 51, 51)"
        document.getElementById(butnext).style.backgroundColor="yellow"
    }else{
        var id = content[current].id
        var next = content[current+1].id
        var butid = button[current].id
        var butnext = button[current+1].id

        document.getElementById(id).style.opacity="0"
        document.getElementById(id).style.zIndex="1"
        document.getElementById(next).style.opacity="1"
        document.getElementById(next).style.zIndex="999"

        document.getElementById(butid).style.backgroundColor="rgb(51, 51, 51)"
        document.getElementById(butnext).style.backgroundColor="yellow"
    }
}
function changeContent(){
    var content = document.getElementsByClassName("content")
    var current = whichOne(content)
    var button = document.getElementsByClassName("buttons")

    if(current == content.length-1){
        var id = content[current].id
        var next = content[0].id
        var butid = button[current].id
        var butnext = button[0].id

        document.getElementById(id).style.opacity="0"
        document.getElementById(id).style.zIndex="1"
        
        document.getElementById(next).style.opacity="1"
        document.getElementById(next).style.zIndex="999"

        document.getElementById(butid).style.backgroundColor="rgb(51, 51, 51)"
        document.getElementById(butnext).style.backgroundColor="yellow"
    }else{
        var id = content[current].id
        var next = content[current+1].id
        var butid = button[current].id
        var butnext = button[current+1].id

        document.getElementById(id).style.opacity="0"
        document.getElementById(id).style.zIndex="1"
        document.getElementById(next).style.opacity="1"
        document.getElementById(next).style.zIndex="999"

        document.getElementById(butid).style.backgroundColor="rgb(51, 51, 51)"
        document.getElementById(butnext).style.backgroundColor="yellow"
    }
}

function changeConB(){
    clearInterval(animateSlide)
    var content = document.getElementsByClassName("content")
    var current = whichOne(content)
    var button = document.getElementsByClassName("buttons")

    if(current==0){
        var id = content[current].id
        var before = content[content.length-1].id
        var butid = button[current].id
        var butbefore = button[content.length-1].id

        document.getElementById(id).style.opacity="0"
        document.getElementById(id).style.zIndex="1"
        document.getElementById(before).style.opacity="1"
        document.getElementById(before).style.zIndex="999"

        document.getElementById(butid).style.backgroundColor="rgb(51, 51, 51)"
        document.getElementById(butbefore).style.backgroundColor="yellow"
    }else{
        var id = content[current].id
        var before = content[current-1].id
        var butid = button[current].id
        var butbefore = button[current-1].id

        document.getElementById(id).style.opacity="0"
        document.getElementById(id).style.zIndex="1"
        document.getElementById(before).style.opacity="1"
        document.getElementById(before).style.zIndex="999"

        document.getElementById(butid).style.backgroundColor="rgb(51, 51, 51)"
        document.getElementById(butbefore).style.backgroundColor="yellow"
    }
}

function whichOne(arr){
    var count = 0;
    for(i=0; i<arr.length; i++){
        var id = arr[i].id
        var chosen = document.getElementById(id)
        var opacity = window.getComputedStyle(chosen, null).getPropertyValue("opacity")

        if(opacity==1){
            count = i;
        }
    }
    return count;
}

function buttonClicked(num){
    clearInterval(animateSlide)
    var conId = "con"+num;
    var butId = "but"+num;
    for(i=1;i<=5;i++){
        if(i==num){
            document.getElementById(conId).style.opacity="1"
            document.getElementById(conId).style.zIndex="999"
            document.getElementById(butId).style.backgroundColor="yellow"
        }else{
            var tempCon = "con"+i
            var tempBut = "but"+i
            document.getElementById(tempCon).style.opacity = "0"
            document.getElementById(tempCon).style.zIndex = "1"
            document.getElementById(tempBut).style.backgroundColor="rgb(51, 51, 51)"
        }
    }
}
function changeHeightSlide(){
    document.getElementById("slide").style.height="700px"
}
var animateSlide = setInterval("changeContent()",3000)
window.onload=animateSlide;
window.onload = changeHeightSlide;
