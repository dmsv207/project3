// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });

function page2animation(){
    var elems=document.querySelectorAll(".elem")
    var page2=document.querySelector("#page2")
    
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter",function(){
            var bgimg=ele.getAttribute("data-img")
            page2.style.backgroundImage=`url(${bgimg})`
        })
    })
}
page2animation()
