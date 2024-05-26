var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    cursorBlur.style.left = dets.x-100+"px"
    cursorBlur.style.top = dets.y-100+"px"
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