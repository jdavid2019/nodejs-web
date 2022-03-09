const express = require('express')

const app = express()

//estableciendo la configuración para ejs engine template (Motor de plantilla)
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

// Definiendo el puerto de mi servidor 
const port = 3000

// Definiendo la carpeta estática
app.use(express.static(__dirname + "/public"))

// Definiendo mis rutas
app.get('/', (req, res) => {
    //res.send("<h1>Welcome to my server</h1>")
    res.render("index", {
        "descripcion": "Esta es la pantalla principal"
    })
})

app.get('/services', (req, res) => {
    res.render("services", {
        "descriptionServices" : "Estoy en la página de servicios"
    })
})

// Definiendo si no existe un archivo
app.use((req, res, next) => {
    //res.status(404).send("No se ha encontrado la página")
    //res.status(404).sendFile(__dirname + "/public/404.html")
    res.status(404).render("404", {
        "descripcion": "Página no encontrada"
    })
})

// Estableciendo el puerto de mi servidor con mensaje en el callback
app.listen(port, () => {
    console.log(`El puerto ${port} dice: La conexión ha sido exitosa`)
})
