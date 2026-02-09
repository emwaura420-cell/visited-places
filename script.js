// Business Logic: Place Constructor
function Place(location, landmark, season, notes) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

// Prototype method to get full details
Place.prototype.getDetails = function () {
  return `${this.location} | ${this.landmark} | ${this.season} | ${this.notes}`;
};

// List of Places
const places = [
  new Place(
    "Malindi",
    "Mambrui Sand Dunes",
    "November",
    "Chilled semi-coastal desert with sand dunes, great for buggy driving and sunset watching"
  ),
  new Place(
    "Kitengela",
    "Fred's Ranch",
    "Any day",
    "Great for family outings with a nice bar, swimming pool, ample parking, and a buffet"
  ),
  new Place(
    "Jamaica",
    "Montego Bay",
    "July",
    "Very hot and sunny, but worth it for the vibes and culture"
  ),
  new Place(
    "Manchester",
    "Old Trafford",
    "October",
    "Great atmosphere from the fans, carrying on the United legacy"
  ),
  new Place(
    "Rome",
    "The Colosseum",
    "July",
    "Culture and history"
  ),
  new Place(
    "Manila, Philippines",
    "Goldcoast Beach",
    "August",
    "Great sandy beaches"
  )
];

// Test: Log all place details
places.forEach(place => {
  console.log(place.getDetails());
});
