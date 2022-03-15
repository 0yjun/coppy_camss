const express = require("express");
const { User } = require('../models');
const router = express.Router();
const bcypt = require('bcrypt');

router.get('/', async (req, res, next) => {
  try {
    res.send('hello');
  } catch (error) {}
});

router.post('/', async (req, res, next) => {
  try {
    console.log('post user 요청');
    const exUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디 입니다.');
    }
    const hashedPassport = await bcypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      password: hashedPassport,
      nickname: req.body.nickname,
      phoneNumber: req.body.phoneNumber,
      userType: req.body.userType,
    });
    res.status(200).send('ok');
  } catch (error) {
    console.error(error);
    next(error); //500
  }
});

module.exports = router;
