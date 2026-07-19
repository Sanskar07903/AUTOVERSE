import * as THREE from "three";

let paintMeshes = [];

export function setupPaintConfigurator(car) {

    paintMeshes = [];

    // Find every mesh using the CarPaint material
    car.traverse((child) => {

        if (!child.isMesh) return;

        const material = child.material;

        if (!material) return;

        if (Array.isArray(material)) {

            material.forEach((mat) => {

                if (mat.name === "CarPaint") {

                    paintMeshes.push({
                        mesh: child,
                        material: mat
                    });

                }

            });

        } else {

            if (material.name === "CarPaint") {

                paintMeshes.push({
                    mesh: child,
                    material: material
                });

            }

        }

    });

    console.log("Paint Meshes:", paintMeshes.length);

    document.querySelectorAll(".colorBtn").forEach((button) => {

        button.onclick = () => {

            document
                .querySelectorAll(".colorBtn")
                .forEach((b) => b.classList.remove("active"));

            button.classList.add("active");

            const color = new THREE.Color(button.dataset.color);

            paintMeshes.forEach((item) => {

                item.material.color.copy(color);

                item.material.metalness = 0.95;
                item.material.roughness = 0.15;

                item.material.needsUpdate = true;

            });

        };

    });

}