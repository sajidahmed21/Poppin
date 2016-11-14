// Used strictly for debugging / mockups / demos.

export default {
    communities: {
        '34': {
            id: '34',
            name: 'Hockey',
            description: 'A sport.'
        },
        '24': {
            id: '24',
            name: 'University of Toronto',
            description: 'A great institute of higher education.'
        },
        '14': {
            id: '14',
            name: 'Cooking',
            description: 'Culinary arts of the 21st century.'
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
            description: 'The teenager\'s chivalry.',
            private: true
        },
        '32': {
            id: '32',
            name: 'Arts',
            description: 'Modern face painting.'
        },
        '33': {
            id: '33',
            name: 'Party',
            description: 'A great time.'
        },
        '39': {
            id: '39',
            name: 'Swimming',
            description: 'Another sport.'
        },
        '87': {
            id: '87',
            name: 'Sports',
            description: 'Lots of sports.'
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
        }
    }
};
