const express = require("express")
const multer = require("multer");
const upload = multer();
const CreateQun = express()
CreateQun.use(express.json())
const mongoose = require("../cannector/mongoose.cannector")
const CreateQunschema = require("../module/createQunPageSchema");
const {validateQuestion} = require("../module/createQunPageSchema")


CreateQun.post("/createqun",upload.none(),(req,res) =>{

      // Validate the request body using Joi schema
      const { error } = validateQuestion(req.body);
      if (error) {
          // If validation fails, return 400 Bad Request with the error message
          return res.status(400).send(error.details[0].message);
      }

      
    CreateQunschema.create(req.body)
    .then(() => {
        res.send("yes");
        console.log(req.body);
    })
    .catch((err) => {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    });
})


module.exports = CreateQun