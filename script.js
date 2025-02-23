
var crsr = document.querySelector("#cursor")
var crsr1 = document.querySelector("#cursor-b");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})

document.addEventListener("mousemove",function(dets){
    crsr1.style.left = dets.x-75+"px";
    crsr1.style.top = dets.y-75+"px";
})

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2;
        crsr.style.border = "0.2px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "#95C11E";
    })
})

gsap.to("#nav",{
    backgroundColor : "black",
    height : "100px",
    duration : 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -35%",
      end: "top -70%",
      scrub: 2,
    },
  });

gsap.from("#about-us img,#about-us-in",{
    y:30,
    opacity:0,
    duration:2,
    stagger:2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 70%",
        scrub:4
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 69%",
        end:"top 75%",
        scrub:3
    }
})

gsap.from("#colon1",{
    y:"-100px",
    x:"-100px",
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 80%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 85%",
        scrub:2
    }
})