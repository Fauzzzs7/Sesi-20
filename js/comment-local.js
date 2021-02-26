var arraylocalcomment = JSON.parse(localStorage.getItem("commentsection"))
var totalkomen = 3
if(arraylocalcomment == null || arraylocalcomment == undefined){
    var arraycomment = []
    document.getElementById("totalcomments").innerHTML=""+totalkomen+" COMMENTS"
}else{
    var arraycomment = arraylocalcomment
    window.onload=AllComment;
}

//PUTTING THE COMMENT VALUE INTO LOCALSTORAGE
function addComment(){
    var commentObj = {}
    var currentdate = new Date()
    var stringdate = ""+currentdate+""
    var tanggalbener = stringdate.slice(4,15)
    realdate = turntodate(tanggalbener)

    commentObj.id = Date.now()
    if(document.getElementById("input-your-comment").value!=''){
        commentObj.name = document.getElementById("input-name-comment").value
        commentObj.email = document.getElementById("input-email-comment").value
        commentObj.comment = document.getElementById("input-your-comment").value
        commentObj.tanggal = realdate
        arraycomment.push(commentObj)
        commentObj = {}

        localStorage.setItem("commentsection", JSON.stringify(arraycomment))
        document.getElementById("input-name-comment").value=''
        document.getElementById("input-email-comment").value=''
        document.getElementById("input-your-comment").value=''
        arraylocalcomment = JSON.parse(localStorage.getItem("commentsection"))
        newComment()
        console.log(tanggalbener)
    }else{
        alert("FILL IN ALL THE FORM")
    }
    
}

function newComment(){
    totalkomen+=1
    var lastindex = arraylocalcomment.length - 1
    //PULLING DATA
    var commentid = lastindex
    var commentname = document.createTextNode(arraylocalcomment[lastindex].name)
    var commentdate = document.createTextNode(arraylocalcomment[lastindex].tanggal)
    var commentisi = document.createTextNode(arraylocalcomment[lastindex].comment)
    var textdelcomment = document.createTextNode("Delete Comment")

    //CREATING CONTAINER
    var commentcontainermain = document.createElement("div")
    commentcontainermain.id = "div"+commentid
    commentcontainermain.className = "single-left-comment-level1"
    
    //CREATING IMAGE
    var profileimage = document.createElement("img")
    profileimage.id = "pfp"+commentid
    profileimage.className = "comment-profile-pictures"
    profileimage.src = "images/c3.jpg"
    
    //CREATING THE COMMENT PARENT
    var thecommentcontainer = document.createElement("div")
    thecommentcontainer.id = "container"+commentid
    thecommentcontainer.className = "single-left-thecomment"

    //CREATING THE NAME 
    var namepar = document.createElement("p")
    namepar.id = "name"+commentid
    namepar.className = "name"

    //CREATING THE DATE LINK
    var dateanchor = document.createElement("a")
    dateanchor.id = "datelink"+commentid
    dateanchor.href = "#"
    dateanchor.className = "thecommentdates"

    //CREATING THE COMMENT CONTENT
    var commentcontent = document.createElement("p")
    commentcontent.id="Komen"+commentid
    commentcontent.className = "single-left-thecomment-content"

    //CREATING THE DELETE BUTTON
    var deletecommentbtn = document.createElement("p")
    deletecommentbtn.className = "deletecomment"
    var delbtnfunction = "deleteComment("+commentcontainermain.id+","+lastindex+")"
    deletecommentbtn.setAttribute("onclick",delbtnfunction)


    //APPENDING EVERYTHING
    dateanchor.appendChild(commentdate)
    namepar.appendChild(commentname)
    namepar.appendChild(dateanchor)
    deletecommentbtn.appendChild(textdelcomment)
    commentcontent.appendChild(commentisi)
    thecommentcontainer.appendChild(namepar)
    thecommentcontainer.appendChild(commentcontent)
    thecommentcontainer.appendChild(deletecommentbtn)
    commentcontainermain.appendChild(profileimage)
    commentcontainermain.appendChild(thecommentcontainer)
    document.getElementById("single-left-commentsection").appendChild(commentcontainermain)
    document.getElementById("totalcomments").innerHTML=""+totalkomen+" COMMENTS"

}

