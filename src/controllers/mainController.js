
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const carFilePath = path.join(__dirname, "../data/carShop.json");
const mainController = {
    leerData: () => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		return products;
	},
    home: (req, res)=>{
        let products = mainController.leerData();
        const destacados = products.filter(product => (product.type == 'Destacados'));
        const enOferta = products.filter(product => (product.type == "En oferta"));
        res.render('home', {destacados,enOferta});
    },
    login: (req, res)=>{
        res.render('login');
    },
    register: (req, res)=>{
        res.render('register');
    },
    productCart: (req, res)=>{
        let id_user = req.session.userLogged.id;
        const newCarShop = JSON.parse(fs.readFileSync(carFilePath, "utf-8"));
        let responseCar = [];
        newCarShop.forEach((item)=> {
            if(item.id_user == id_user){
                responseCar.push(item)
            }});
        res.render(path.join(__dirname, "../views/products/productCart"), {responseCar});
    },
}

module.exports=mainController;