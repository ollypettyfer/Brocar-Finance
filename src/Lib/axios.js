import React from "react";

export const axios = () => {
  const axios = require("axios");
  let data = JSON.stringify({
    AmountToBorrow: 20000,
    Term: 20,
    FinanceDetails: {
      FinanceTypeId: "2",
    },
    Vehicles: [
      {
        Make: "Fiat",
      },
    ],
    Applicants: [
      {
        Email: "APITESTING@test.co.uk",
        Forename: "Olly",
        Surname: "Test",
        Mobile: "+447777777777",
      },
    ],
  });

  let config = {
    method: "post",
    url: "https://api.autoconvert.co.uk/application/submit",
    headers: {
      "X-ApiKey": "9c640c61-d1a7-4de6-8d68-53939b939231",
      key: "9c640c61-d1a7-4de6-8d68-53939b939231",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div>axios</div>
      <div
        style={{
          textAlign: "center",
          width: "100px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      >
        Send data to backend
      </div>
      ;
    </>
  );
};

//   const requestConfig = {
//     headers: { Authorization: `Bearer ${apikey()}` },
//   };
//   return axios.post(`${baseUrl}/application/submit`, formData, requestConfig);
// console.log(`👀 This is the response form the CREATECOUNTRY api call`, data)

// const apiKey = "d59a749a63ac477eaf0160701221606";

// export const GetWeather = () => {
//   return axios.get(`${baseUrl}q=London${apiKey}`);
// };

// const axios = require("axios");

// const options = {
//   method: "POST",
//   url: "https://yawin-calculator.p.rapidapi.com/fdcalculator",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "eda780fc76msh97346fff928b31ep101ea4jsnebec48779df9",
//     "X-RapidAPI-Host": "yawin-calculator.p.rapidapi.com",
//   },
//   data: '{"amount":"100000","interest":"10","duration":60,"compoundPeriod":3,"tax":30,"inflation":5,"firstMonth":"2021-Jan","paginationPageNumber":"1","paginationPageSize":"12","ignoreSchedule":false}',
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
