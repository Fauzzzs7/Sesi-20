function popOpMember(num, name, skill, year){
    document.getElementById("memberpop").style.zIndex="999"
    document.getElementById("memberpop-id").style.transform="scale(1)"
    document.getElementById("imageofmember").src="images/about-img"+num+".jpg"
    document.getElementById("membername").innerHTML=name
    document.getElementById("memberskill").innerHTML=skill
    document.getElementById("memberyears").innerHTML=year
}
function popOutofMember(){
    document.getElementById("memberpop-id").style.transform="scale(0)"
    setTimeout("moveZindexMember()",300)
}
function moveZindexMember(){
    document.getElementById("memberpop").style.zIndex="-4"
}
function loadSkill(){
    document.getElementById("skill-1").style.width="612px"
    document.getElementById("skill-2").style.width="510px"
    document.getElementById("skill-3").style.width="544px"
    document.getElementById("skill-4").style.width="476px"
    document.getElementById("skill-5").style.width="599px"
    document.getElementById("skill-6").style.width="680px"
    document.getElementById("skill-7").style.width="612px"
    document.getElementById("skill-8").style.width="340px"
}
var a=0,bo=0,c=0,d=0,e=0,f=0,g=0,h=0,kedua=0;
function changenumbera(){
    if(a!=90){
        a+=2
        document.getElementById("skill1p").innerHTML=""+a+"%" 
        setTimeout("changenumbera()",50)
    }
}
function numberb(){
    if(bo!=75){
        bo+=2
        document.getElementById("skill2p").innerHTML=""+bo+"%" 
        setTimeout("numberb()",50)
    }
}
function changenumberc(){
    if(c!=80){
        c+=2
        document.getElementById("skill3p").innerHTML=""+c+"%" 
        setTimeout("changenumberc()",50)
    }
}
function changenumberd(){
    if(d!=70){
        d+=2
        document.getElementById("skill4p").innerHTML=""+d+"%" 
        setTimeout("changenumberd()",50)
    }
}
function changenumbere(){
    if(e!=88){
        e+=2
        document.getElementById("skill5p").innerHTML=""+e+"%" 
        setTimeout("changenumbere()",50)
    }
}
function changenumberf(){
    if(f!=100){
        f+=2
        document.getElementById("skill6p").innerHTML=""+f+"%" 
        setTimeout("changenumberf()",50)
    }
}
function changenumberg(){
    if(g!=90){
        g+=2
        document.getElementById("skill7p").innerHTML=""+g+"%" 
        setTimeout("changenumberg()",50)
    }
}
function changenumberh(){
    if(h!=50){
        h+=2
        document.getElementById("skill8p").innerHTML=""+h+"%" 
        setTimeout("changenumberh()",50)
    }
}
function changenumberkedua(){
    if(kedua!=74){
        kedua+=2
        document.getElementById("skill2p").innerHTML=""+kedua+"%" 
        setTimeout("changenumberkedua()",50)
    }
}
window.onscroll = function(){
    if(window.pageYOffset >= 300){
        loadSkill()
        changenumberkedua()
        changenumbera()
        changenumberc()
        changenumberd()
        changenumbere()
        changenumberf()
        changenumberg()
        changenumberh()
    }
}