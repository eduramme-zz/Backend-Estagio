var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var URLs = mongoose.model('URLs');
var hashCode = require('../public/js/hashCode.js');


// /urls/:id
exports.redirectUrl = (req,res,next) => {
  URLs.findById({_id: req.params.id}, 'url').then(data =>{
    res.redirect(301, 'http://'+ data.url);
  }).catch(error =>{
    res.status(404).send('404 not found');
  });
};

// /users/:userid/urls
exports.addURL = (req, res, next) => {
  var urls = new URLs();
  urls.url = req.body.url;
  urls.userId = req.params.userid;
  urls.shortUrl = hashCode(urls.url);
  urls.hits = 0;
  urls.save().then(x =>{
    res.status(201).send(
      urls
    );
  }).catch(error =>{
    res.status(409).send(error);
  });
}

// /stats
exports.status = (req, res, next) => {
  URLs.find().then(data =>{
    var sumHits = data.reduce(sum, 0)
    // total hits
    function sum(a,b){
      return a + b.hits;
    }
    // total urls
    var sumUrls = data.length;

    // top 10 hits
    var top = data.sort(function(a, b) {
      return (b.hits) - (a.hits);
    });

    top = top.slice(0, 10);
    for (var i = 0; i<top.length; i++){
      top[i].shortUrl = "http://localhost:3000/" + top[i].shortUrl
    }

    res.status(200).send({
      Hits: sumHits,
      urlCount: sumUrls,
      topUrls: top
    });
  })
}

// /users/:userId/stats
exports.userStats = (req,res,next) =>{
  URLs.find({userId: req.params.userId}).then(data =>{
    var sumHits = data.reduce(sum, 0)

    // total hits
    function sum(a,b){
      return a + b.hits;
    }

    // total urls
    var sumUrls = data.length;

    // top 10 hits
    var top = data.sort(function(a, b) {
      return (b.hits) - (a.hits);
    });

    var top = top.slice(0, 10);

    for (var i = 0; i<top.length; i++){
      top[i].shortUrl = "http://localhost:3000/" + top[i].shortUrl
    }

      res.status(200).send({
        // user: id,
        Hits: sumHits,
        urlCount: sumUrls,
        topUrls: top,
      })

  }).catch(error =>{
    res.status(404).send(error);
  })
}

// /stats/:id
exports.statsId =(req, res, next) => {
  URLs.findById({_id: req.params.id}).then(data=>{
    res.status(200).send({

      id: data.id,
      hits: data.hits,
      url: data.url,
      shortUrl: data.shortUrl

    });
  }).catch(error =>{
    res.status(404).send("404 not found");
  })
}

// /urls/:id
exports.deleteUrl = (req, res, next) => {
  URLs.findByIdAndRemove({_id: req.params.id}).then(data =>{
    res.status(200).send();
  });
}

// /users
exports.addUser = (req,res,next) => {
  var usuario = new Users();
  usuario.userId = req.body.id;
  usuario.id = req.body.id;
  usuario.save().then(x =>{
    res.status(201).send(
      {
        id: usuario.id
      }
    );
  }).catch(error =>{
    res.status(409).send();
  });
};

// /user/:userId
exports.deleteUser = (req,res,next) => {
  Users.findOneAndRemove({
      userId: req.params.userId
    }, error => {
    if(error){
      res.status(500).send(error);
    }else{
      res.status(204).send('Usuario deletado com sucesso');
    };
  });
};

// /
exports.get = (req, res, next) => {
  res.render('index');
}



// ABAIXO ESTÃO AS FUNÇÕES RELACIONADAS À INTERATIVIDADE DO SITE

// Retorna todos os urls cadastrados no sistema junto com suas informações
// router.get('/urls', controller.allUrls);
exports.allUrls = (req, res, next) => {
  URLs.find().then(data =>{

    // ordena os urls em ordem crescente
    var urls = data.sort(function(a, b) {
      return (b.hits) - (a.hits);
    });

    // adiciona o shortUrl
    for (var i = 0; i<urls.length; i++){
      urls[i].shortUrl = "http://localhost:3000/" + urls[i].shortUrl
    }

    res.status(200).send({
      top_5: urls
    });
  })
};

// Adiciona 1 nos hits toda vez que o link encurtado é acessado
// router.get('/:shortUrl', controller.shortUrlRedirect);
exports.shortUrlRedirect = (req,res,next) => {
  URLs.findOne({shortUrl: req.params.shortUrl}).then(data =>{
    data.set({ hits: data.hits + 1 });

    data.save(function (updatedData) {
      res.send(updatedData);
    });

    res.redirect(301, 'http://'+ data.url);
  }).catch(e =>{
    res.status(404).send(error);
  });
};
