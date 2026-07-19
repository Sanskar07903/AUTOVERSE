import * as THREE from "three";

export function createShowroom(scene) {

    const wallMaterial = new THREE.MeshStandardMaterial({

        color: 0x111111

    });

    // Back Wall
    const backWall = new THREE.Mesh(

        new THREE.BoxGeometry(20, 8, 0.3),

        wallMaterial

    );

    backWall.position.set(0, 4, -10);

    scene.add(backWall);

    // Left Wall
    const leftWall = new THREE.Mesh(

        new THREE.BoxGeometry(0.3, 8, 20),

        wallMaterial

    );

    leftWall.position.set(-10, 4, 0);

    scene.add(leftWall);

    // Right Wall
    const rightWall = leftWall.clone();

    rightWall.position.set(10, 4, 0);

    scene.add(rightWall);

    // Ceiling
    const ceiling = new THREE.Mesh(

        new THREE.PlaneGeometry(20, 20),

        wallMaterial

    );

    ceiling.rotation.x = Math.PI / 2;

    ceiling.position.y = 8;

    scene.add(ceiling);

    // Platform
    const platform = new THREE.Mesh(

        new THREE.CylinderGeometry(2.8, 2.8, 0.3, 64),

        new THREE.MeshStandardMaterial({

            color: 0x333333,

            metalness: 1,

            roughness: 0.2

        })

    );

    platform.position.y = 0.15;

    platform.receiveShadow = true;

    platform.castShadow = true;

    scene.add(platform);

}