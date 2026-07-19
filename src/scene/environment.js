import * as THREE from "three";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";

export function createEnvironment(scene) {

    const loader = new EXRLoader();

    loader.load(
        "/hdr/studio_small_03_4k.exr",

        (texture) => {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.environment = texture;

            // Keep your showroom background
            scene.background = null;

            console.log("HDR Environment Loaded");

        },

        undefined,

        (error) => {

            console.error("Failed to load EXR:", error);

        }

    );

}