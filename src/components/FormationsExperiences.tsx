import React from 'react';
import './FormationsExperiences.css';
import Formations from './Formations';
import Experiences from './Experiences';
import DataFormations from './datas/Formations';
import DataExperiences from './datas/Experiences';


const FormationsExperiences = ()  => {
    return (
        <>
            <Formations datas={DataFormations}/>
            <Experiences datas= {DataExperiences} />
        </>
    )
}

export default FormationsExperiences
