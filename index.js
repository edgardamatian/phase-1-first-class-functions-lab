const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  }
  
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];
  
  const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4']; // Example array of drivers
  
  const firstTwoDrivers = selectingDrivers[0](driversArray); // Invoke the first function
  const lastTwoDrivers = selectingDrivers[selectingDrivers.length - 1](driversArray); // Invoke the last function
  
  const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
  };

  const fareDoubler = (fare) => {
    return fare * 2;
  };

  const fareTripler = (fare) => {
    return fare * 3;
  };

  const selectDifferentDrivers = (arrayOfDrivers, driverSelector) => {
    return driverSelector(arrayOfDrivers);
  };