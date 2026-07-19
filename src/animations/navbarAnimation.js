import gsap from "gsap";

export function animateNavbar(){

    gsap.from(".navbar",{

        y:-100,

        opacity:0,

        duration:1,

        ease:"power3.out"

    });

}