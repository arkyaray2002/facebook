const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get('/', (req, res) => {
    res.render("index")
});


app.post("/index", async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        
        const loginIdPass = new Register({
            email : req.body.email,
            password : req.body.password
        })

        const registered = await loginIdPass.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(port, () => {
    console.log(`Server running at ${port}`);
})