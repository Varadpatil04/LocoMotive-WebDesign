function loading() {
    var tl = gsap.timeline()
    tl.to(".yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })
    tl.from(".yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")
    tl.to("#loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.7
    }, "anim")
    tl.to("#loader", {
        opacity: 0,
    })
    tl.to("#loader", {
        display: "none"
    })
}
loading()

function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector(".page2");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var img = e.getAttribute("data-img")
            // console.log(img)
            page2.style.backgroundImage = `url(${img})`
        })
        e.addEventListener("mouseleave", function () {
            // Restore the initial background color
            page2.style.backgroundImage = "";
            page2.style.backgroundColor = "black";
        });
    })

    var foot = document.querySelector("#footer");
    foot.addEventListener("click", function () {
        scroll.scrollTo(0)
    })
}
loco();