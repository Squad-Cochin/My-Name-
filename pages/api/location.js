//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//          This file is use to fetch all package details on the basis of search                    //       
//                       from node API that given from backend.                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

import axios from 'axios';

// IMPORT PAGES
import API_CONFIG from '../../config';

export default async function locationOptions(req, res) {
	console.log(req)
	const apiUrl = `${API_CONFIG.LOCATION_API_BASE_URL}${API_CONFIG.LOCATION_API_TOKEN}`;
	const requestData = {
	  // Add your request data here
	  searchtext: req.query.searchtext,
	};
  
	try {
	  const response = await axios.post(apiUrl, requestData, {
		headers: {
		  'Content-Type': 'application/json',
		  // Add any required headers
		},
	  });
  
	  const data = response.data;
	  console.log(data)
	  // Handle the API response and send it back to the client
	  res.status(200).json(data);
	} catch (error) {
	  // Handle the error
	  res.status(500).json({ error: 'Internal Server Error' });
	}
  }
//export {locationOptions}



