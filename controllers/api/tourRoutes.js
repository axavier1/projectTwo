const router = require("express").Router();
const {
  User,
  Tour,
  TourComment,
  Memos,
  MemosComment,
  TourCategory,
  TourMembers,
  Category,
} = require("../../models");
const isLoged = require("../../utils/isLogged");

router.get("/", async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Tour.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          through: { attributes: [] },
        },
        {
          model: Category,
          through: { attributes: [] },
        },
      ],
    });
    res.json(productData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createTour = await Tour.create({...req.body, host_id:req.session.user_id});
    console.log(createTour);

    res.json(createTour);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', isLoged, async (req, res) => {
    try {
      const TourData = await Tour.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!TourData) {
        res.status(404).json({ message: 'No Tour found with this id!' });
        return;
      }
  
      res.status(200).json(TourData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
