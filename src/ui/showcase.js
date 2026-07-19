export function setupShowcase(showCar) {

    const cars = document.querySelectorAll(".vehicle-card");

    cars.forEach(card => {

        card.addEventListener("click", () => {

            const index = Number(card.dataset.index);

            showCar(index);

        });

    });

}