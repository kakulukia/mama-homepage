
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.use(express.json())

app.post('/api/contact', function (req, res) {
  const attributes = ['name', 'email', 'subject', 'message']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    console.log(sanitizedAttributes)
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})

const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    name: v => v.length < 1,
    email: v => !validator.isEmail(v),
    message: v => v.length < 1,
    subject: v => v.length < 1
  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, email, subject, message) => {
  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  })
  // let transporter = nodemailer.createTransport({
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: account.user, // generated ethereal user
  //     pass: account.pass // generated ethereal password
  //   }
  // });
  transporter.sendMail({
    from: email,
    to: 'info@mamasystems.de',
    subject: 'Neue Kontaktanfrage: ' + subject,
    text: message
  }, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
    console.log(err)
  })
}

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
