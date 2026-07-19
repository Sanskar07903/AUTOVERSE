import gsap from "gsap";

export function animateVehicle(){

    gsap.from(".vehicle-card",{

        opacity:0,

        y:60,

        stagger:.2,

        duration:1

    });

}