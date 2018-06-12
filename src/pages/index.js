import React from "react"
import styled from 'styled-components';
import {Map} from '../utils/Map';

const TextContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;


    @media (max-width: 900px) {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;
    }
`

const Header = styled.h3`
    font-size: 21px;
    font-weight: 400;
    line-height: 36px;
`;

const Paragraph = styled.p`
    font-size: 15px;
    line-height: 25px;
`;

const MapContainer = styled.div`
`;

const Column = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const Container = styled.div`
    margin-left: 12%;
    margin-right: 12%;

    @media (max-width: 900px) {
        margin-left: 5%;
        margin-right: 5%;
    }
`;

export default () => (
    <Container>
        <TextContainer>
            <Column>
                <Header>Organizatorzy</Header>
                <Paragraph>Wydział Informatyki i Zarządzania oraz Centrum Kształcenia Ustawicznego</Paragraph>

                <Header>Cel studiów</Header>
                <Paragraph>
                Celem studiów jest przekazanie wiedzy oraz praktycznych umiejętności tworzenia aplikacji mobilnych działających na dwóch najbardziej popularnych platformach – Android i iOS. W trakcie studiów zaprezentowane zostaną zasady projektowania aplikacji mobilnych oraz programowania tych aplikacji w Javie (Android) oraz w języku Swift (iOS). Przedstawiona zostanie również alternatywna metoda konstruowania aplikacji mobilnych za pomocą środowisk programistycznych (frameworków). Uczestnikom studiów dostarczona zostanie również wiedza i umiejętności konstruowania mobilnych, responsywnych witryn internetowych.<br />
                Aplikacje studenckie będą uruchamiane i testowane na udostępnianych indywidualnie każdemu studentowi smartfonach: Galaxy S6 Edge oraz iPhone 5.<br />
                Absolwent studiów posiada aktualną wiedzę o zasadach projektowania interfejsów,  językach i środowiskach programowania oraz metodach testowania aplikacji mobilnych funkcjonujących na platformach Android i iOS. Wiedzę tę uzyskuje w trakcie 136 godzin wykładów prowadzonych przez doświadczonych specjalistów. Uzupełnić i poszerzyć tę wiedzę o umiejętności praktyczne pozwalają zajęcia laboratoryjne i projektowe w wymiarze 136 godzin. W trakcie tych zajęć absolwent studiów podyplomowych nabywa umiejętność posługiwania się zintegrowanymi środowiskami programistycznymi (Android Studio, Xcode) oraz poznaje w praktyce zasady projektowania i programowania responsywnych aplikacji mobilnych oraz ich uruchamiania i testowania na indywidualnych stanowiskach laboratoryjnych. Dodatkowo przekazywane są praktyczne informacje o zasadach umieszczania aplikacji mobilnych w przestrzeni publicznej oraz podstawach działań marketingowych.<br />
                </Paragraph>
                
                <Header>Adresaci</Header>
                <Paragraph>Preferowane są osoby z wykształceniem informatycznym, technicznym i ekonomicznym.</Paragraph>

                <Header>Warunki rekrutacji</Header><Paragraph>O przyjęciu decyduje kolejność zgłoszeń. W przypadku większej liczby kandydatów niż miejsc o przyjęciu decyduje komisja rekrutacyjna na podstawie informacji o wykształceniu kierunkowym oraz doświadczeniu zawodowym kandydatów.</Paragraph>

                <Header>Warunek przyjęcia</Header><Paragraph>na studia podyplomowe przyjmowane są osoby legitymujące się dyplomem ukończenia studiów magisterskich (studiów jednolitych magisterskich lub studiów drugiego stopnia) lub studiów pierwszego stopnia (licencjackich albo inżynierskich).</Paragraph>
                
            </Column>
            
            <Column>
                <Header>Kierownik studiów</Header>
                <Paragraph>doc. dr inż. Krzysztof Waśko, e-mail: krzysztof.wasko@pwr.edu.pl</Paragraph>

                <Header>Czas trwania</Header>
                <Paragraph>Zajęcia trwają 2 semestry (272 godzin zajęć + 30 godzin praca końcowa) i odbywają się systemem zaocznym (zjazdy w soboty i w niedziele, 8 zjazdów w semestrze, zazwyczaj 2 razy w miesiącu).</Paragraph>

                <Header>Warunki ukończenia studiów</Header>
                <Paragraph>Warunkiem ukończenia studiów jest uczestnictwo w zajęciach, zaliczenie wszystkich kursów z programu studiów oraz obrona pracy końcowej.</Paragraph>

                <Header>Wykładowcy</Header>
                <Paragraph>Zajęcia prowadzą doświadczeni pracownicy Politechniki Wrocławskiej oraz specjaliści w danej dziedzinie.</Paragraph>

                <Header>Miejsce</Header>
                <Paragraph>Zajęcia odbywać się będą w salach wykładowych Politechniki Wrocławskiej.</Paragraph>

                <Header>Limit miejsc: 32</Header>

                <Header>Cena: 2 x 3250 zł = 6500 zł</Header>
                <Paragraph>Opłatę za studia podyplomowe wnosi się w dwóch ratach przed dniem rozpoczęcia każdego semestru.</Paragraph>

                <Header>Kontakt</Header>
                <Paragraph>
                    Anna Nowak<br />
                    anna.e.nowak@pwr.edu.pl<br />
                    tel. 71 340 75 17<br />
                </Paragraph>
            </Column>
            </TextContainer>

            <MapContainer>
                <Map />
            </MapContainer>
        </Container>
);
