import React from "react";
import { ButtonLoginEnter, LoginInput, LoginInfoContainer, LoginPopUp, Container, ContainerButtonLogin, ContainerLogo, ContainerMenu, LogoStyle, ContainerOptions, ButtonLogin, IconLoginStyle } from "./styled";
import Logo from '../img/labexlogo.png';
import LoginIcon from '../img/loginicon.png';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



export default function Header(props) {

    const [loginOpen, setLoginOpen] = useState(false)
    const [emailUser, setEmailUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")
    
    

    const navigate = useNavigate()
  
    const goTo = (page) => {
        navigate(`${page}`)
    }

    const openLoginPopUp = () =>{
        
        setLoginOpen(!loginOpen)
        
    }

    const goToAdminArea = () => {
        const token = localStorage.getItem("token")
        if (token === ""){
        window.alert("Você precisa fazer login primeiro.")
        }else{
        navigate("admin/trips/homepage")
        }
    }
    
    // useEffect(() => {
    //     window.localStorage.setItem("notLoged", true)
    // }, []) 
    
    

    const onChangeEmail = (e) => {
        setEmailUser(e.target.value)
    }

    const onChangePassword = (e) => {
        setPasswordUser(e.target.value)
    }

    
    const loginTry = async() => {
         
        if (props.notLoged === true){
        try {
            const body = {
                email: emailUser,
                password: passwordUser
            }
            const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/login", body)
            window.localStorage.setItem("token", response.data.token)
            window.localStorage.setItem("email", emailUser)
            window.localStorage.setItem("password", passwordUser)
            setEmailUser("")
            setPasswordUser("")
            props.setNotLogedToReverse()
            window.alert("Login realizado com sucesso, seja bem vindo.")
            goTo("admin/trips/homepage")
        } catch (error){
            window.alert("Usuário não encontrado.")
            setEmailUser("")
            setPasswordUser("")
            
        }
    } else {
        window.alert("Você já está logado, caso queira entrar em outra conta, faça Logout primeiro.")
        setEmailUser("")
        setPasswordUser("")
    }
    }

    const logout = async() => {
        try {
            const body = {
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password")
            }
            const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/login", body)
            window.localStorage.setItem("email", "")
            window.localStorage.setItem("password", "")
            window.localStorage.setItem("token", "")
            props.setNotLogedToReverse()
            window.alert("Você deslogou.")
            goTo("/")
        } catch (error){
            window.alert("Você não está logado.")
            
        }
    }
    
        
    
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
                <ContainerOptions onClick={goToAdminArea}><p>Área Admin</p></ContainerOptions>

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