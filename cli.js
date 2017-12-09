#!/usr/bin/env node

'use strict'

const patriarchy = require('./index')

console.log(process.argv)
console.log(patriarchy(JSON.parse(process.argv.slice(1)[0])))
