const axios = require('axios');

const API_KEY = 'af41b9f1f418fec7d6ebba3f2603c908'; //TODO: move to config file
const DOMAIN = 'https://api.the-odds-api.com';

const getOdds = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/v3/odds/`, {
      params: {
        api_key: API_KEY,
        sport: 'americanfootball_nfl',
        region: 'us'
      }
    });
    console.log(JSON.stringify(response.data.data[0]));
  }
  catch (error) {
    console.log('There was an error fetching odds...');
    // console.log(error);

  }
}



getOdds();