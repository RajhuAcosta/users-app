const EMAIL_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 35,
    message: "Este campo acepta 35 carácteres como máximo",
  },
  minLength: {
    value: 4,
    message: "Este campo acepta 4 carácteres como minimo",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Ingrese un correo válido",
  },
};

const PASSWORD_VALIDATIONS = {
    required: {
        value: true,
        message: "Este campo es requerido",
      },
    pattern: {
      value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+/,
      message: "La contraseña debe contar con al menos una mayúscula, una minúscula, un número y un carácter especial",
    },
};

const FIRSTNAME_VALIDATIONS = {
  required: {
    value: true,
    message: "Este campo es requerido",
  },
  maxLength: {
    value: 25,
    message: "Este campo acepta 25 carácteres como máximo",
  },
  minLength: {
    value: 2,
    message: "Este campo acepta 2 carácteres como minimo",
  },
  pattern: {
    value:
    /^[a-zA-ZáéíóúÁÉÍÓÚ]+([a-zA-ZáéíóúÁÉÍÓÚ\s]+|[a-zA-ZáéíóúÁÉÍÓÚ]{3,})$/,
    message: "Ingrese un nombre válido",
  },
};

const LASTNAME_VALIDATIONS = {
    required: {
      value: true,
      message: "Este campo es requerido",
    },
    maxLength: {
      value: 25,
      message: "Este campo acepta 25 carácteres como máximo",
    },
    minLength: {
      value: 2,
      message: "Este campo acepta 2 carácteres como minimo",
    },
    pattern: {
      value:
      /^[a-zA-ZáéíóúÁÉÍÓÚ]+([a-zA-ZáéíóúÁÉÍÓÚ\s]+|[a-zA-ZáéíóúÁÉÍÓÚ]{3,})$/,
      message: "Ingrese un apellido válido",
    },
};
  
export {FIRSTNAME_VALIDATIONS,LASTNAME_VALIDATIONS,EMAIL_VALIDATIONS,PASSWORD_VALIDATIONS};