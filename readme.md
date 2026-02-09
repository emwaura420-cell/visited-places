# Places You've Been

## Description
This application stores and tracks places I have visited. Each place is represented as an object with properties such as location, landmark, season, and notes.

## Business Logic
- Place constructor creates place objects
- Prototype methods define shared behavior

## Tests

Describe: Place()

Test: "It should create a Place object with location, landmark, season, and notes"
Code:
const place = new Place("Malindi", "Mambrui Sand Dunes", "November", "Notes")
Expected Output:
place.location === "Malindi"

Describe: Place.prototype.getDetails()

Test: "It should return a formatted string of place details"
Code:
place.getDetails()
Expected Output:
"Malindi | Mambrui Sand Dunes | November | Notes"
