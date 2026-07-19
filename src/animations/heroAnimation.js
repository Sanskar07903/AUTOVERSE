import gsap from "gsap";

export function animateHero(){

    const tl = gsap.timeline();

    tl.from(".badge",{

        y:40,

        opacity:0,

        duration:.8,

        ease:"power3.out"

    })

    .from(".hero h1",{

        y:60,

        opacity:0,

        duration:1

    },"-=.4")

    .from(".hero p",{

        y:40,

        opacity:0,

        duration:.8

    },"-=.5")

    .from(".hero-buttons",{

        y:30,

        opacity:0,

        duration:.7

    },"-=.4")

    .from(".hero-stats div",{

        y:20,

        opacity:0,

        stagger:.15,

        duration:.6

    },"-=.2");

}