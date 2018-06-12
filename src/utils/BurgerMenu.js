import React from 'react';
import Drawer from 'material-ui/Drawer';
import styled from 'styled-components';
import {MobileLink} from './MobileLink';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons//navigation/close';
import IconButton from 'material-ui/IconButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #b32216;
    height: 100%;
    > * {
        margin: 30px 10px 10px 10px;
    }
`;

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 20px;
`;

export class BurgerMenu extends React.Component {

    state = {open: false};

    toggleDrawer = () => this.setState(prevState => ({open: !prevState.open}));

    render () {
        return (
            <MuiThemeProvider>
            <div>
                <IconButton iconStyle={{width: 40, height: 40}} onClick={this.toggleDrawer}>
                    <MenuIcon>Klik!</MenuIcon>
                </IconButton>
                <Drawer open={this.state.open} onRequestChange={this.toggleDrawer} style={{width: '60%'}} docked={false}>
                    <Container>
                        <CloseContainer>
                            <IconButton style={{float: 'left'}} iconStyle={{fill: 'white', width: 40, height: 40}} onClick={this.toggleDrawer}>
                                <CloseIcon />
                            </IconButton>
                        </CloseContainer>
                        {this.props.children}
                    </Container>
                </Drawer>
            </div>
            </MuiThemeProvider>
        );
    }
}