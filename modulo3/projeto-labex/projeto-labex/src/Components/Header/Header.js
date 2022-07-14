import React from "react";
import { ButtonLoginEnter, LoginInput, LoginInfoContainer, LoginPopUp, Container, ContainerButtonLogin, ContainerLogo, ContainerMenu, LogoStyle, ContainerOptions, ButtonLogin, IconLoginStyle } from "./styled";
import Logo from '../img/labexlogo.png';
import LoginIcon from '../img/loginicon.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



export default function Header() {

    const [loginOpen, setLoginOpen] = useState(false)
    const [emailUser, setEmailUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")
    const [savePassword, setSavePassword] = useState("")
    const [saveEmail, setSaveEmail] = useState("")
    const [loged, setLoged] = useState(true)

    const navigate = useNavigate()
  
    const goTo = (page) => {
        navigate(`${page}`)
    }

    const openLoginPopUp = () =>{
        
        setLoginOpen(!loginOpen)
        
    }

    const adminAreaAdvice = () => {
        window.alert("Você precisa fazer login primeiro.")
    }

    const onChangeEmail = (e) => {
        setEmailUser(e.target.value)
    }

    const onChangePassword = (e) => {
        setPasswordUser(e.target.value)
    }
    
    const loginTry = async() => {
        if (loged){
        try {
            const body = {
                email: emailUser,
                password: passwordUser
            }
            const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/login", body)
            window.localStorage.setItem("token", response.data.token)
            setSaveEmail(emailUser)
            setSavePassword(passwordUser)
            setEmailUser("")
            setPasswordUser("")
            setLoged(!loged)
            // setLoginOpen(!loginOpen)
            window.alert("Login realizado com sucesso, seja bem vindo.")
        } catch (error){
            window.alert("Usuário não encontrado.")
            setEmailUser("")
            setPasswordUser("")
        }
    } else {
        window.alert("Você já está logado, caso queira entrar em outra conta, faça Logout primeiro.")
    }
    }

    const logout = async() => {
        try {
            const body = {
                email: saveEmail,
                password: savePassword
            }
            const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/login", body)
            setSaveEmail("")
            setSavePassword("")
            window.localStorage.setItem("token", "")
            setLoged(!loged)
            window.alert("Você deslogou.")

        } catch (error){
            window.alert("Você não está logado.")
        }
    }
    // console.log(tokenUser)
    
      return (
        <Container>
            
            <ContainerLogo>
                <LogoStyle src={Logo} />
            </ContainerLogo>
            
            <ContainerMenu>

                <ContainerOptions onClick={()=>goTo("/")}><p>Home</p></ContainerOptions>
                <ContainerOptions onClick={()=>goTo("trips/list")}><p>Viagens</p></ContainerOptions>
                <ContainerOptions><p>Sobre Nós</p></ContainerOptions>
                <ContainerOptions><p>Contato</p></ContainerOptions>
                <ContainerOptions onClick={adminAreaAdvice}><p>Área Admin</p></ContainerOptions>

            </ContainerMenu>

            <ContainerButtonLogin>

                <ButtonLogin onClick={openLoginPopUp}>
                    <p>LOGIN</p>
                    <IconLoginStyle src={LoginIcon}/>
                </ButtonLogin>

            </ContainerButtonLogin>
            {loginOpen && 
            <LoginPopUp>
                <LoginInfoContainer>
                    <LoginInput onChange={onChangeEmail} value={emailUser} placeholder="Email"></LoginInput>
                    <LoginInput onChange={onChangePassword} value={passwordUser} placeholder="Senha"></LoginInput>
                </LoginInfoContainer>
                
                <ButtonLoginEnter onClick={loginTry}>Entrar</ButtonLoginEnter>
                <ButtonLoginEnter onClick={logout}>Logout</ButtonLoginEnter>
            </LoginPopUp>}

        </Container>
      );
    }