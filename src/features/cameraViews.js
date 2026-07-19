import * as THREE from "three";
import { camera, controls } from "../scene/camera";

const targetPosition = new THREE.Vector3();
const currentTarget = new THREE.Vector3(0, 1, 0);

let moving = false;

function animateCamera() {

    if (!moving) return;

    camera.position.lerp(targetPosition, 0.08);

    controls.target.lerp(currentTarget, 0.08);

    controls.update();

    if (camera.position.distanceTo(targetPosition) < 0.05) {

        camera.position.copy(targetPosition);

        controls.target.copy(currentTarget);

        controls.update();

        moving = false;

        return;

    }

    requestAnimationFrame(animateCamera);

}

function moveCamera(x, y, z) {

    targetPosition.set(x, y, z);

    moving = true;

    animateCamera();

}

export function setupCameraViews() {

    document.getElementById("frontCamera")
        ?.addEventListener("click", () => {

            moveCamera(0, 2.2, 8);

        });

    document.getElementById("rearCamera")
        ?.addEventListener("click", () => {

            moveCamera(0, 2.2, -8);

        });

    document.getElementById("topCamera")
        ?.addEventListener("click", () => {

            moveCamera(0, 9, 0);

        });

    document.getElementById("freeCamera")
        ?.addEventListener("click", () => {

            moveCamera(9, 4.5, 9);

        });

}