import React, {useState} from "react";
import styled from "styled-components";
import {useDevice} from "../../../hooks";
import {Drawer} from "./Drawer";
import {ButtonsFloating} from "../ui";
import {useNavigate} from "react-router";
import {Header} from "./Header";
import {FooterNew} from "./FooterNew";

export const BaseLayout = ({children}) => {
    const {isMobile} = useDevice();
    const navigate = useNavigate();

    const [visibleDrawer, setVisibleDrawer] = useState(false);

    return (
        <Container>
            <Drawer
                visibleDrawer={visibleDrawer}
                onSetVisibleDrawer={setVisibleDrawer}
            />
            <Header isMobile={isMobile} onSetVisibleDrawer={setVisibleDrawer} onNavigate={navigate}/>
            <main className="body">{children}</main>
            <FooterNew/>
            <ButtonsFloating/>
        </Container>
    );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
`;
