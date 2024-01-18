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
  Image
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
        {
          model: Image
        }
      ],
    });
    res.json(productData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    // console.log(req.body)
    const createTour = await Tour.create({
      title: req.body.title,
      host_id: req.session.user_id,
      description: req.body.description,
      text: req.body.text,
      img_src: req.body.imgSrcArr[0]
    });
    req.body.imgSrcArr.forEach(async element => {
      await Image.create({
        img_src: element,
        tour_id: createTour.id
      });
    });
    const createCategory = await TourCategory.create({
      tour_id: createTour.id,
      category_id: req.body.category_id
    });
    // console.log(createTour);
    res.json(createCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
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


// router.post('/cat/', async (req, res) => {
//   try {
//     const creatCategory = await TourCategory.create({
//       ...req.body
//     });
//     res.json(creatCategory);
//   } catch (error) {
//     res.json(error)
//   }

// })

module.exports = router;
