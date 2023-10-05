function init() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    })

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 0 + "px"
    crsr.style.top = dets.y + 0 + "px"
})

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 30%",
        end: "top 0",
        scrub: 2
    }
})

tl.to(".page1 h1", {
    x: -100
}, "animation");

tl.to(".page1 h2", {
    x: 100
}, 'animation')

tl.to(".page1 video", {
    width: "100%"
}, 'animation')

tl.to(".page1 video", {
    width: "100%"
}, 'animation')


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -20%",
        end: "top -30%",
        scrub: 2
    }
})

tl2.to(".main", {
    backgroundColor: "#272424"
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -210%",
        end: "top -220%",
        scrub: 2
    }
})

tl3.to(".main", {
    backgroundColor: "#fff"
})