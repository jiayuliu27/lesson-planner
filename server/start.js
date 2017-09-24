'use strict'

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')

const pkg = require('APP')

const app = express()

module.exports = app.use(bodyParser.urlencoded({ extended: true }))
                    .use(bodyParser.json())
                    .use(express.static(resolve(__dirname, '..', 'public')))
                    .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))


if(module === require.main) {
    const server = app.listen(
        process.env.PORT || 1337,
        () => {
            console.log(`--- Started HTTP Server for lessonplanner ---`)
            console.log(`Listening on ${JSON.stringify(server.address())}`)
        }
    )
}