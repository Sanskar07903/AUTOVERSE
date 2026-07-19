import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import * as THREE from "three";

export function createComposer(renderer, scene, camera) {

    const composer = new EffectComposer(renderer);

    composer.addPass(

        new RenderPass(scene, camera)

    );

    const bloom = new UnrealBloomPass(

        new THREE.Vector2(

            window.innerWidth,

            window.innerHeight

        ),

        0.45,   // Strength

        0.25,   // Radius

        0.85    // Threshold

    );

    composer.addPass(bloom);

    return composer;

}