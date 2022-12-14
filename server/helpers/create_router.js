const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
  const router = express.Router();
  router.get('/', (req, res)=> {
    collection
      .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err)=> {
          console.error(err);
          res.status(500)
          res.json({status: 500, error: err})
          
        })
  });

  router.get('/:id', (req, res)=>{
    const id = req.params.id
    collection
      .findOne({_id: ObjectId(id)})
      .then((doc)=>res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status:500, error: err});
      });

  });

  router.post('/', (req, res) => {
    const newGame = req.body
    collection
      .insertOne(newGame)
      .then((result)=> {
        res.json(result.ops[0])
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error:err })
      });

  })

  router.delete('/:id/delete', (req, res) => {
    const id = req.params.id
    collection
      .deleteOne({_id: ObjectId(id)})
      .then((doc)=>res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status:500, error: err});
      });
      
  })

  router.put('/:id/edit', (req, res) => {
    const id = req.params.id
    const updateData = req.body

    collection
      .updateOne({ _id: ObjectId(id) }, { $set: updateData })
      .then((result)=>res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status:500, error: err});
      });
  })

  

  return router;

};

module.exports = createRouter;