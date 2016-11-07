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
            name: 'Club',
            description: 'A group of individuals aspiring to succeed.'
        },
        '31': {
            id: '31',
            name: 'Fencing',
            description: 'The teenager\'s chivalry.'
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
        }
    },
    events: {
        '1': {
            name: "Go Leafs Go!",
            description: "Join us to cheer on the leafs while they win the Stanley cup. Tell your friends about us.",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 3.2,
            communities: [
                { id: 34, name: "Hockey" },
                { id: 87, name: "Sports" }
            ]
        },
        '3': {
            name: "Event B",
            description: "A description of event B.",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 1.5,
            communities: [
                { id: 23, name: "Fencing" },
                { id: 89, name: "Club" },
                { id: 99, name: "University of Toronto" }
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
                { id: 89, name: "Club" },
                { id: 99, name: "University of Toronto" }
            ]
        },
        '9': {
            name: "Some Event",
            description: "Lorem ipsum.",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 2.1,
            communities: [
                { id: 23, name: "Cooking" },
                { id: 89, name: "Club" },
                { id: 99, name: "University of Toronto" }
            ]
        },
        '75': {
            name: "Some Event 2",
            description: "Lorem ipsum.",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 1.1,
            communities: [
                { id: 23, name: "Cooking" },
                { id: 999, name: "Other" },
                { id: 99, name: "University of Toronto" }
            ]
        },
        '750': {
            name: "Some Event 7",
            description: "Lorem ipsum.",
            start_date: 1478045486,
            end_date: 1478049486,
            longitude: -77.037852,
            latitude: 38.898556,
            distance: 1.1,
            communities: [
                { id: 23, name: "Tennis" },
                { id: 999, name: "Club" },
                { id: 99, name: "University of Toronto" }
            ]
        }
    }
};
