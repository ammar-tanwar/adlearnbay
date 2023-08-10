import { connectToDatabase } from "../../../lib/mongodb";
const axios = require("axios");

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    let { mobileNumber } = req.body;
    // console.log(mobileNumber, "request api");
    var otp = Math.floor(1000 + Math.random() * 9000);
    // console.log(otp);
    let addDateTime = new Date();
    addDateTime = addDateTime.toUTCString();

    const MTALKZ_SEND_SMS_POST_API_URL = "https://msg.mtalkz.com/V2/http-api-post.php";
    const MTALKZ_SEND_SMS_API_KEY = "ASnH8bAWcDjKVJao";
    const MTALKZ_SEND_SMS_SENDERID = "LEABAY";
    // const MTALKZ_SEND_SMS_SENDERID = "MTAMOI";
    const message = `${otp} is your OTP for registration. Use this for phone verification. Do not share this OTP for security reasons. Thanks, Learnbay.`;
    // const message = `Your OTP- One Time Password is ${otp} to authenticate your login with Learnbay Powered By mTalkz`;

    let filter = /^[0-9]{10}$/;
    if (filter.test(mobileNumber)) {
      let data = await db
        .collection("otp")
        .findOne({ mobileNumber: mobileNumber });
      if (data !== null) {
        const mobileNumber1 = data.mobileNumber;
        if (mobileNumber1 === mobileNumber) {
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
              apikey: MTALKZ_SEND_SMS_API_KEY,
              senderid: MTALKZ_SEND_SMS_SENDERID,
              number: mobileNumber,
              message: message,
              format: "json",
            })
            .then((resp) => {
              let data = resp.data;
              // console.log(data);
              let otpData = db.collection("otp").updateMany(filter, updateDoc);
              res.status(200).json({
                msg: "OTP Sent Successfully",
                userStatus: "Already Exist",
              });
            })
            .catch((error) => {
              res.status(200).json({ msg: " OTP Sending Failed Through API" });
              console.error(error);
            });
        } else {
          res
            .status(200)
            .json({ msg: "Mobile Number is Not Match from DataBase" });
        }
      } else {
        axios
          .post(MTALKZ_SEND_SMS_POST_API_URL, {
            apikey: MTALKZ_SEND_SMS_API_KEY,
            senderid: MTALKZ_SEND_SMS_SENDERID,
            number: mobileNumber,
            message: message,
            format: "json",
          })
          .then((resp) => {
            let data = resp.data;
            // console.log(data);

            let otpData = db.collection("otp").insertOne({
              mobileNumber: mobileNumber,
              otp: otp,
              isActive: {
                type: Number,
                default: 0,
              },
              messageTemplate: message,
              addDateTime: addDateTime,
            });
            res
              .status(200)
              .json({ msg: "OTP Sent Successfully", userStatus: "New User" });
          })
          .catch((error) => {
            res.status(200).json({ msg: " OTP Sending Failed Through API" });
            console.error(error);
          });
      }
    } else {
      res.status(200).json({ msg: "Invalid Phone Number" });
    }
  }
}
