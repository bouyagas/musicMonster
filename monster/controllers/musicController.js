const modelMon = require('../models/musicModel');

const controllerMon = {};

/*middleware to get all records*/
controllerMon.indexAll = (req, res) => {
  modelMon.findAll()
    .then((records) => {
      res.json({
        message: 'ok',
        data: { records },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status('400').json({ message: '400', err });
    });
};

/*store particular record to db*/
controllerMon.create = (req, res) => {
  modelMon.createRecord({
      id: req.body.id,
      artist: req.body.song,
      image: req.body.artist_id,
      song: req.body.song,
    })
    .then((record) => {
      console.log('OK...Creating record', record);
    })
    .catch((err) => {
      console.log(err);
      res.status('400').json({ message: '400. Something goes wrong' });
    });
};
/*update particular record*/
controllerMon.update = (req, res) => {
  modelMon.update(req.body)
    .then((record) => {
      res.json({message: `records ${record.comments} updated`});
      res.redirect('/results');
    }).catch((err) => {
        console.log(err);
        res.status(401).json({message: 'something went wrong'});
    });
};

  /*delete records*/
  controllerMon.destroy = (req, res, next) => {
    modelMon
      .delete(res.params.id)
      .then(() => {
        next();
      })
      .catch((err) => {
        console.log(err);
      });
  };

module.exports = controllerMon;
