const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.X_API_KEY;

//-------endpoints--------

app.get('/search', async (req, res) => {
  const { searchQuery, page } = req.query;
  // const endpoint = `https://www.bungie.net/Platform/Destiny2/Armory/Search/DestinyInventoryItemDefinition/${searchQuery}/?page=${page}`;
  try {
    const response = await axios.get(`https://www.bungie.net/Platform/Destiny2/Armory/Search/DestinyInventoryItemDefinition/${searchQuery}/?page=${page}`, {
      headers: {
        'X-API-Key': apiKey,
      }
    });
    const results = response.data.Response.results.results;
    const resultWithAdditionalData = await Promise.all(
      results.map(async (result) => {
        const hash = result.hash;
        const additionalDataResponse = await axios.get(
          `https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${hash}`,
          {
            headers: {
              'X-API-Key': apiKey,
            },
          }
        );
        const additionalData = additionalDataResponse.data.Response;
        return { ...result, additionalData };
      })
    );
    res.json({ Response: { results: resultWithAdditionalData } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

//

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));