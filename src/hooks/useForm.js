//ESTE SERÍA UN HOOK DE FORMULARIO QUE MANEJA EL ESTADO DE LOS INPUTS
//EL HOOK DE FORMULARIO RETORNA UN OBJETO CON EL ESTADO DE LOS INPUTS, UN MÉTODO PARA ACTUALIZAR EL ESTADO DE LOS INPUTS Y UN MÉTODO PARA RESETEAR EL ESTADO DE LOS INPUTS




import React from 'react';
export function useForm(initialValues) {
    // SETEAMOS EL ESTADO DE LOS INPUTS CON EL HOOK USESTATE /POR DEFECTO VA A TRAER UN OBJETO CON LOS VALORES INICIALES DE LOS INPUTS PARA PODER SETEARLOS Y ASOCIARLOS A LOS INPUTS
    const [values, setValues] = React.useState(initialValues);

    // HANDLECHANGE ES UN MÉTODO QUE ACTUALIZA EL ESTADO DE LOS INPUTS
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    // RESET ES UN MÉTODO QUE RESETEA EL ESTADO DE LOS INPUTS PARA BORRAR LOS VALORES DE LOS INPUTS UNA VEZ QUE SE HAYA ENVIADO EL FORMULARIO
    function reset() {
        // ESTE SETTIMEOUT ES PARA SIMULAR UNA PETICIÓN ASÍNCRONA QUE TARDARÍA 2 SEGUNDOS EN EJECUTARSE PARA EMPATARLO CON EL TIEMPO QUE TARDA LA SIMULACIÓN QUE HICE EN EL HOOK DE AUTENTICACIÓN
        setTimeout(() => {
            setValues(initialValues);
        }, 2000)
    }
    return {
        values,
        handleChange,
        reset
    }
}