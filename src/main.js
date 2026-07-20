import "./styles/style.css";

import { scene } from "./scene/scene";
import { camera, controls } from "./scene/camera";
import { renderer } from "./scene/renderer";

import { createLights } from "./scene/lights";
import { createFloor } from "./scene/floor";
import { createShowroom } from "./scene/showroom";
import { createEnvironment } from "./scene/environment";
import { createComposer } from "./scene/postprocessing";

import { loadVehicle } from "./models/vehicle";

import { updateCarInfo } from "./ui/ui";
import { setupConfigurator } from "./ui/configurator";

import { setupCameraViews } from "./features/cameraViews";
import { setupLighting } from "./features/lighting";

import Lenis from "@studio-freight/lenis";

import { animateHero } from "./animations/heroAnimation";

import { animateNavbar } from "./animations/navbarAnimation";

import { revealSections } from "./animations/reveal";

import { animateVehicle } from "./animations/vehicleAnimation";

import "./animations/scrollCamera";

import { createHotspot } from "./hotspots/hotspots";
import "./hotspots/interactions";
import * as THREE from "three";


// ====================
// Scene Setup
// ====================
createLights(scene);
createFloor(scene);
createShowroom(scene);
createEnvironment(scene);

// Bloom Composer
const composer = createComposer(
    renderer,
    scene,
    camera
);

// ====================
// Vehicle List
// ====================

const cars = [

    {
        file: "bmw.glb",
        size: 15,
        yOffset: 0
    },

    {
        file: "mercedes.glb",
        size: 5,
        yOffset: 0
    }

];

let currentCar = 0;

// ====================
// Load Vehicle
// ====================

function showCar() {

    const loading = document.getElementById("loadingScreen");

    if (loading) {

        loading.style.display = "flex";
        loading.style.opacity = "1";

        const progress = document.getElementById("loaderProgress");

        if (progress) {

            progress.style.width = "0%";

        }

    }

    loadVehicle(

        scene,

        cars[currentCar].file,

        cars[currentCar].size,

        cars[currentCar].yOffset

    );

    // updateCarInfo(cars[currentCar].file);
    

    // Smoothly focus the 3D viewer
    camera.position.set(9, 4.5, 9);
    controls.target.set(0, 1, 0);
    controls.update();

}
// ====================
// Initial Load
// ====================

showCar();

createHotspot(

    scene,

    new THREE.Vector3(1.2,1,-2),

    "Headlights",

    "Adaptive LED Matrix headlights with automatic high beam."

);

createHotspot(

    scene,

    new THREE.Vector3(-1.4,.7,1.8),

    "Wheel",

    "20-inch forged alloy wheels with M Sport brakes."

);

createHotspot(

    scene,

    new THREE.Vector3(0,1.3,0),

    "Engine",

    "3.0L TwinPower Turbo inline-6 producing 503 HP."

);

// ====================
// UI Setup
// ====================
setupConfigurator();
setupCameraViews();
setupLighting();

// ====================
// Vehicle Card Buttons
// ====================

document.querySelectorAll(".view3d-btn").forEach((button) => {
    button.addEventListener("click", () => {
        currentCar = Number(button.dataset.car);
        showCar();
    });
});
// ====================
// GSAP Animations
// ====================

animateNavbar();
animateHero();
animateVehicle();
revealSections();

// ====================
// Lenis Smooth Scroll
// ====================

const lenis = new Lenis({

    duration: 1.2,

    smoothWheel: true

});

function raf(time) {

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

// ====================
// Vehicle Showcase
// ====================

// If you are still using Previous / Next buttons,
// this code will continue to work.

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn) {

    prevBtn.addEventListener("click", () => {

        currentCar--;

        if (currentCar < 0) {

            currentCar = cars.length - 1;

        }

        showCar();

    });

}

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        currentCar++;

        if (currentCar >= cars.length) {

            currentCar = 0;

        }

        showCar();

    });

}

// ====================
// Keyboard Controls
// ====================

window.addEventListener("keydown", (event) => {

    if (event.key === "ArrowLeft") {

        currentCar--;

        if (currentCar < 0) {

            currentCar = cars.length - 1;

        }

        showCar();

    }

    if (event.key === "ArrowRight") {

        currentCar++;

        if (currentCar >= cars.length) {

            currentCar = 0;

        }

        showCar();

    }

});

// ====================
// Animation Loop
// ====================

function animate() {

    requestAnimationFrame(animate);

    controls.update();

    composer.render();

}

animate();