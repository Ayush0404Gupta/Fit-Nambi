var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+10+"px"
    cursor.style.top = dets.y+"px"
    cursorBlur.style.left = dets.x-100+"px"
    cursorBlur.style.top = dets.y-100+"px"
})

var navLinks = document.querySelectorAll("#nav a");
navLinks.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        cursor.style.scale = 2
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave',function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #ff005b"
        cursor.style.backgroundColor = "#ff005b"
    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"80px",
    duration:0.6,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:" top -11%",
        scrub:1
    }
});


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-content",{
    y:50,
    duration:1,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 70%",
        scrub:3
    }
})