export function printModelStructure(model) {

    console.clear();

    console.log("========== MODEL STRUCTURE ==========");

    model.traverse((child) => {

        if (child.isMesh) {

            console.log(
                "Mesh:",
                child.name,
                "| Material:",
                child.material?.name || "Unnamed Material"
            );

        }

    });

    console.log("=====================================");

}