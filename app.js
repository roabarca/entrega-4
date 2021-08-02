const express = require("express");
const app = express();

app.use(express.json());


//app.use("/admin", require("./routes/adminRegister.js"));
app.use("/proyectos", require("./routes/proyectosRoute.js"));
app.use("/reservas", require("./routes/reservasRoute.js"));
app.use("/sesiones", require("./routes/sesionesRoute.js"));

app.listen(4000, () => {
    console.log("El servidor esta corriendo")}
);