function AllComment(){
    for(a=0; a<arraylocalcomment.length; a++){
        totalkomen+=1
        //PULLING DATA
        var commentid = a
        var commentname = document.createTextNode(arraylocalcomment[a].name)
        var commentdate = document.createTextNode(arraylocalcomment[a].tanggal)
        var commentisi = document.createTextNode(arraylocalcomment[a].comment)
        var textdelcomment = document.createTextNode("Delete Comment")

        //CREATING CONTAINER
        var commentcontainermain = document.createElement("div")
        commentcontainermain.id = "div"+commentid
        commentcontainermain.className = "single-left-comment-level1"
        
        //CREATING IMAGE
        var profileimage = document.createElement("img")
        profileimage.id = "pfp"+commentid
        profileimage.className = "comment-profile-pictures"
        profileimage.src = "images/c3.jpg"
        
        //CREATING THE COMMENT PARENT
        var thecommentcontainer = document.createElement("div")
        thecommentcontainer.id = "container"+commentid
        thecommentcontainer.className = "single-left-thecomment"

        //CREATING THE NAME 
        var namepar = document.createElement("p")
        namepar.id = "name"+commentid
        namepar.className = "name"

        //CREATING THE DATE LINK
        var dateanchor = document.createElement("a")
        dateanchor.id = "datelink"+commentid
        dateanchor.href = "#"
        dateanchor.className = "thecommentdates"

        //CREATING THE COMMENT CONTENT
        var commentcontent = document.createElement("p")
        commentcontent.id="Komen"+commentid
        commentcontent.className = "single-left-thecomment-content"

        //CREATING THE DELETE BUTTON
        var deletecommentbtn = document.createElement("p")
        deletecommentbtn.className = "deletecomment"
        var delbtnfunction = "deleteComment("+commentcontainermain.id+","+a+")"
        deletecommentbtn.setAttribute("onclick",delbtnfunction)

        //APPENDING EVERYTHING
        dateanchor.appendChild(commentdate)
        namepar.appendChild(commentname)
        namepar.appendChild(dateanchor)
        deletecommentbtn.appendChild(textdelcomment)
        commentcontent.appendChild(commentisi)
        thecommentcontainer.appendChild(namepar)
        thecommentcontainer.appendChild(commentcontent)
        thecommentcontainer.appendChild(deletecommentbtn)
        commentcontainermain.appendChild(profileimage)
        commentcontainermain.appendChild(thecommentcontainer)
        document.getElementById("single-left-commentsection").appendChild(commentcontainermain)
    }
    document.getElementById("totalcomments").innerHTML=""+totalkomen+" COMMENTS"
}

//MAKING A DATE
function turntodate(nondate){
    var newDate = "", arrDate = nondate.split(" "), hari, bulan="", tahun
    hari = arrDate[1]
    tahun = arrDate [2]

    if(arrDate[0]=="Jan"){
        bulan = "January"
    }else if(arrDate[0]=="Feb"){
        bulan = "February"
    }else if(arrDate[0]=="Mar"){
        bulan = "March"
    }else if(arrDate[0]=="Apr"){
        bulan = "April"
    }else if(arrDate[0]=="May"){
        bulan = "May"
    }else if(arrDate[0]=="Jun"){
        bulan = "June"
    }else if(arrDate[0]=="Jul"){
        bulan = "July"
    }else if(arrDate[0]=="Aug"){
        bulan = "August"
    }else if(arrDate[0]=="Sep"){
        bulan = "September"
    }else if(arrDate[0]=="Oct"){
        bulan = "October"
    }else if(arrDate[0]=="Nov"){
        bulan = "November"
    }else if(arrDate[0]=="Dec"){
        bulan = "December"
    }

    newDate = hari+" "+bulan+" "+tahun
    return newDate
}

//DELETING COMMENT
function deleteComment(idcomment, num){
    totalkomen-=1
    var divId = idcomment.id
    var divComment = document.getElementById(divId)
    divComment.remove()
    arraylocalcomment.splice(num,1)
    localStorage.setItem("commentsection",JSON.stringify(arraylocalcomment))
    document.getElementById("totalcomments").innerHTML=""+totalkomen+" COMMENTS"
}