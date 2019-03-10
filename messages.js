const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = "./messages/";
let arr = [];

router.post('/', (req,res)=>{
    const nameTime = new Date().toISOString();
    const filename = `./messages/${nameTime}.txt`;
    const fs = require('fs');
    const message = 'Hello, world';
    const message2 = JSON.stringify({"message": message, "datetime": nameTime});
    fs.writeFile(filename, message2, err=>{
        if (err) {
            console.error(err);
        } else {
            res.send({"message": message, "datetime": nameTime});
        }
    });
});

getMessage=()=>{
    fs.readdir(path, (err, files) => {

        files.forEach((file, ndx) => {

            if (ndx > files.length-6) {
                fs.readFile(path + file, (err, data)=>{

                    if(err) {
                        console.log(err);
                    } else {
                        console.log(JSON.parse(data));
                        arr.push(JSON.parse(data))
                    }

                });
            }
        });

    });
};

router.get('/', (req,res)=>{
    getMessage();

    res.send(arr);
});

module.exports = router;