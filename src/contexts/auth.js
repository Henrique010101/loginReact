import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    return <AuthContext.Provider>{ children }</AuthContext.Provider>
    const [user, setUser] = useState;

    useEffect (() =>{
        const userToken = localStorage.getItem("user_token");
        const usersStorege = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(userToken)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if (hasUser) sertUser(hasUser[0]);
        }
    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
            const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", Json.stringify({emal, token}));
            setUser({ email, password });
            return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };
}
    return <AuthContext.Provider>{ children }</AuthContext.Provider>
};