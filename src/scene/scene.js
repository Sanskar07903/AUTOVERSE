import * as THREE from "three";

export const scene = new THREE.Scene();

scene.background = new THREE.Color(0x090909);

scene.fog = new THREE.Fog(0x090909, 25, 60);