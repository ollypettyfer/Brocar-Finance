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
  console.log(event);

  try {
    const res = await brocardata1.create("1", event.body);

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
