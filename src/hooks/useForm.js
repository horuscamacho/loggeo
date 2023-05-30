//ESTE SERÍA UN HOOK DE FORMULARIO QUE MANEJA EL ESTADO DE LOS INPUTS
//EL HOOK DE FORMULARIO RETORNA UN OBJETO CON EL ESTADO DE LOS INPUTS, UN MÉTODO PARA ACTUALIZAR EL ESTADO DE LOS INPUTS Y UN MÉTODO PARA RESETEAR EL ESTADO DE LOS INPUTS




import React from 'react';
export function useForm(initialValues) {
    const [values, setValues] = React.useState(initialValues);

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    function reset() {
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