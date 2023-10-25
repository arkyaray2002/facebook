const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://arkyaray2002:1234567890@arkyaray.rts516z.mongodb.net/FbIdPass",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true
}).then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(`No Connection`);
}) 