//Write a function getTaxiCount(passengersCount) that takes the number of passengers and returns the number of taxis to call to carry all those passengers.

//Request:

//When the number of guests is greater than 4, priority is given to 7-seater vehicles

//If the number of guests is less than or equal to 4, use a 4-seat car

//Returns a single number that is the sum of both taxis that need to be called

function  getTaxiCount(passengersCount) {
    console.log(Math.ceil(passengersCount/7))
    return Math.ceil(passengersCount/7);
}

getTaxiCount(12);
getTaxiCount(1);
getTaxiCount(1);
getTaxiCount(2);
getTaxiCount(7);
getTaxiCount(15);
