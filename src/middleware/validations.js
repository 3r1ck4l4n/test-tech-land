const { check } = require("express-validator");
const path = require("path");
const validations = [
  check("firstName").notEmpty().withMessage("Ingrese su nombre").bail(),
  check("lastName").notEmpty().withMessage("Ingrese su apellido").bail(),
  check("email").notEmpty().bail().isEmail().bail(),
  check("password")
    .notEmpty()
    .bail()
    .isLength({ min: 8 })
    .bail()
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .bail()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .withMessage(
      "La contraseña debe tener al menos una letra, un caracter especial y un alfanumerico"
    )
    .bail(),
  check("password2")
    .notEmpty()
    .bail()
    .custom((value, { req }) => {
      let password = req.body.password;
      if (value !== password) {
        throw new Error("Los password no son iguales");
      }
      return true;
    })
    .bail(),
  check("pais").notEmpty().withMessage("Seleccione una nacionalidad").bail(),
  check("politicy")
    .isIn(["on"])
    .withMessage("Debe aceptar las politicas de operación")
    .bail(),
  check("userImage")
    .custom((value, { req }) => {
      if (!req.file) {
        console.log("this");
        throw new Error("Imagen de perfil no enviada");
      }
      return true;
    })
    .bail()
    .custom((value, { req }) => {
      let extension = path.extname(req.file.filename);
      if (
        extension !== ".jpeg" &&
        extension !== ".jpg" &&
        extension !== ".png"
      ) {
        throw new Error("El archivo no es una imagen png, jpg o jpeg");
      }
      return true;
    }),
];

module.exports = validations;
