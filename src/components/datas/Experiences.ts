export interface Experiences {
    id: number;
    title: string;
    date: string;
    location: string;
    text: string;
    missions: {
        id: number;
        title: string
    } []
};

const DataExperiences: Experiences [] = [
    {
        id: 1,
        title: 'Air Liquide',
        date: '03/05/2021 - aujourd\'huit',
        location: 'Gentilly',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        missions: [
            {
                id: 1,
                title: 'mission1'
            },
            {
                id: 2,
                title: 'mission2'
            }
        ]
    },
    {
        id: 2,
        title: 'Agile4me',
        date: '03/07/2001 - 02/05/2021',
        location: 'Paris',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        missions: [
            {
                id: 1,
                title: 'mission1'
            },
            {
                id: 2,
                title: 'mission2'
            }
        ]
    },
];

export default DataExperiences;
