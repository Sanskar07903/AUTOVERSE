import * as THREE from "three";

import { hotspots } from "./hotspots";

import { camera } from "../scene/camera";

const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();

window.addEventListener("click", event => {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;

    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const hit = raycaster.intersectObjects(hotspots);

    if(hit.length){

        const info = hit[0].object.userData;

        document.getElementById("hotspotTitle").textContent = info.title;

        document.getElementById("hotspotDescription").textContent = info.description;

        document.getElementById("hotspotInfo").style.display = "block";

    }

});

document.getElementById("closeHotspot").onclick = () =>{

    document.getElementById("hotspotInfo").style.display="none";

};