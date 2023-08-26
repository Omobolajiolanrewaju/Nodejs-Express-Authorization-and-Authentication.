const express = require('express');
const path = require('path')


const HOSTNAME = 'localhost'
const PORT = 3088

const app = express()

app.use(express.static('public'))

// The path to the html files
const homePagePath = path.join(__dirname, 'public', 'index.html')
const notFoundPath = path.join(__dirname, 'public', '404.html')


// Handles the homepage
const handleHomePage = async (req, res) => {
    res.status(200).sendFile(homePagePath)
}

app.get('/index', handleHomePage)

// Handles the 404 page
const handleErrPage = async (req, res) => {
    res.status(404).sendFile(notFoundPath)
}

app.get('*', handleErrPage)

app.listen(PORT, () => {
    console.log(`Listening on port: ${HOSTNAME}:${PORT}`)
})