function listingtheprojects(nameofclass){
    removethisproject(nameofclass)
    var classlist = document.getElementsByClassName(nameofclass)
    var idmaxwidth = document.getElementById("mainbodyportofolio")
    var getMaxWidth = window.getComputedStyle(idmaxwidth,null).getPropertyValue("width")
    var widthtrue = lookforwidth(getMaxWidth)
    console.log(widthtrue)

    if(classlist.length==0){
        document.getElementById("listport").style.height="460px"
    }

    var leftpos = 0, toppos = 0, currentheight = 0, count = 0

    for(i=0; i<classlist.length; i++){
        if(i==0){
            leftpos = 3
        }else{
            if(widthtrue <= 414){
                leftpos+=75
            }else{
                leftpos+=24
            }
            
        }

        if(leftpos>75){
            count+=1
            leftpos = 3
        }

        toppos = (count*440) + 30
        currentheight = ((count+1)*440) + 20
        document.getElementById("listport").style.height=""+currentheight+"px"

        var idproject = document.getElementsByClassName(nameofclass)[i].id
        document.getElementById(idproject).style.left = ""+leftpos+"%"
        document.getElementById(idproject).style.top = ""+toppos+"px"

        toppos = 0
        currentheight = 0
    }
    

}

function lookforwidth(number){
    var array = [0,1,2,3,4,5,6,7,8,9]
    var count = 0;
    for(i=0;i<number.length;i++){
        for(j=0; j<array.length; j++){
            if(number[i]==array[j]){
                count+=1;
            }
        }
    }
    var newNumber = number.slice(0,count)
    var numbernonstring = newNumber*1;
    return numbernonstring
}


// function listAll(){
//     removeList("webpro")
//     removeList("iconpro")
//     removeList("allpro")
//     removeList("designpro")
//     removeList("logopro")
//     var classlist = document.getElementsByClassName("allpro")
//     if(classlist.length==0){
//         document.getElementById("listport").style.height="460px"
//     }
//     var leftpos = 0;
//     var toppos=0;
//     var currentheight=0;
//     var count=0;
    
//     for(i=0;i<classlist.length;i++){
//         if(i==0){
//             leftpos = 3;
//         }else{
//             leftpos+=24;
//         }

//         if((leftpos>75)){
//             count+=1;
//             leftpos = 3
//         }

//         toppos = (count*440)+ 30;
//         currentheight = ((count+1)*440) + 20;
//         document.getElementById("listport").style.height=""+currentheight+"px"
        
//         document.getElementById("listport").style.height=currentheight
//         var idproject = document.getElementsByClassName("allpro")[i].id;
//         document.getElementById(idproject).style.left = ""+leftpos+"%";
//         document.getElementById(idproject).style.top = ""+toppos+"px";
//         toppos = 0;
//         currentheight = 0;
//     }
// }

// function listWeb(){
//     removeList("iconpro")
//     removeList("allpro")
//     removeList("designpro")
//     removeList("logopro")
//     var classlist = document.getElementsByClassName("webpro")
//     if(classlist.length==0){
//         document.getElementById("listport").style.height="460px"
//     }
//     var leftpos = 0;
//     var toppos;
//     var currentheight;
//     var count=0;
    
//     for(i=0;i<classlist.length;i++){
//         if(i==0){
//             leftpos = 3;
//         }else{
//             leftpos+=24;
//         }

//         if(leftpos>75){
//             count+=1;
//             leftpos = 3
//         }

//         toppos = (count*440)+ 30;
//         currentheight = ((count+1)*440) + 20;
//         document.getElementById("listport").style.height=""+currentheight+"px"
        
        
//         document.getElementById("listport").style.height=currentheight
//         var idproject = document.getElementsByClassName("webpro")[i].id;
//         document.getElementById(idproject).style.left = ""+leftpos+"%";
//         document.getElementById(idproject).style.top = ""+toppos+"px";

//         toppos = 0
//         currentheight = 0
//     }
// }
// function listIcon(){
//     removeList("webpro")
//     removeList("allpro")
//     removeList("designpro")
//     removeList("logopro")
//     var classlist = document.getElementsByClassName("iconpro")
//     if(classlist.length==0){
//         document.getElementById("listport").style.height="460px"
//     }
//     var leftpos = 0;
//     var toppos;
//     var currentheight;
//     var count=0;
    
//     for(i=0;i<classlist.length;i++){
//         if(i==0){
//             leftpos = 3;
//         }else{
//             leftpos+=24;
//         }

