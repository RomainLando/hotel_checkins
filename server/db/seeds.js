
use hotel_checkins
db.dropDatabase()
db.guests.insertMany([
    {"name":"Frodo Baggins",
    "emailAddress":"f.baggins@yahoo.shire",
    checkedInStatus:false},
    {"name":"Elrond",
    "emailAddress":"lord.of.Rivendell@gmail.com",
    checkedInStatus:false},
    {"name":"Samwise Gamgee",
    "emailAddress":"s.gamgee@landscape.gardening.shire",
    checkedInStatus:false},
    {"name":"Strider",
    "emailAddress":"Aragorn@prancing.poney.com",
    checkedInStatus:true}
])