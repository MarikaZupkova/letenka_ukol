const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};

document.body.innerHTML += "<p>" + "<h1>Letenka - úkol</h1>" + "</p>";
document.body.innerHTML += "<p>" + "<h2>Startovní a cílová destinace</h2>" + "</p>";
document.body.innerHTML += "<p>" + "Startovní země: " + flight.flyFrom + "</p>";
document.body.innerHTML += "<p>" + "Cílová země: " + flight.flyTo + "</p>";

const bagLimit = flight.baglimit;

document.body.innerHTML += "<p>" + "<h2>Povolené rozměry zavazadel</h2>" + "</p>";
document.body.innerHTML += "<p>" + "Výška: " + bagLimit.hand_height + " cm,</p>";
document.body.innerHTML += "<p>" + "Délka: " + bagLimit.hand_length + " cm,</p>";
document.body.innerHTML += "<p>" + "Hloubka: " + bagLimit.hand_width + " cm,</p>";
document.body.innerHTML += "<p>" + "Váha: " + bagLimit.hand_weight + " Kg.</p>";
document.body.innerHTML += "<p>" + "Cena druhého zavazadla: " + Math.ceil (flight.bags_price[2] * flight.conversion.EUR) + " CZK.</p>";
