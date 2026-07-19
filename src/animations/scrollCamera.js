import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { camera, controls } from "../scene/camera";

gsap.registerPlugin(ScrollTrigger);

// HOME
gsap.to(camera.position, {

    x: 9,
    y: 4.5,
    z: 9,

    scrollTrigger: {

        trigger: "#home",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});

// VEHICLES
gsap.to(camera.position, {

    x: 7,
    y: 3,
    z: 5,

    scrollTrigger: {

        trigger: "#vehicles",

        start: "top center",

        end: "bottom center",

        scrub: 1

    }

});

// SPECIFICATIONS
gsap.to(camera.position, {

    x: -6,
    y: 3,
    z: 6,

    scrollTrigger: {

        trigger: "#specifications",

        start: "top center",

        end: "bottom center",

        scrub: 1

    }

});

// CONFIGURATOR
gsap.to(camera.position, {

    x: 2,
    y: 1.8,
    z: 3,

    scrollTrigger: {

        trigger: "#configurator",

        start: "top center",

        end: "bottom center",

        scrub: 1

    }

});

// GALLERY
gsap.to(camera.position, {

    x: 0,
    y: 8,
    z: 10,

    scrollTrigger: {

        trigger: "#gallery",

        start: "top center",

        end: "bottom center",

        scrub: 1

    }

});

// Keep camera looking at the car
gsap.ticker.add(() => {

    controls.target.set(0, 1, 0);

    controls.update();

});