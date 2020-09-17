require("dotenv").config();

const app = require("./src/app");


app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log("err: ", err);
    }
    return console.log(`Server running at http://localhost:3001`)
});

