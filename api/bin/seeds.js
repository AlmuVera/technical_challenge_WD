// require("../config/db.config");

require('../config/db.config')

const Phone = require("../models/phone.model");
const phonesData = require('../../data/phones.json')

Phone.deleteMany({})
  .then(() => {
    console.log("The Phone Cave DB deleted")
      Phone.create(phonesData)
        .then((phone) => {
          console.log(phone, "Phones created on DB")
        });
    })
  .catch((error) => console.log(error));