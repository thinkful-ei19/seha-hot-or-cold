import React from 'react';
import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav toggleModal={() => props.toggleModal()} newGame={()=>props.newGame()}/>
            <InfoModal visibility={props.visibility} toggleModal={()=>props.toggleModal()}/> 
            <h1>HOT or COLD</h1>
        </header>
    );
};
