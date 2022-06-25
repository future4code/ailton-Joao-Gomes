import React from "react";
import Logo from "../img/lunartune.png"
import IconMenu from '../img/iconmenu.png'
import IconLogin from '../img/iconlogin.png'
import {Container} from './styled'
import {LogoStyle} from './styled'
import {ContainerMenu} from './styled'




export default class Header extends React.Component {
    render() {
        
        return(
        
            <Container>
                <ContainerMenu>
                    <img src={IconMenu}/><p>Menu</p>
                </ContainerMenu>
                <LogoStyle src={Logo}/>
                <ContainerMenu>
                    <img src={IconLogin}/><p>Login</p>
                </ContainerMenu>
            </Container>
        )
    
    }
}