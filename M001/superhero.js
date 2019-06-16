//db.createCollection('superheros') // This Works
db = db.getSiblingDB("video");
db.superhero.drop();
db.superhero.insertMany([
        {
	    "name" : "Spiderman",
	    "realName":"Peter Parker",
 	    "superPowers" : ['Super Strength', 'Spidersense', 'Sticks to walls', 'Super agility'],
	    "hero" : "True"
        },
        {
	    "name" : "Thor",
	    "realName":"Thor Odinson",
 	    "superPowers" : ['Super Strength', 'Silver tongue', 'Controls Lighting', 'Flight', 'Controls the Weather'],
	    "hero" : "True"
        },
        {
	    "name" : "Wolverine",
	    "realName":"Logan",
 	    "superPowers" : ['Super Strength', 'Accelerated Healing Factor', 'Ademantium Skeleton', 'Ademantium Claws'],
	    "hero" : "True"
        },
        {
	    "name" : "Captain America",
	    "realName":"Steve Rogers",
 	    "superPowers" : ['Super Strength', 'Accelerated Healing Factor', 'Enhanced Human abilities'],
	    "hero" : "True"
        },
        {
	    "name" : "Ironman",
	    "realName":"Tony Stark",
 	    "superPowers" : ['Excessively Wealthy', 'Super Smart', 'Posses an iron suit'],
	    "hero" : "True"
        },] );
