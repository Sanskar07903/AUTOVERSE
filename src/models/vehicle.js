import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupPaintConfigurator } from "../features/paint";


export let vehicle = null;

const loader = new GLTFLoader();

export function loadVehicle(
    scene,
    modelName = "bmw.glb",
    targetSize = 20,
    yOffset = 0,
    onLoaded = () => {}
) {

    // Remove previous vehicle
    if (vehicle) {

        scene.remove(vehicle);

        vehicle.traverse((child) => {

            if (!child.isMesh) return;

            child.geometry.dispose();

            if (Array.isArray(child.material)) {

                child.material.forEach((material) => material.dispose());

            } else if (child.material) {

                child.material.dispose();

            }

        });

        vehicle = null;

    }

    const progressBar = document.getElementById("loaderProgress");

    loader.load(

        `/models/vehicles/${modelName}`,

        (gltf) => {

            vehicle = gltf.scene;

            // -----------------------------
            // Calculate original size
            // -----------------------------

            const box = new THREE.Box3().setFromObject(vehicle);

            const size = box.getSize(new THREE.Vector3());

            const maxDimension = Math.max(
                size.x,
                size.y,
                size.z
            );

            const scale = targetSize / maxDimension;

            vehicle.scale.setScalar(scale);

            // -----------------------------
            // Recalculate after scaling
            // -----------------------------

            const scaledBox = new THREE.Box3().setFromObject(vehicle);

            const center = scaledBox.getCenter(
                new THREE.Vector3()
            );

            // -----------------------------
            // Center vehicle
            // -----------------------------

            vehicle.position.set(

                -center.x,

                -scaledBox.min.y + yOffset,

                -center.z

            );

            // -----------------------------
            // Shadows
            // -----------------------------

            vehicle.traverse((child) => {

                if (child.isMesh) {

                    child.castShadow = true;

                    child.receiveShadow = true;

                }

            });

            scene.add(vehicle);

            // -----------------------------
            // Setup
            // -----------------------------

            

            setupPaintConfigurator(vehicle);

            // -----------------------------
            // Loading Bar
            // -----------------------------

            if (progressBar) {

                progressBar.style.width = "100%";

            }

            const loading = document.getElementById("loadingScreen");

            if (loading) {

                setTimeout(() => {

                    loading.style.opacity = "0";

                    loading.style.transition = "0.8s";

                    setTimeout(() => {

                        loading.style.display = "none";

                    }, 800);

                }, 300);

            }

            onLoaded();

            console.log("Loaded:", modelName);

        },

        (xhr) => {

            if (progressBar && xhr.total) {

                const percent =
                    (xhr.loaded / xhr.total) * 100;

                progressBar.style.width =
                    percent + "%";

            }

        },

        (error) => {

            console.error("Model loading failed:", error);

        }

    );

}