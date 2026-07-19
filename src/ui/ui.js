import { carSpecs } from "./specs";

export function updateCarInfo(file) {

    const car = carSpecs[file];

    if (!car) return;

    document.getElementById("brand").textContent = car.brand;
    document.getElementById("model").textContent = car.model;
    document.getElementById("power").textContent = car.power;
    document.getElementById("speed").textContent = car.topSpeed;
    document.getElementById("price").textContent = car.price;
    document.getElementById("engine").textContent = car.engine;
    document.getElementById("drivetrain").textContent = car.drivetrain;
    document.getElementById("acceleration").textContent = car.acceleration;

}