import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./style";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { Signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== senha){
        setError("Os e-mails não são iguais");
        return;
        }

    const res = Signup(email, senha);

        if (res) {
        setError(res);
        return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
};

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
            <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
            <Input
            type ="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
            <C.labelError>{error}</C.labelError>
            <Button Text="Increver-se" onClick={handleSignup} />
            <C.LabelSignin>
                Já tem uma conta?
                <C.Strong>
                    <Link to="/">$nbsp;Entre</Link>
                </C.Strong>
            </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
};
export default Signup;