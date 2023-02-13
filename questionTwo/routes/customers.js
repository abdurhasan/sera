
const express = require('express');
const { Op } = require('sequelize');
const db = require('../models');
const { getUsersInfo } = require('../utils/utils');


const router = express.Router();

// Display details of all users
router.get('/', async (req, res) => {
  let users;

  try {
    users = await db.User.findAll();
    res.status(200).send({
      success: true,
      data: getUsersInfo(users)
    })
  } catch (error) {
    res.status(422).send({
      success: false,
      error: error.message
    })
  }
});


// Create new user
router.post('/upsert', async (req, res) => {
  const { id, name, email, phone } = req.body;

  const errorMsgs = [];
  if (!name) errorMsgs.push({ message: 'Please provie your name' });
  if (!email) errorMsgs.push({ message: 'Please provie your email' });
  if (!phone) errorMsgs.push({ message: 'Please provie your phone number' });

  if (errorMsgs.length > 0) {
    res.status(422).send({
      success: false,
      errorMsgs
    })
  }
  
  if (id) {
    const user = (await db.User.findByPk(id)) 
    
    user.name = name;
    user.email = email;
    user.phone = phone;
    await user.save();

    res.status(200).send({
      success: true,
    })

  } else {
    // Save new user to db
    try {
      await db.User.create({
        name,
        email,
        phone,
      });

      res.status(200).send({
        success: true,
      })


    } catch (error) {

      res.status(422).send({
        success: false,
        error: error.message
      })
    }
  }

});

router.delete('/:userId', async (req, res) => {
  // Retrieve userId from URL
  const { userId } = req.params;
  // Delete user
  await db.User.destroy({ where: { id: userId } });
  res.json({ success: true })
});

module.exports = router;
