const User = require('../model/Users');
function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;

    let myEmailinCookie = req.cookies.myEmail;
    let userFromCookie = User.findByField('email', myEmailinCookie);

    if(userFromCookie){
        delete userFromCookie.password;
        console.log(userFromCookie);
        req.session.userLogged = userFromCookie;
        
    }


    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged =  req.session.userLogged
    } 
    

    next();

};


module.exports = userLoggedMiddleware;