gsap.from(".btm-pan", {
    scrollTrigger: {
        trigger: ".btm-pan",
        scroller: "body",
        scrub: true,
    },
    y: 350
})
gsap.from(".berry", {
    scrollTrigger: {
        trigger: ".btm-pan",
        scroller: "body",
        scrub: true,
    },
    y: -1250
})
gsap.from(".pott", {
    scrollTrigger: {
        trigger: ".pott",
        scroller: "body",
        scrub: true,
    },
    y: -850
})
document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
        document.querySelector(".loader").style.display = "none";
    }
})