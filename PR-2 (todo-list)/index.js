const express = require('express');

const port = 8090;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded());

let user = []
app.get('/', (req, res) => {
    return res.render('add', {
        all: user
    });
})

app.post('/viewData', (req, res) => {
    const { editid,name, phone } = req.body;
    if (editid) {
        const { editid, name, phone } = req.body;
        let up = user.map((val) => {
            if (val.id == editid) {
                val.name = name,
                    val.phone = phone
            }
            return val;
        })
        user = up;
        console.log('record update');
        return res.redirect('/');
    }
    else{
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            phone: phone
        }
        user.push(obj);
        console.log('user succsefully add');
    
        return res.redirect('/')
    }
})

app.get('/deleteUser', (req, res) => {
    let id = req.query.id;
    console.log(id);
    let d = user.filter(val => val.id != id);
    user = d;
    console.log('user delete');

    return res.redirect('/')
})

app.get('/editUser', (req, res) => {
    let single = user.find(val => val.id == req.query.id)

    return res.render('edit', {
        single
    })
})

app.post('/updateData', (req, res) => {
    // const { editid, name, phone } = req.body;
    // let up = user.map((val) => {
    //     if (val.id == editid) {
    //         val.name = name,
    //             val.phone = phone
    //     }
    //     return val;
    // })
    // user = up;
    // console.log('record update');
    // return res.redirect('/');
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is run on port:${port}`);

})

