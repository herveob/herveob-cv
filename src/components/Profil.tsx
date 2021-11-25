import React from 'react';
import moment from 'moment';

const Profil = () => (
    <div className="profil mb5">
        <h2 className="h2">Profil</h2>
        <p>Developpeur Javascript Fullstack {moment().year() - 2016} ans d'expériences</p>
    </div>
);

export default Profil
