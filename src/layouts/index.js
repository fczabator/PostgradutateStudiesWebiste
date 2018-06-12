import React from "react";
import styled from 'styled-components';
import Logo from '../../public/assets/Logo.svg';
import {Logo as LogoComponent} from '../utils/Logo';
import Media from "react-media";
import {BurgerMenu} from '../utils/BurgerMenu';
import {MobileLink} from '../utils/MobileLink';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopMenu = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 10%;
    border-top: solid 1px #ddd;
    border-bottom: solid 1px #ddd;
    line-height: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: 400;
    word-spacing: 0.3em;
}
`;

const Title = styled.h1`
    font-size: 32px;
    margin: 20px auto 30px;
    font-weight: 300;
    color: #b32216;
    word-spacing: 0.3em;
    text-align: center;
`;

const Content = styled.div`
    margin: 50px 20px 20px 20px;
`;

const HtmlLink = styled.a`
    text-decoration: none;
    color: black;
    :hover {
        color: #b32216;
    }
`;

const PwrImage = styled.img`
    width: 40%;
    height: auto;
    margin: auto;
    padding 20px 0 0;
`;

const Footer = styled.div`
    margin-top: 50px;
    height: 200px;
    width: 100%;
    background-color: #b32216;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;    

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const FooterLogoContainer = styled.div`
    svg path {
        fill: white !important;
    }
    > * > *{
        fill: white !important;
    }
`;

const HeaderLogoContainer = styled.div`
    :hover {
        svg path {
            fill: #b32216 !important;
        }
        > * > *{
            fill: #b32216 !important;
        }
    }
    margin: 20px auto 0; 
    cursor: pointer;
    
`;

const AddressContainer = styled.div`
    color: white;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
`;

const formLink = 'http://cku.pwr.edu.pl/fcp/NGBUKOQtTKlQhbx08SlkTVgNQX2o8DAoHNiwFE1wZDyEPG1gnBVcoFW8SBDRKTxMKRy0SODwBBAEIMQheCFVAORFCHzY/_users/code_uDlYOLhFKNRk7XwMxCwhYRgBCAz8-QwgGHGsRXQ/zalaczniki/att_studia_karta_zgloszenia.doc';
const programmeDownloadLink = 'http://cku.pwr.edu.pl/fcp/NGBUKOQtTKlQhbx08SlkTVgNQX2o8DAoHNiwFE1wZDyEPG1gnBVcoFW8SBDRKTxMKRy0SODwBBAEIMQheCFVAORFCHzY/_users/code_uDlYOLhFKNRk7XwMxCwhYRgBCAz8-QwgGHGsRXQ/studia/android_3/android_i_ios_nowoczesne_aplikacje_mobilne_program_studiow_edycja_trzecia.pdf'
const recruitmentLink = 'http://cku.pwr.edu.pl/studia-podyplomowe/rekrutacja';

export default ({ children }) => (
  <PageContainer>
    <Media query="(max-width: 900px)">
        {matches => matches && (
            <BurgerMenu>
                <MobileLink href={programmeDownloadLink} download  target="_blank">Program</MobileLink>
                <MobileLink href={formLink} download target="_blank">Formularz Zgłoszeniowy</MobileLink>
                <MobileLink href={recruitmentLink} target="_blank">Rekrutacja</MobileLink>
            </BurgerMenu>
        )
    }
    </Media>
    <HeaderLogoContainer>
        <a href="http://pwr.edu.pl/">
            <Media query="(max-width: 900px)">
                {matches => matches ? (
                    <LogoComponent width={300} height={100} />
                ) : (
                    <LogoComponent width={500} height={150} />
                )}
            </Media>
        </a>
    </HeaderLogoContainer>
    <Title>
        Android i iOS - nowoczesne aplikacje mobilne
    </Title>
    <Media query="(min-width: 901px)">
        {matches => matches && (
            <TopMenu>
                <HtmlLink href={programmeDownloadLink} download  target="_blank">Program</HtmlLink>
                <HtmlLink href={formLink} download target="_blank">Formularz Zgłoszeniowy</HtmlLink>
                <HtmlLink href={recruitmentLink} target="_blank">Rekrutacja</HtmlLink>
            </TopMenu>
        )
    }
    </Media>
    <Content>
        {children()}
    </Content>
    <Footer>
        <FooterLogoContainer>
            <Logo />
        </FooterLogoContainer>
        <AddressContainer>
            Wybrzeże Wyspiańskiego 27<br />
            50-370 Wrocław
        </AddressContainer>
    </Footer>
  </PageContainer>
);