//         if(leftpos>75){
//             count+=1;
//             leftpos = 3
//         }

//         toppos = (count*440)+ 30;
//         currentheight = ((count+1)*440) + 20;
//         document.getElementById("listport").style.height=""+currentheight+"px"
        
//         document.getElementById("listport").style.height=currentheight
//         var idproject = document.getElementsByClassName("iconpro")[i].id;
//         document.getElementById(idproject).style.left = ""+leftpos+"%";
//         document.getElementById(idproject).style.top = ""+toppos+"px";

//         toppos = 0
//         currentheight = 0
//     }
// }

// function listDesign(){
//     removeList("webpro")
//     removeList("iconpro")
//     removeList("allpro")
//     removeList("logopro")
//     var classlistdesign = document.getElementsByClassName("designpro")
//     var leftposdesign = 0;
//     var topposdesign;
//     var currentheightdesign;
//     var countdesign=0;
//     if(classlistdesign.length==0){
//         document.getElementById("listport").style.height="460px"
//     }
//     for(i=0;i<classlistdesign.length;i++){
//         if(i==0){
//             leftposdesign = 3;
//         }else{
//             leftposdesign+=24;
//         }

//         if(leftposdesign>75){
//             countdesign+=1;
//             leftposdesign = 3
//         }

//         if(countdesign == 0){
//             topposdesign = 30;
//             currentheightdesign = 460
//             document.getElementById("listport").style.height=""+currentheightdesign+"px"
//             console.log(countdesign+","+topposdesign+","+currentheightdesign)
//         }else if(countdesign == 1){
//             topposdesign = 470
//             currentheightdesign = 910
//             document.getElementById("listport").style.height=""+currentheightdesign+"px"
//             console.log(countdesign+","+topposdesign+","+currentheightdesign)
//         }else if(countdesign == 2){
//             topposdesign = 920
//             currentheightdesign = 1340
//             document.getElementById("listport").style.height=""+currentheightdesign+"px"
//         }
        
//         document.getElementById("listport").style.height=currentheightdesign
//         var idproject = document.getElementsByClassName("designpro")[i].id;
//         document.getElementById(idproject).style.left = ""+leftposdesign+"%";
//         document.getElementById(idproject).style.top = ""+topposdesign+"px";

//         toppos = 0
//         currentheight = 0
// }}

// function listLogo(){
//     removeList("webpro")
//     removeList("iconpro")
//     removeList("allpro")
//     removeList("designpro")
//     var classlistdesign = document.getElementsByClassName("logopro")
//     var leftposdesign = 0;
//     var topposdesign;
//     var currentheightdesign;
//     var countdesign=0;
//     if(classlistdesign.length==0){
//         document.getElementById("listport").style.height="460px"
//     }
//     for(i=0;i<classlistdesign.length;i++){
//         if(i==0){
//             leftposdesign = 3;
//         }else{
//             leftposdesign+=24;
//         }

//         if(leftposdesign>75){
//             countdesign+=1;
//             leftposdesign = 3
//         }

//         if(countdesign == 0){
//             topposdesign = 30;
//             currentheightdesign = 460
//             document.getElementById("listport").style.height=""+currentheightdesign+"px"
//             console.log(countdesign+","+topposdesign+","+currentheightdesign)
//         }else if(countdesign == 1){
//             topposdesign = 470
//             currentheightdesign = 910
//             document.getElementById("listport").style.height=""+currentheightdesign+"px"
//             console.log(countdesign+","+topposdesign+","+currentheightdesign)
//         }else if(countdesign == 2){
//             topposdesign = 920
//             currentheightdesign = 1340
//             document.getElementById("listport").style.height=""+currentheightdesign+"px"
//         }
        
//         document.getElementById("listport").style.height=currentheightdesign
//         var idproject = document.getElementsByClassName("logopro")[i].id;
//         document.getElementById(idproject).style.left = ""+leftposdesign+"%";
//         document.getElementById(idproject).style.top = ""+topposdesign+"px";

//         toppos = 0
//         currentheight = 0
// }}



function removeList(name){
    var classlist = document.getElementsByClassName(name)
    for(k=0; k<classlist.length; k++){
        var idprojectall = document.getElementsByClassName(name)[k].id;
        document.getElementById(idprojectall).style.left = "-500px";
    }
}

function removethisproject(thisproject){
    var arrpro = ["allpro","webpro","iconpro","designpro","logopro"]
    for(b=0;b<arrpro.length;b++){
        if(arrpro[b]!=thisproject){
            removeList(arrpro[b])
        }
    }
}