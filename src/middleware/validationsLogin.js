const { check } = require("express-validator");

const validationsLogin = [  
  check("email")
    .notEmpty().withMessage("Debes escribir un correo").bail()
    .isEmail().withMessage("Desbes escribir un correo válido").bail(),
  check("password")
    .notEmpty().bail()
    .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres").bail()   
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .withMessage(
      "La contraseña debe tener al menos una letra, un caracter especial y un alfanumerico"
    )
    .bail()  
];

module.exports = validationsLogin;
