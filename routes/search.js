const express = require('express');
const router = express.Router();
const search_access = require('../data_access/search_access');
const { getRadius } = require('../utils/locationInfo');

// @route   POST api/search
// @desc    Logs all user searches into database
// Public
router.post('/', async (req, res) => {
  const { keywordField, locationField } = req.body;
  try {
    await search_access.insertSearch(keywordField, locationField);
    res.status(200);
    res.json({ keywordField, locationField });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// @route   GET api/search
// @desc    Retreives results from the database based on the corresponding user search
// Public
router.get('/', async (req, res) => {
  const { keyword, location } = req.query;
  if (!keyword || !location) {
    res.send('Please enter all search terms.');
    return;
  }
  const radiusQuery = await getRadius(location, 50);
  try {
    const results = await search_access.getSearchResults(keyword, radiusQuery);
    res.send(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
