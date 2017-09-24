'use strict'

const { resolve } = require('path')
const pkg = require('./package.json')
const debug = require('debug')(`${pkg.name}:boot`)

const env = Object.create(process.env)
const secretsFile = resolve(env.HOME, `.${pkg.name}.env`)

try {
    Object.assign(env, require(secretsFile))
} catch(err) {
    debug('%s: %s', secretsFile, err.message)
    debug('%s: env filenot found or invalid, moving on', secretsFile)
}

module.exports = {
    get name() { return pkg.name },
    get isTesting() { return !!global.it },
    get isProduction() { return process.env.NODE_ENV === 'production' },
    get baseUrl() {
        return env.BASE_URL || `http://localhost:${PORT}`
    },
    get port() { returnenv.PORT || 1337 },
    package: pkg,
    env,
}