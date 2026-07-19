import {
    ambientLight,
    sunLight,
    rimLight,
    floorLight
} from "../scene/lights";

let darkMode = false;

export function setupLighting() {

    const ambientBtn = document.getElementById("ambientToggle");

    if (!ambientBtn) return;

    ambientBtn.addEventListener("click", () => {

        darkMode = !darkMode;

        if (darkMode) {

            ambientLight.intensity = 0.25;
            sunLight.intensity = 0.4;
            rimLight.intensity = 35;
            floorLight.intensity = 20;

            ambientBtn.textContent = "Night";

        } else {

            ambientLight.intensity = 1.2;
            sunLight.intensity = 2.5;
            rimLight.intensity = 20;
            floorLight.intensity = 12;

            ambientBtn.textContent = "Day";

        }

    });

}