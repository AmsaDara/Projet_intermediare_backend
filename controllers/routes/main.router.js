const express=require('express');
const route=express.Router();
const articleServices= require('../../services/articles.service');
const userCtrl = require('../../services/user.service.js');

// route.get('/',async (req,res)=>{
//     let articles=await articleServices.getAllArticles();
//     res.json('accueil', {articles});
// })

// CHEMIN D'AUTHENTIFICATION
route.get('/signup',(req, res, next)=>{
    res.json('Connexion Réussie');
    next;
})
route.post('/signup',userCtrl.signup);

// CHEMIN DE CONNEXION
route.get('/login',(req,res,next)=>{
    res.json('Merci de se connecter');
})
route.post('/login',userCtrl.login);
route.get('/login',(req,res,next)=>{
    res.json('');
})

//CHEMIN POUR LES SERVICE ARTICLE
route.get('/article',async (req,res)=>{
    let articles=await articleServices.getAllArticles();
    res.json({articles});
})
route.post('/article', articleServices.saveArticle);

// //A PROPOS
// route.get('/apropos',(req,res)=>{
//     res.json('pages/apropos');
// })
// //CONTACT
// route.get('/contact',async (req,res)=>{
//     res.json('pages/contact');
// });

module.exports=route;
