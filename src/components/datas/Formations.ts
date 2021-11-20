export interface Formation {
    id: number;
    title: string;
    date: string;
    location: string;
}

const DataFormations: Formation [] = [
    {
        id: 1,
        title: 'BTS informatique de gestion',
        date: '03/10/2008 - 15/06/2010',
        location: 'Montpellier',
    },
    {
        id: 2,
        title: 'Baccalauréat S',
        date: '03/07/2001 - 25/06/2005',
        location: 'Pointe-à-Pitre',
    },
];

export default DataFormations;
