// Used strictly for debugging / mockups / demos.

export default {
    communities: {
        '34': {
            id: '34',
            name: 'Hockey',
            description: 'Canada\'s favourite pastime.'
        },
        '24': {
            id: '24',
            name: 'University of Toronto',
            description: 'Canada\'s premier institute of higher education.'
        },
        '14': {
            id: '14',
            name: 'Cooking',
            description: 'An exploration of the culinary arts.'
        },
        '74': {
            id: '74',
            name: 'Tennis',
            description: 'The third best sport to darts.'
        },
        '64': {
            id: '64',
            name: 'Smiles for Miles',
            description: 'A group of individuals aspiring to succeed.',
            private: true
        },
        '31': {
            id: '31',
            name: 'Fencing',
            description: 'The 21st century solution to dwindling chivalry.',
            private: true
        },
        '32': {
            id: '32',
            name: 'Arts',
            description: 'The expression of the world\'s beauty.'
        },
        '33': {
            id: '33',
            name: 'Party',
            description: 'A friendly gathering of well intentioned young adults.'
        },
        '39': {
            id: '39',
            name: 'Swimming',
            description: 'Aquatic activities in the aqua sea.'
        },
        '87': {
            id: '87',
            name: 'Sports',
            description: 'Exercise and have fun at the same time!'
        },
        '88': {
            id: '88',
            name: 'Other',
            description: 'Miscellaneous general events.'
        },
        '89': {
            id: '89',
            name: 'Tourism',
            description: 'For sightseeing and places of interest.'
        },
        '95': {
            id: '95',
            name: 'Media',
            description: 'People who love books, movies, etc.'
        },
        '101':{
            id: '101',
            name: 'Video Games',
            description: 'For all people who enjoy video games.'
        },
        '110':{
            id: '110',
            name: 'Dance',
            description: 'For those who enjoy to dance and express themselves.'
        }
    },
    events: {
        '1': {
            name: "Go Leafs Go!",
            description: "Join us to cheer on the leafs while they win the Stanley cup. Tell your friends about us.\n\nThis is actually a very long description.",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -79.379458,
            latitude: 43.643026,
            distance: 3.2,
            communities: [
                { id: 34, name: "Hockey" },
                { id: 87, name: "Sports" }
            ]
        },
        '3': {
            name: "Fencing Tournament Extravanganza!",
            description: "Please join us for our monthly fencing tournament hosted by Fencing Club spanning a spectacular hour!",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 1.5,
            communities: [
                { id: 31, name: "Fencing" },
                { id: 64, name: "Club" },
                { id: 24, name: "University of Toronto" }
            ]
        },
        '5': {
            name: "Iron Chef at UofT",
            description: "Think you can cook a better dish? Why don't you come and find out.",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 2.2,
            communities: [
                { id: 23, name: "Cooking" },
                { id: 64, name: "Club" },
                { id: 24, name: "University of Toronto" }
            ]
        },
        '9': {
            name: "UofT Bake Sale",
            description: "Serving up deliciously baked goods at affordable prices! Come support your local clubs by treating yourself!",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 2.1,
            communities: [
                { id: 14, name: "Cooking" },
                { id: 64, name: "Club" },
                { id: 24, name: "University of Toronto" }
            ]
        },
        '75': {
            name: "Tasty Students!",
            description: "Presented from our diverse community, come and try dishes from around the world!",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 1.1,
            communities: [
                { id: 14, name: "Cooking" },
                { id: 88, name: "Other" },
                { id: 24, name: "University of Toronto" }
            ]
        },
        '750': {
            name: "Tennis teachings in Toronto",
            description: "Join us on the court to learn the basics or practice with the pros! All skill levels are welcome!",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 1.1,
            communities: [
                { id: 74, name: "Tennis" },
                { id: 64, name: "Club" },
                { id: 24, name: "University of Toronto" }
            ]
        },
        '80': {
            name: "Free Admission to CN Tower.",
            description: "Access to the SkyPod will be free for one day only!",
            start_date: 1479132000,
            end_date: 1479164400,
            longitude: -79.379458,
            latitude: 43.643026,
            distance: 6.2,
            communities: [
                { id: 89, name: "Tourism"},
                { id: 88, name: "Other"}
            ]
        },
        '83': {
            name: "The Lord of the Rings Concert",
            description: "Sit back as we bring to life Tolkien's classic fantasy featuring a live cast!",
            start_date: 1480914000,
            end_date: 1481432340,
            longitude: -79.386426,
            latitude: 43.648562,
            distance: 4.0,
            communities: [
                { id: 32, name: "Arts"},
                { id: 95, name: "Media"}
            ]
        },
        '90': {
            name: "Swimming with the fishes",
            description: "Enjoy a special night with the release of our new tropical sea life with special events just for the occasion!",
            start_date: 1480986000,
            end_date: 1481004000,
            latitude: 43.642475,
            longitude: -79.385987,
            distance: 5.8,
            communities: [
               { id: 89, name: "Tourism"},
               { id: 33, name: "Party"},
               { id: 39, name: "Swimming"}
            ]
        },
        '104': {
            name: "University of Toronto League of Legends Championship Series",
            description: "Enjoy a day of exciting LOL games. Players from all tiers are welcome!",
            start_date: 1479902400,
            end_date: 1479938400,
            latitude: 43.667730,
            longitude: -79.393872,
            distance: 1.0,
            communities: [
               { id: 24, name: "University of Toronto"},
               { id: 101, name: "Video Games"}
            ]
        },
        '105':{
            name: "Yugoslavian Dance Meetup",
            description: "Come one, come all to enjoy a full 24 hours of nonstop Yugoslavian dance!",
            start_date: 1480161600,
            end_date: 1480248000,
            latitude: 43.667730,
            longitude: -79.393872,
            distance: 1.0,
            communities: [
               { id: 24, name: "University of Toronto"},
               { id: 110, name: "Dance"}
            ]
        },
        '106':{
            name: "The Grande Duel",
            description: "For one full day UC has been booked by the Fencing Club! Join us as different factions duel for control of UC.",
            start_date: 1482667200,
            end_date: 1482753600,
            latitude: 43.660974,
            longitude: -79.395370,
            distance: 2.5,
            communities: [
               { id: 24, name: "University of Toronto"},
               { id: 31, name: "Fencing"}
            ]
        }
    }
};
