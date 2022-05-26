const DUMMY_RESULTS = [
  {
    id: 1,
    airline_name: "Qatar Airways",
    departure: {
      date: new Date("2022-05-26T13:24:00"),
      location: "Islamabad",
      airport_name: "International Islamabad Airport - IIAP",
    },
    arrival: {
      date: new Date("2022-05-27T11:30:00"),
      location: "Sharjah",
      airport_name: "Sharjah International Airport",
    },
    price: 253167,
    isRefundable: true,
    numberOfPassengers: 1,
  },
  {
    id: 2,
    airline_name: "PIA",
    departure: {
      date: new Date("2022-05-27T11:30:00"),
      location: "Islamabad",
      airport_name: "International Islamabad Airport - IIAP",
    },
    arrival: {
      date: new Date("2022-05-27T12:21:00"),
      location: "Karachi",
      airport_name: "Jinnah International Airport",
    },
    price: 253167,
    isRefundable: true,
    numberOfPassengers: 1,
  },
  {
    id: 3,
    airline_name: "Air Blue",
    departure: {
      date: new Date(),
      location: "Islamabad",
      airport_name: "International Islamabad Airport - IIAP",
    },
    arrival: {
      date: new Date(),
      location: "Lahore",
      airport_name: "Allama Iqbal International Airport",
    },
    price: 253167,
    isRefundable: true,
    numberOfPassengers: 1,
  },
];

export { DUMMY_RESULTS };
