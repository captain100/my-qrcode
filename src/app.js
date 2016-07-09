'use strict'
import express from 'express'
import path from 'path'
const app = express()
// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, '../css')))
app.use(express.static(path.join(__dirname, '../js')))
app.use(express.static(path.join(__dirname, '../views')))

app.get('/', (req, res) => {
    // 直接加载静态的html界面
    res.sendFile(path.join(__dirname, '../views/learn_1.html'))
})

app.listen(3005,() => {
    console.log('servive is start')
})