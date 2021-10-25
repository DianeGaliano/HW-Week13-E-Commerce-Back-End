const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findAll({
      include: [{ model: Product }, { model: ProductTag}],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }, { model: ProductTag}],
    });

    if (!productData) {
      res.status(404).json({ message: "No product with this id!"})
      return;
    }

    res.status(200).json(productData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const productData = await Tag.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value


});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const productData = await Tag.destroy({
      where: {id: req.params.id }
    });
    if (!productData) {
      res.status(404).json({ message: "No tag with this id!"});
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
