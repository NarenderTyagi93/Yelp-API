const {
  PORT = 4000,
  YELP_API_KEY = "pSxxXBpunBnBT0mIoP_m6VTEy32nmGTOG8xO5_9ehd8uIPpSgZvaSTxqmVoNdR_OxuXI2u5JLB5gltsjBUxat5sy4ci96wvRmWJT_Bmw473B48rMEeZQml2lcPBeX3Yx",
} = process.env;
module.exports = {
  SERVER: {
    PORT,
  },
  YELP_API_KEY,
};
