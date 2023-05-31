import React from "react";
import './App.css';
import {useForm} from './hooks/useForm';
import {useAuth} from './hooks/useAuth';



function App() {
  // SETEAMOS EL VALOR DE LOS INPUTS CON EL HOOK USEFORM QUE CREAMOS (DESESTRUCTURAMOS EL OBJETO QUE RETORNA NUESTRO HOOK) Y LE PASAMOS LOS VALORES INICIALES DE LOS INPUTS
  const {values, handleChange, reset} = useForm({username: '', password: ''});
  // DESESTRUCTURAMOS EL OBJETO QUE RETORNA NUESTRO HOOK DE AUTENTICACIÓN QUE TRAE LOS MÉTODOS Y EL ESTADO DE LA AUTENTICACIÓN
  const { status, user, login, logOut } = useAuth();


  return (
      <div
          // AQUÍ JUGAMOS CON EL COLOR DE FONDO DE PANTALLA DEPENDIENDO DEL ESTADO DE LA AUTENTICACIÓN (INIT, LOADING, SUCCESS, FAILED) DEL HOOK DE AUTENTICACIÓN
          className={status === 'failed' ?
              'App error' : status === 'success' ?
                  'App success' : status === 'loading' ?
                      'App loading' : 'App'}
      >
        <p>Username:</p>
        <input
            //LE DIMOS UN NAME A LOS INPUTS PARA QUE SE PUEDAN ASOCIAR AL ESTADO DEL HOOK, TIENE QUE SER EL MISMO NOMBRE QUE EL KEY DEL ESTADO DEL HOOK DONDE LO INICIALIZAMOS
            name='username'
            onChange={(e) => handleChange(e)}

            //Aquí se le pasa el valor del input // que está asociado al estado del hook por medio del name del input

            value={values.username}
        />
        <p>Password:</p>
        <input

            name='password'
            type='password'
            onChange={(e) => handleChange(e)}

            //Aquí se le pasa el valor del input // que está asociado al estado del hook por medio del name del input

            value={values.password}
        />

        {//AQUÍ JUGAMOS CON EL TEXTO DEL BOTÓN DEPENDIENDO DEL ESTADO DE LA AUTENTICACIÓN (INIT, LOADING, SUCCESS, FAILED) DEL HOOK DE AUTENTICACIÓN
          user ?
            <button type='button' onClick={() => logOut()}>Log Out</button> :
            <button type='button' onClick={() => {
              login(values.username, values.password)
              reset()
            }}>Login</button>}

        {/*AQUÍ JUGAMOS CON EL COMPORTAMIENTO DE LA UI DEPENDIENDO DEL ESTADO DE LA AUTENTICACIÓN (INIT, LOADING, SUCCESS, FAILED) DEL HOOK DE AUTENTICACIÓN*/}
        {status === 'loading' && <h1>Loading...</h1>}
        {status === 'failed' && <h1>Username or password incorrect</h1>}
        {status === 'success' && <h1>Welcome {user?.name}</h1>}
      </div>
  );
}

export default App;
