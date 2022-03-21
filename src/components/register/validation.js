const validation = (values) => {
    
    let errors={};

    if(!values.name){
        errors.name="Necesitás ingresar un nombre."
    }
    if(!values.lasName){
        errors.lastName="Necesitás ingresar tu apellido."
    }
    if(!values.email){
        errors.email="Por favor, ingresá un email."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="El email es inválido."
    }
    if(!values.password){
        errors.password="Por favor, ingresá una contraseña."
    } else if(values.password.length < 6){
        errors.password="La contraseña debe tener al menos 6 caracteres."
    }
    return errors;
};

export default validation;