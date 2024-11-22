const express = require('express')

const routes = express.Router();

const { addPage, addRecord, deleteRecord, viewPage, editRecord, updateRecord, dashboardPage, bookTicket } = require('../controllers/indexController')

const multer = require('multer');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000000);
        cb(null, `${file.fieldname}-${uniq}`);
    }
})

const upload = multer({ storage: st }).single('image');

routes.get('/', dashboardPage);
routes.get('/add', addPage);
routes.post('/insertRecord', upload, addRecord);
routes.get('/deleteRecord', deleteRecord);
routes.get('/view', viewPage);
routes.get('/editRecord', editRecord);
routes.post('/updateRecord', upload, updateRecord);
routes.get('/bookticket', bookTicket);

module.exports = upload;
module.exports = routes;