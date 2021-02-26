function popOpArticle(num){
    var titletext=""
    if(num == 1){
        titletext = "A Dog So Cool Your Eyes Will Melt"
    }else if(num==2){
        titletext = "What Your Shadows Think of You"
    }else if(num==3){
        titletext = "A Tree in a Bright Place"
    }
    document.getElementById("related-blog-pop").style.zIndex="999"
    document.getElementById("relatedblogcon").style.transform="scale(1)"
    document.getElementById("blog-title").innerHTML=""+titletext
}
function zIndexBlog(){
    document.getElementById("related-blog-pop").style.zIndex="-2"
}
function popOutOfRelated(){
    document.getElementById("relatedblogcon").style.transform="scale(0)"
    setTimeout("zIndexBlog()",300)
}