const express = require('express');
const router = express.Router();

// Load Book model
const Ad = require('../../models/ad');
const Company = require('../../models/company');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));
var dbcourse = [];

router.get('/:search', (req, res) => {
  const searchQuery=req.params.search

  // Ad.find({
    
  //   $or: [
  //       {
  //         primaryText: {$regex: searchQuery, $options: 'i'},
  //       },
  //       {
  //         headline: {$regex: searchQuery, $options: 'i'},
  //       },
  //       {
  //         description: {$regex: searchQuery, $options: 'i'},
  //       },
  //   ]
  
  // })
  //     .then(data => {
  //         console.log("Database Courses:")
  //         console.log(data);
  //         data.map((d, k) => {
  //             dbcourse.push(d.companyId);
  //         })

  //         // database course by filtering students
  //         // whose courseId matches with any id in
  //         // dbcourse array
  //         Company.find({ id: { $in: dbcourse } })
  //             .then(data2 => {
  //                 console.log("Students in Database Courses:")
  //                 console.log(data2);
  //             }).then(
                
  //             )
  //             .catch(error => {
  //                 console.log(error);
  //             })
  //     })
  //     .catch(error => {
  //         console.log(error);
  //     })
  




  Ad.find({
    
        $or: [
            {
              primaryText: {$regex: searchQuery, $options: 'i'},
            },
            {
              headline: {$regex: searchQuery, $options: 'i'},
            },
            {
              description: {$regex: searchQuery, $options: 'i'},
            },
        ]
    
     })
    .then((ad) => res.json(ad))
    .catch((err) => res.status(404).json({ no: req.params.search }));
});


router.post('/', (req, res) => {
  Ad.create(req.body)
    .then((ad) => res.json({ msg: 'Book added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this book' }));
});
router.post('/company', (req, res) => {
  Company.create(req.body)
    .then((company) => res.json({ msg: 'Book added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this book' }));
});



module.exports = router;
