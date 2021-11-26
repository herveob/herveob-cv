export interface Experiences {
    id: number;
    title: string;
    date: string;
    location: string;
    text: string;
    missions: {
        id: number;
        title: string
    }[]
};

const DataExperiences: Experiences[] = [
    {
        id: 0,
        title: 'SOAT',
        date: `07/2018 - aujourd'hui`,
        location: 'Paris',
        text: `SSII`,
        missions: [
            // {
            //     id: 1,
            //     title: 'mission1'
            // },
            // {
            //     id: 2,
            //     title: 'mission2'
            // }
        ]
    },
    {
        id: 1,
        title: 'Air Liquide',
        date: `05/2021 - aujourd'hui`,
        location: 'Gentilly',
        text: `Équipe Wale: Développement BACKEND et FRONT de la solution SAAS de signature de prescription médicale pour les médecins soignants des maladies nécessitant des équipements ou des consommables tels que le diabète et l'apnée du sommeil`,
        missions: [
            // {
            //     id: 1,
            //     title: 'mission1'
            // },
            // {
            //     id: 2,
            //     title: 'mission2'
            // }
        ]
    },
    {
        id: 2,
        title: 'Agile4me',
        date: '01/2021 - 04/2021',
        location: 'Paris',
        text: 'Editeur de logiciel de génération d\'indicateurs agiles',
        missions: [
            {
                id: 1,
                title: 'Mise à jour des règles de générations de KPI'
            },
            {
                id: 2,
                title: 'Ajout d\'un nouvel indicateur comme filtre dans les tableaux existants'
            },
            {
                id: 3,
                title: 'Correction de bugs existants'
            },
        ]
    },
    {
        id: 3,
        title: 'SEPHORA SAS',
        date: '07/2020 - 12/2020',
        location: 'Paris',
        text: `Création d'un back-end pour l'enregistrement des commandes click and collect des magasins Sephora, afin de mettre à disposition les données pour une application iOS utilisé par les vendeurs/vendeuses en magasin.`,
        missions: [
            {
                id: 1,
                title: `Mise en place du back-end de l'application`
            },
            {
                id: 2,
                title: 'Intégration continue avec Bitbucket'
            },
        ]
    },
    {
        id: 4,
        title: 'VSC TECHNOLOGIES',
        date: '02/2019 - 07/2020',
        location: 'Paris',
        text: `L'équipe WEBANALYTICS, est chargée de l'intégration et de la maintenance des tags gérant Ominiture (Adobe) et Eulerian Analytics pour gérer le tracking des utilisateurs du site oui.sncf`,
        missions: [
            {
                id: 1,
                title: `Amélioration / Refonte du framework de tracking (passage d'un legacy en Javascript à une application modulaire en Typescript)`,
            },
            {
                id: 2,
                title: `Développement de plusieurs web app internes (BackEnd Api REST, Front-End React)`,
            },
            {
                id: 3,
                title: `Développement d'un POC pour l'intégration de Didomi pour la gestion des cookies (RGPD)`,
            },
        ]
    },
    {
        id: 5,
        title: 'E-TF1',
        date: '01/2018 - 11/2018',
        location: 'Boulogne-Billancourt',
        text: `Projet SVOD TFOUMAX : Le pôle "Payant" s’occupe du développement BackEnd et Front-End des plateformes de VOD MyTF1VOD et SVOD TFOUMAX`,
        missions: [
            {
                id: 1,
                title: `Migration back-end de l'authentification legacy de TF1 vers le système SSO « Gigya », multi-support (Web, iOS et Android)`,
            },
            {
                id: 2,
                title: `Intégration des vidéos de TFOUMAX dans l’offre SVOD de la box VideoFutur`,
            },
            {
                id: 3,
                title: `Création de routes exposant les données pour Android TV`,
            },
            {
                id: 4,
                title: `Exposition du catalogue TFOUMAX pour APPLE`,
            },
            {
                id: 5,
                title: `Amélioration de la performance de la gestion des reçus in app iOS et Android`,
            },
        ]
    },
    {
        id: 6,
        title: 'RAKUTEN',
        date: '12/2010 - 11/2017',
        location: 'Paris',
        text: `RAKUTEN / Priceminister est un site de E-commerce pratiquant la vente indirecte. Il se place en tiers de confiance entre un acheteur et un vendeur`,
        missions: [
            {
                id: 1,
                title: `ANALYSTE – REALISATEUR: Pôle IMPORT`,
            },
            {
                id: 2,
                title: `DEVELOPPEUR TALEND / JAVASCRIPT: pôle catalogue`,
            },
        ]
    },
];

export default DataExperiences;
