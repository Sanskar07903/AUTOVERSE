import * as THREE from "three";

export const renderer = new THREE.WebGLRenderer({

    antialias: true,
    alpha: true

});

// Renderer Size
renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

// High DPI Support
renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

// Shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Color Management
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Tone Mapping
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

// Transparent Background
renderer.setClearColor(0x000000, 0);

// Append Canvas
const app = document.getElementById("app");

if (app) {

    app.appendChild(renderer.domElement);

}

// Resize
window.addEventListener("resize", () => {

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

});