let carYear = document.getElementById("year"),
    carMake = document.getElementById("make"),
    carModel = document.getElementById("model"),
    carVin = document.getElementById("vin"),
    addCar = document.getElementById("add_car"),
    displayCar = document.getElementById("display_car"),
    car = [];

let Car = function Car(year, make, model, vin) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.vin = vin;
    this.getDisplayText = function() {
        return "Year: " + this.year + "<br>" +
        "Make: " + this.make + "<br>" +
        "Model: " + this.model + "<br>" +
        "VIN#: " + this.vin;
    }
}

let returnCar = function returnCar(){
    car.forEach(function(car, index, arr){
        displayCar.innerHTML += car.getDisplayText() + "<br>";
    });
};

addCar.addEventListener("click", function(){
    let newCar = new Car(carYear.value, carMake.value, carModel.value, carVin.value);
    car.push(newCar);
    returnCar();
    console.log(car.length);
});
