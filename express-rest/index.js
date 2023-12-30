const express = require("express")
const app = express()
const path = require("path")
const { v4: uuidv4 } = require("uuid")
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const cars = [
    {
        id: uuidv4(),
        type: "911 GT3 RS",
        brand: "Porsche",
        owner: "@adrianadhari"
    },
    {
        id: uuidv4(),
        type: "GTR",
        brand: "Nissan",
        owner: "@fildza"
    },
    {
        id: uuidv4(),
        type: "Agera",
        brand: "Koenigsegg",
        owner: "@fatharani"
    },
    {
        id: uuidv4(),
        type: "Chiron",
        brand: "Buggati",
        owner: "@nur"
    },
    {
        id: uuidv4(),
        type: "M3 CS",
        brand: "BMW",
        owner: "@shabrina"
    }
]

app.get('/car', (req, res) => {
    res.render('cars/index', { cars })
})

app.post('/car', (req, res) => {
    const { type, brand, owner } = req.body
    cars.push({ type, brand, owner, id: uuidv4() })
    res.redirect('/car')
})

app.get('/car/:id', (req, res) => {
    const { id } = req.params
    const type = cars.find(c => c.id === id)
    res.render('cars/show', { type })
})

app.get('/car/:id/edit', (req, res) => {
    const { id } = req.params
    const type = cars.find(c => c.id === id)
    res.render('cars/edit', { type })
})

app.patch('/car/:id', (req, res) => {
    const { id } = req.params
    const newType = req.body.type
    const foundType = cars.find(c => c.id === id)
    foundType.type = newType
    res.redirect('/car')
})


app.listen(8888, () => {
    console.log(`Server runnning on http://localhost:8888`)
})