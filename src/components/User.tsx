import React from 'react';
import './User.css';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import EventIcon from '@material-ui/icons/Event';
import LocationIcon from '@material-ui/icons/LocationOn';
import moment from 'moment';

const User = () => (
    <div className="user">
        <img src="./images/avatar.jpg" alt="" className="user__avatar"/>
        <h1 className="user__name">Hervé OCTUVON-BAZILE</h1>
        <p className="user__profession">Développeur Web</p>
        <div className="user__infos">
            <p className="user__info">
                <HomeIcon /> Rosny-Sous-Bois
            </p>
            <p className="user__info">
                <PhoneIcon />
                <a href="tel:+33651844308">0651844308</a>
            </p>
            <p className="user__info">
                <MailIcon />
                <a href="mailto:herveob@gmail.com">herveob@gmail.com</a>
            </p>
            <p className="user__info">
                <EventIcon /> Date de naissance : 11 Octobre 1986 ({moment().diff('1986-11-10', 'years')} ans)
            </p>
            <p className="user__info">
                <LocationIcon /> Lieu de naissance : Pointe-à-Pitre
            </p>
        </div>
    </div>
)


export default User
