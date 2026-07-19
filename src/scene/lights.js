import * as THREE from "three";

export let ambientLight;
export let sunLight;
export let rimLight;
export let floorLight;

export function createLights(scene) {

    // Ambient Light
    ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Main Sun Light
    sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(8, 12, 8);
    sunLight.castShadow = true;

    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;

    sunLight.shadow.camera.left = -20;
    sunLight.shadow.camera.right = 20;
    sunLight.shadow.camera.top = 20;
    sunLight.shadow.camera.bottom = -20;

    scene.add(sunLight);

    // Blue Rim Light
    rimLight = new THREE.PointLight(0x4da6ff, 20, 30);
    rimLight.position.set(-8, 5, -8);
    scene.add(rimLight);

    // White Floor Light
    floorLight = new THREE.PointLight(0xffffff, 12, 25);
    floorLight.position.set(0, 2, 8);
    scene.add(floorLight);

}