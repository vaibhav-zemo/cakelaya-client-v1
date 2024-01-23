import React from 'react';
import styled from "styled-components"
import Begin from '../MultiStep/Begin';
import Header from "../components/Header";
import Announcement from '../components/Announcement';
import Footer from "../components/Footer";

const Container = styled.section`
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin-bottom: 10px;
`;

const Gift = () => {

    return (
        <>
            <Announcement/>
            <Header/>
            <Container >
                <Begin />
            </Container >
            <Footer/>
        </>
    );
}

export default Gift;
