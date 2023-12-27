import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/styles";
import useAuth from "../../hooks/useAuth";
import * as C from "./style"

const Home = () => {
        const { signout } = useAuth();
        const navigate = useNavigate();

        return (
        <C.Container>
            <C.Title>Home</C.Title>
            <Button text ="Sair" onClick={() => [signout(), navigate("/")]}>
                Sair
            </Button>

        </C.Container>
    );
};
export default Home;