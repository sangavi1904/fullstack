const db = require('../models/db');

const getData = async (req, res) => {
  try {
    const [result] = await db.pool.query("select * from details"); // Fixed the SQL query
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json("err" + err);
  }
};

module.exports = { getData };
