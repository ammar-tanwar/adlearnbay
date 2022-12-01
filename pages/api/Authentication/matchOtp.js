import { connectToDatabase } from "../../../lib/mongodb";
const axios = require('axios');

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    let { mobileNumber, otp } = req.body;
    // console.log(mobileNumber,otp,"request api");
    let addDateTime = new Date();
    addDateTime = addDateTime.toUTCString();
    let filter = /^[0-9]{10}$/;
    if (filter.test(mobileNumber)) {
      let data = await db.collection("otp").findOne({ "mobileNumber": mobileNumber});
      if (data !== null) {
        const dbOtp = data.otp
        if (dbOtp == otp) {
          const filter = { mobileNumber: mobileNumber };
          const updateDoc = {
            $set: {
              otp: otp,
              isActive: 1,
              addDateTime: addDateTime,
            },
          };
          let otpData = db.collection("otp").updateMany(filter, updateDoc);
          res.status(200).json({ msg: "OTP Validated Successfully"});
        }else{
            res.status(200).json({ msg: "OTP Not Validate"});
        }
      }
      else {
        res.status(200).json({ msg: "OTP Expired"});
      }
    }
    else {
      res.status(200).json({msg: "Invalid Phone Number" });
    }
  }
}
