var arrlocal =JSON.parse(localStorage.getItem("todos"))
if(arrlocal==null || arrlocal == undefined){
    var arr = [];
}else{
    var arr = arrlocal;
    window.onload=addtolist;
}

function addobj(){
    var myObj = {}

    myObj.id = Date.now()
    if(document.getElementById("todos-con").value!=''){
        myObj.name = document.getElementById("todos-con").value
        myObj.condition = "false"
        arr.push(myObj)
        myObj = {}

        var arr_string = JSON.stringify(arr)
        localStorage.setItem("todos", arr_string)
        document.getElementById("todos-con").value=''
        arrlocal =JSON.parse(localStorage.getItem("todos"))
        newtolist()
    }else{
        alert("INSERT TODOS")
    }
    
    
}

//To Put the new item on div
function newtolist(){
    var indexoflist = arrlocal.length-1;
    var textisi = document.createTextNode(arrlocal[indexoflist].name)
    
        var listcontainer = document.createElement("div")
        listcontainer.className = "listingoftodo"
        listcontainer.id = arrlocal[indexoflist].id

        var checkbox = document.createElement("input")
        checkbox.type="checkbox"
        checkbox.className = "checkboxinput"
        checkbox.id = "check"+listcontainer.id
        
        

        var deletebutton = document.createElement("button")
        deletebutton.className="buttondelete"
        var nameoffunction = "deleteContent("+listcontainer.id+","+indexoflist+")"
        deletebutton.setAttribute("onclick",nameoffunction)
        var textdelete = document.createTextNode("Delete")
        deletebutton.appendChild(textdelete)

        var isi = document.createElement("h3")
        isi.className = "h3content"
        isi.id = "h3"+listcontainer.id
        

        var fungsicheckbox = "changeStyle("+checkbox.id+","+isi.id+","+indexoflist+")"
        checkbox.setAttribute("onclick", fungsicheckbox)

        isi.appendChild(textisi)
        
        listcontainer.appendChild(checkbox)
        listcontainer.appendChild(isi)
        listcontainer.appendChild(deletebutton)
        document.getElementById("contenttodo").appendChild(listcontainer)
        console.log(textisi)
    
}

//To display every item on load
function addtolist(){
    for(i=0; i<arrlocal.length; i++){
        var listcontainer = document.createElement("div")
        listcontainer.className = "listingoftodo"
        listcontainer.id = arrlocal[i].id

        var checkbox = document.createElement("input")
        checkbox.type="checkbox"
        checkbox.className = "checkboxinput"
        checkbox.id = "check"+listcontainer.id
        
        

        var deletebutton = document.createElement("button")
        deletebutton.className="buttondelete"
        var nameoffunction = "deleteContent("+listcontainer.id+","+i+")"
        deletebutton.setAttribute("onclick",nameoffunction)
        var textdelete = document.createTextNode("Delete")
        deletebutton.appendChild(textdelete)

        var isi = document.createElement("h3")
        isi.className = "h3content"
        isi.id = "h3"+listcontainer.id
        var textisi = document.createTextNode(arrlocal[i].name)

        var fungsicheckbox = "changeStyle("+checkbox.id+","+isi.id+","+i+")"
        checkbox.setAttribute("onclick", fungsicheckbox)

        

        isi.appendChild(textisi)
        
        listcontainer.appendChild(checkbox)
        listcontainer.appendChild(isi)
        listcontainer.appendChild(deletebutton)
        document.getElementById("contenttodo").appendChild(listcontainer)

        if(arrlocal[i].condition=="true"){
            document.getElementById(checkbox.id).checked=true
            document.getElementById(isi.id).style.textDecoration="line-through"
        }
    }
}
function deleteContent(id,num){
    var divcontentlist = document.getElementById(id)
    divcontentlist.remove()
    arrlocal.splice(num,1)
    localStorage.setItem("todos", JSON.stringify(arrlocal))
}
function changeStyle(idbox, idisi, num){
    checkboxidnya = idbox.id
    h3idnya = idisi.id
    if(document.getElementById(checkboxidnya).checked==true){
        document.getElementById(h3idnya).style.textDecoration="line-through"
        arrlocal[num].condition="true"
        localStorage.setItem("todos", JSON.stringify(arrlocal))
    }else{
        document.getElementById(h3idnya).style.textDecoration="none"
        arrlocal[num].condition="false"
        localStorage.setItem("todos", JSON.stringify(arrlocal))
    }
    console.log(idisi)
    
}
