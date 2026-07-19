import * as THREE from "three";

const hotspotGeometry = new THREE.SphereGeometry(0.08, 32, 32);

const hotspotMaterial = new THREE.MeshBasicMaterial({

    color: 0xffffff

});

export const hotspots = [];

export function createHotspot(scene, position, title, description) {

    const hotspot = new THREE.Mesh(

        hotspotGeometry,

        hotspotMaterial.clone()

    );

    hotspot.position.copy(position);

    hotspot.userData = {

        title,

        description

    };

    scene.add(hotspot);

    hotspots.push(hotspot);

}