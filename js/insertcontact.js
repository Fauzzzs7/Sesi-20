var arrcontactlocal = JSON.parse(localStorage.getItem("contactlist"))
var totalemail = 0

if(arrcontactlocal == null || arrcontactlocal == undefined){
    var arraycontact = []
}else{
    arraycontact = arrcontactlocal
}
// PUTTING CONTACT VALUE INTO LOCAL STORAGE
function sendContact(){
    var contactObj = {}
    var datesent = new Date()
    var  string_datesent = ""+datesent+"", realdate_sent = string_datesent.slice(4,15), tanggalakhir = sentDateConvert(realdate_sent)

    contactObj.id = Date.now()
    if(document.getElementById("send-contact-text").value!=''){
        document.getElementById("contactpop").style.zIndex="999"
        document.getElementById("contactpop-content").style.transform="translateY(0)"
        document.getElementById("contactpop-content").style.opacity="1"

        contactObj.nama = document.getElementById("send-contact-name").value
        contactObj.email = document.getElementById("send-contact-email").value
        contactObj.contact = document.getElementById("send-contact-text").value
        contactObj.subject = document.getElementById("send-contact-subject").value
        contactObj.tanggalkirim = tanggalakhir
        arraycontact.push(contactObj)

        localStorage.setItem("contactlist", JSON.stringify(arraycontact))
        document.getElementById("send-contact-name").value=''
        document.getElementById("send-contact-email").value=''
        document.getElementById("send-contact-text").value=''
        document.getElementById("send-contact-subject").value=''
        contactObj={}
        arrcontactlocal = JSON.parse(localStorage.getItem("contactlist"))
        displayContact()
    }else{
        alert("COMPLETE YOUR CONTACT FORM")
    }
}

function displayContact(){
    var finalindex = arrcontactlocal.length-1

    //PULLING THE DATA
    var contactid = finalindex
    var contactname = document.createTextNode(arrcontactlocal[finalindex].nama)
    var contactdate = document.createTextNode(arrcontactlocal[finalindex].tanggalkirim)
    var contactemail = document.createTextNode(arrcontactlocal[finalindex].email)
    var contactsubject = document.createTextNode(arrcontactlocal[finalindex].subject)
    var contacttext = document.createTextNode(arrcontactlocal[finalindex].contact)

    var paraname = document.createElement("p")
    paraname.appendChild(contactname)
    document.getElementById("contact-pop-name").appendChild(paraname)

    var paradate = document.createElement("p")
    paradate.appendChild(contactdate)
    document.getElementById("contact-pop-date").appendChild(paradate)

    var paraemail = document.createElement("p")
    paraemail.append(contactemail)
    document.getElementById("contact-pop-email").appendChild(paraemail)

    var parasub = document.createElement("p")
    parasub.appendChild(contactsubject)
    document.getElementById("contact-pop-subject").appendChild(parasub)

    var paratext = document.createElement("p")
    paratext.appendChild(contacttext)
    document.getElementById("contact-pop-text").appendChild(paratext)
}

function popOutofContact(){
    document.getElementById("contactpop-content").style.transform="translateY(-200px)"
    document.getElementById("contactpop-content").style.opacity="0"
    setTimeout("removeZindexContact()",300)
}

function removeZindexContact(){
    document.getElementById("contactpop").style.zIndex="-2"
}
// SENT DATE CONVERT
function sentDateConvert(date){
    var newDate = "", arrDate = date.split(" "), hari, bulan="", tahun
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