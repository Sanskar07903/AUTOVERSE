import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { renderer } from "./renderer";

export const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(9, 4.5, 9);

export const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;
controls.dampingFactor = 0.35;

controls.enablePan = false;

controls.minDistance = 5;
controls.maxDistance = 18;

controls.maxPolarAngle = Math.PI / 2.05;
controls.minPolarAngle = Math.PI / 5;

controls.autoRotate = true;
controls.autoRotateSpeed = 0.8;

controls.target.set(0,1,0);

controls.update();

window.addEventListener("resize",()=>{

    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);

});