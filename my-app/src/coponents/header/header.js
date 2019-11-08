import React from 'react';
import Nav from './nav';
import {HeaderS} from '../../styledComponents/styledComponents';
export default function Header(props){

    return (
        <HeaderS>
            <h1>New App</h1>
            <Nav />
        </HeaderS>
    );

}