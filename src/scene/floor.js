import * as THREE from "three";

export function createFloor(scene) {

    // Main Platform
    const platform = new THREE.Mesh(

        new THREE.CylinderGeometry(
            9,
            9,
            0.35,
            128
        ),

        new THREE.MeshPhysicalMaterial({

            color: 0x111111,

            metalness: 0.85,

            roughness: 0.18,

            clearcoat: 1,

            clearcoatRoughness: 0.04

        })

    );

    platform.receiveShadow = true;

    platform.position.y = -0.18;

    scene.add(platform);

    // Outer Ring

    const ring = new THREE.Mesh(

        new THREE.TorusGeometry(
            9,
            0.06,
            32,
            256
        ),

        new THREE.MeshStandardMaterial({

            color: 0xffffff,

            emissive: 0xffffff,

            emissiveIntensity: 1.2

        })

    );

    ring.rotation.x = Math.PI / 2;

    ring.position.y = 0.01;

    scene.add(ring);

}