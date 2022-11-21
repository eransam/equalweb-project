const express = require('express')
const fs = require("fs") ;
const path = require('path')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const logger = require('./logger');
// const errorsHandler = require('./errors-handler');




app.get('/', function (req, res) {
    const fileFullName = path.join(__dirname, './index.html')
    fs.readFile(fileFullName, 'utf-8', (error, htmlString) => {
        res.send(htmlString)
    })
})

app.get('/contactAdmin', function (req, res) {
    const fileFullName2 = path.join(__dirname, './admin.html')
    fs.readFile(fileFullName2, 'utf-8', (error, htmlString2) => {
        res.send(htmlString2)
    })
})

app.get('/thenku', function (req, res) {
    const fileFullName2 = path.join(__dirname, './thenku.html')
    fs.readFile(fileFullName2, 'utf-8', (error, htmlString2) => {
        res.send(htmlString2)
    })
})





app.post('/login2',async function (req, res) {
    const fileFullName2 = path.join(__dirname, './siteMap/siteMapFile.json')
fs.readFile(fileFullName2, 'utf-8', (error, htmlString) => {
    var hmtls= htmlString;
    res.json(hmtls)
}
)
    
})





app.post('/login',async function (req, res) {

    logger.log("hello", new Error("hello"));


    const arr = [];
    var ObjUser = req.body
    console.log("ObjUser123 : " ,ObjUser);
    

    if (!fs.existsSync('./siteMap')){

        fs.mkdirSync('./siteMap');
    }

const fileFullName2 = path.join(__dirname, './siteMap/siteMapFile.json')
fs.readFile(fileFullName2, 'utf-8', (error, htmlString) => {
    var hmtls= htmlString;
    if (!hmtls) {
        arr.push(ObjUser);
        fs.writeFileSync(`./siteMap/siteMapFile.json` , JSON.stringify(arr, null, 2));
    }
}
)

fs.readFile(fileFullName2, 'utf-8', (error, htmlString) => {
    var hmtls= htmlString;
    var hmtlsJso = JSON.parse(hmtls);
    hmtlsJso.push(ObjUser);
        fs.writeFileSync(`./siteMap/siteMapFile.json` , JSON.stringify(hmtlsJso, null, 2));
}
)

    res.json(ObjUser)
})



app.post('/check',async function (req, res) {

    logger.log("hello", new Error("hello"));


    var ObjUser = req.body
    console.log("ObjUser in check: " ,ObjUser);
    if (!fs.existsSync('./siteMap')){

        fs.mkdirSync('./siteMap');
    }
        fs.writeFileSync(`./siteMap/siteMapFile.json` , JSON.stringify(ObjUser, null, 2));
        res.json(ObjUser)
    })



app.listen(3000)
