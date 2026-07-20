import { carSpecs } from "./specs";

export function updateCarInfo(file) {

    const car = carSpecs[file];

    if (!car) return;

    function setText(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    }

    setText("brand", car.brand);
    setText("model", car.model);
    setText("power", car.power);
    setText("speed", car.topSpeed);
    setText("price", car.price);
    setText("engine", car.engine);
    setText("drivetrain", car.drivetrain);
    setText("acceleration", car.acceleration);

}