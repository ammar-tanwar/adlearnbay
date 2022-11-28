import { connectToDatabase } from "../../../lib/mongodb";
const axios = require('axios');

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    let { mobileNumber } = req.body;
    // console.log(mobileNumber, "request api");
    var otp = Math.floor(1000 + Math.random() * 9000);
    // console.log(otp);
    let addDateTime = new Date();
    addDateTime = addDateTime.toUTCString();

    const MTALKZ_SEND_SMS_POST_API_URL = "http://msg.mtalkz.com/V2/http-api-post.php"
    const MTALKZ_SEND_SMS_API_KEY = "WNlxSnQ0kz1DktWp"
    const MTALKZ_SEND_SMS_SENDERID = "MTAMOI"
    const message = `Your OTP- One Time Password is ${otp}  to authenticate your login with Learnbay Powered By mTalkz`

    let filter = /^[0-9]{10}$/;
    if (filter.test(mobileNumber)) {

      let data = await db.collection("otp").findOne({ "mobileNumber": mobileNumber });
      if (data !== null) {
        if (data.mobileNumber === mobileNumber) {
          const filter = { mobileNumber: mobileNumber };
          const updateDoc = {
            $set: {
              otp: otp,
              isActive: 1,
              addDateTime: addDateTime,
            },
          };
          axios
            .post(MTALKZ_SEND_SMS_POST_API_URL, {
              "apikey": MTALKZ_SEND_SMS_API_KEY,
              "senderid": MTALKZ_SEND_SMS_SENDERID,
              "number": mobileNumber,
              "message": message,
              "format": "json"
            })
            .then(resp => {
              let data = resp.data

              // if (data.)

              let otpData = db.collection("otp").updateMany(filter, updateDoc);
              res.status(200).json({ msg: "message Send", data: data, "UserMSG": "User Updated Successfully" });

            })
            .catch(error => {
              console.error(error);
              res.status(200).json({ msg: " message failed" });
            });

        }

      }
      else {

        axios
          .post(MTALKZ_SEND_SMS_POST_API_URL, {
            "apikey": MTALKZ_SEND_SMS_API_KEY,
            "senderid": MTALKZ_SEND_SMS_SENDERID,
            "number": mobileNumber,
            "message": message,
            "format": "json"
          })
          .then(resp => {
            let data = resp.data

            let otpData = db.collection("otp").insertOne({
              mobileNumber: mobileNumber,
              otp: otp,
              isActive: {
                type: Number,
                default: 0
              },
              messageTemplate: message,
              addDateTime: addDateTime,

            });
            res.status(200).json({ msg: "message Send", data: data, "UserMSG": "User Created Successfully" });
          })
          .catch(error => {
            console.error(error);
            res.status(200).json({ msg: " message Failed" });
          });
      }
    }
    else {
      res.status(200).json({ mobileNumber, msg: "Please Enter Correct Phone Number" });
    }
  }
}
