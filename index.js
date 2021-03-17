// Code your solution in this file!

const returnFirstTwoDrivers = drivers =>  drivers.slice(0,2)

const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier(multipler) {
    return function (fare){ 
        return fare * multipler
    }
}


const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}



function selectDifferentDrivers( drivers, driverFunction ){
    return driverFunction(drivers);
}

