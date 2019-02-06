const url = process.env.CLIENT_URL
const fromEmail = process.env.FROM_EMAIL
module.exports.welcomeEmail = function(email, user) {
  const text = `
Hola!
Bienvenido a la plataforma de seguimiento al mantenimiento de Meypar
Por favor confirma tu correo.
Si tienes algún problema, por favor envia un correo a: gzuppa@eyspsa.com\n
${url}/signup/${user.id}
`
return {
    to: `${email}`,
    from: {
      address: fromEmail,
      name: 'Desarrollo Meypar'
    },
    subject: 'Confirmación de cuenta',
    text
  }
}