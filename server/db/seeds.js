
use hotel_checkins
db.dropDatabase()
db.guests.insertMany([
    {"name":"Frodo Baggins",
    emailAdress:"f.baggins@yahoo.shire",
    checkedInStatus:false},
    {"name":"Elrond",
    emailAdress:"lord.of.Rivendell@gmail.com",
    checkedInStatus:false},
    {"name":"Samwise Gamgee",
    emailAdress:"s.gamgee@landscape.gardening.shire",
    checkedInStatus:false},
    {"name":"Strider",
    emailAdress:"Aragorn@prancing.poney.com",
    checkedInStatus:true}
])