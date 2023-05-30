//ESTE SERÍA UN HOOK DE AUTENTICACIÓN QUE SIMULA UNA PETICIÓN A UNA API PARA AUTENTICAR UN USUARIO
//EL HOOK DE AUTENTICACIÓN RETORNA UN OBJETO CON EL ESTADO DE LA AUTENTICACIÓN, EL USUARIO, LOS MÉTODOS DE AUTENTICACIÓN Y EL MÉTODO DE CERRAR SESIÓN






//IMPORTAMOS REACT PARA PODER USAR EL HOOK DE ESTADO
import React from "react";

//DATA QUE DEBERÍA VENIR DE UNA API
const users = [
    {name: 'Horus Sinhue', password: '123456', username: 'horus'},
    {name: 'Juan David ', password: '7891011'},
]
export function useAuth(){
    //STATUS ES EL ESTADO DE LA AUTENTICACIÓN / CAMBIA CUANDO SE INTENTA AUTENTICAR
    //SIRVE PARA MANEJAR EL COMPORTAMIENTO DE LA UI
    const [status, setStatus] = React.useState('init');
    //USER ES EL USUARIO QUE SE AUTENTICÓ EN CASO DE QUE EL STATUS SEA SUCCESS
    const [user, setUser] = React.useState(null);

    function login(username, password) {
        //SETEAMOS EL STATUS A LOADING PARA QUE EL USUARIO SEPA QUE ESTAMOS CARGANDO Y MANEJAR EL COMPORTAMIENTO DE LA UI
        setStatus('loading')
        //ESTE SET TIME OUT ESTA ACÁ PARA SIMULAR UNA PETICIÓN A UNA API
        setTimeout(() => {
            //BUSCAMOS EL USUARIO EN EL ARRAY DE USUARIOS
            const user = users.filter(user => user.username === username);
            //SI EL USUARIO EXISTE Y LA CONTRASEÑA ES CORRECTA, SETEAMOS EL STATUS A SUCCESS Y SETEAMOS EL USUARIO Y ACTUALIZAMOS EL ESTADO
            if(!!user.length && user[0].password === password){
                //SETEAMOS EL USUARIO ENCONTRADO EN EL ARRAY DE USUARIOS Y SETEAMOS EL STATUS A SUCCESS
                setUser(user[0])
                setStatus('success');
            } else {
                //SI EL USUARIO NO EXISTE O LA CONTRASEÑA ES INCORRECTA, SETEAMOS EL STATUS A FAILED
                setStatus('failed');
            }
        }, 2000);

    }
    function logOut(){
        //SETEAMOS EL STATUS A LOADING PARA QUE EL USUARIO SEPA QUE ESTAMOS CARGANDO Y MANEJAR EL COMPORTAMIENTO DE LA UI
        setStatus('loading');
        //ESTE SET TIME OUT ESTA ACÁ PARA SIMULAR UNA PETICIÓN A UNA API O ELIMINAR EL TOKEN DE LA API
        setTimeout(() => {
            //SETEAMOS EL USUARIO A NULL Y EL STATUS A INIT
            setUser(null);
            setStatus('init');
        }, 2000)
    }
    return {
        status,
        user,
        login,
        logOut
    }
}