const express = require('express');
const { ComnCdM } = require('../models');
const db = require('../models');
const comnCdM = require('../models/comnCdM');

const router = express.Router();

router.get('/:something/comnfind', async (req, res, next) => {
  // GET /user/followings

  console.log('/comncd 실행 db', db.ComnCdM.findAll());
  try {
    const somethingData = await db[req.params.something].findAll();
    res.status(200).json(somethingData);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post('/:something/comnsave', async (req, res, next) => {
  // GET /user/followings
  const dataList = req.body.data;
  try {
    dataList.map(async (v, i) => {
      switch (v.rowtype) {
        case 'I':
          const create = await db[req.params.something].create(v);
          break;
        case 'U':
          delete v.rowtype;
          const update = await db[req.params.something].update(v, { where: v });
          break;

        default:
          break;
      }
    });
    const somethingData = await db[req.params.something].findAll({ raw: true });
    res.status(200).json(somethingData);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;