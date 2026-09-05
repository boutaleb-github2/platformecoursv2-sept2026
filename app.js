const express = require("express")
const app = express();
const indexRouter = require("./routes/index")
const expressLayouts = require("express-ejs-layouts")

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout","layouts/main") // path of principal layout

app.use("/", indexRouter);


app.listen(3000,()=>{
    console.log("Server started on 3000 port")
})