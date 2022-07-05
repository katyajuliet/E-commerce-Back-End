const router = require("express").Router();
const {Tag, Product, ProductTag } = require("../../models");


router.get('/', (req, res) => {
	Tag.findAll({
	  attributes: ['id', 'tag_name'],
	  include: {  
		model: Product,
		as: 'products'
	  }
	})
	.then(dbTagData => res.json(dbTagData))
	.catch(err => {
	  console.log(err);
	  res.status(500).json(err);
	})
  });
  
  router.get('/:id', (req, res) => {
	Tag.findOne({
	  where: {
		id: req.params.id
	  },
	  include: {
		model: Product,
		as: 'products'
	  }
	})
	.then(dbTagData => {
	  if(!dbTagData) {
		res.json({ message: "No tag found with this id" })
		return;
	  }
	  res.json(dbTagData)
	})
	.catch(err => {
	  console.log(err);
	  res.status(500).json(err);
	})
  });
  
  router.post('/', (req, res) => {
	Tag.create({
	  tag_name: req.body.tag_name
	})
	.then(dbResData => res.json(dbResData))
	.catch(err => {
	  console.log(err);
	  res.status(500).json(err);
	})
  });
  
  router.put('/:id', (req, res) => {
	Tag.update(
	  {
		tag_name: req.body.tag_name
	  },
	  { 
		where: {
		  id: req.params.id
		}
	  })
	.then(dbUpdatedData => res.json(dbUpdatedData))
	.catch(err => {
	  console.log(err);
	  res.status(500).json(err);
	})
  });
  
  router.delete('/:id', (req, res) => {
	Tag.destroy({
	  where: {
		id: req.params.id
	  }
	})
	.then(dbResData => {
	  if (!dbResData) {
		res.json({ message: 'No tag with this id' });
		return; 
	  }
	  res.json({message: 'Successfully deleted'})
	})
	.catch(err => {
	  console.log(err);
	  res.status(500).json(err);
	})
  });
  
  module.exports = router;