const guestMiddleware = (req, res, next)=>{
    if(req.session.userLogged){
        console.log("Alto ahi crack");
        return res.redirect('/users/profile');

    }
    next();
}

module.exports = guestMiddleware;