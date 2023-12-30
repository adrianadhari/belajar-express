const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("ANJAY")
})
app.get('/search', (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send(`<h1>ga ada yang dicari</h1>`)
    } else {
        res.send(`<h1>Hasil yang dicari adalah ${q}</h1>`)
    }
})
app.get('/blog', (req, res) => {
    res.send("Ini halaman blog")
})
app.get('/blog/:category', (req, res) => {
    const { category } = req.params
    res.send(`Ini halaman blog dengan kategori ${category}`)
})
app.get('/blog/:category/:judul', (req, res) => {
    const { category, judul } = req.params
    res.send(`Ini halaman blog dengan kategori ${category} dan judul ${judul}`)
})
app.get('/about', (req, res) => {
    res.send("ini about")
})
app.get('*', (req, res) => {
    res.send("ga ada")
})

app.listen(9999, () => {
    console.log('Server is running on http://localhost:9999')
})