import React from 'react';
import {WrapperComponent} from "../ui";
import {LogoServitec} from "../../../images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {mediaQuery} from "../../../styles/constants/mediaQuery";

export const Header = ({isMobile,onSetVisibleDrawer,onNavigate}) => {
    return (
        <HeaderContainer>
            <WrapperComponent>
                <>
                    {isMobile ? (
                        <MenuMobile>
                            <div className="item-logo">
                                <img
                                    src={LogoServitec}
                                    alt="Logo Servitec"
                                    onClick={() => onNavigate("/")}
                                />
                            </div>
                            <div
                                className="bar-item"
                                onClick={() => onSetVisibleDrawer(true)}
                            >
                                <FontAwesomeIcon icon={faBars} size="2x"/>
                            </div>
                        </MenuMobile>
                    ) : (
                        <MenuDesktop>
                            <div className="logo-img">
                                <Link to="/">
                                    <img src={LogoServitec} alt="Logo Servitec"/>
                                </Link>
                            </div>
                            <nav className="menu-list">
                                <ul>
                                    <a href="#home">
                                        <li>INICIO</li>
                                    </a>
                                    <a href="#about-us">
                                        <li>NOSOTROS</li>
                                    </a>
                                    <a href="#plans">
                                        <li>PLANES</li>
                                    </a>
                                    <a href="#contact">
                                        <li className="btn-primary">CONTACTO</li>
                                    </a>
                                </ul>
                            </nav>
                        </MenuDesktop>
                    )}
                </>
            </WrapperComponent>
        </HeaderContainer>

    );
};

const HeaderContainer = styled.div`
  background: #000;
  padding: 1em 2em;
`;

const MenuDesktop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 7em 1fr;
  
  .logo-img{
    img{
      width: 10em;
      object-fit: contain;
      margin: auto;
    }
  }
  .menu-list{
    display: flex;
    justify-content: end;
    align-items: center;
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 1em;
      li{
        font-size: .8em;
        color: #fff;
      }
      .btn-primary{
        background: ${({theme})=> theme.colors.primary};
        padding: .3em .5em;
        border-radius: .4em;
        color: ${({theme})=> theme.colors.black};;
      }
    }
  }
`;

const MenuMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .item-logo{
    img{
      width: 7em;
    }
  }
  .bar-item{
    color:#fff;
    display: flex;
    justify-content: end;
  }
`;