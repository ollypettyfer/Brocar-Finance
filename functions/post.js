const { createClient } = require("@astrajs/collections");

const collection = "brocar1";

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });
  const brocardata1 = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    const res = await brocardata1.find();

    // let config = {
    //   method: "post",
    //   url: "https://api.autoconvert.co.uk/application/submit",
    //   headers: {
    //     "X-ApiKey": "9c640c61-d1a7-4de6-8d68-53939b939231",
    //     "Content-Type": "application/json",
    //   },
    //   data: brocardata,
    // };

    // axios(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
