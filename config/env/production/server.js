module.exports = ({ env }) => ({
  url: process.env.HEROKU_URL,
  admin: {
    auth: {
      secret: process.env.JWT_KEY
    }
  }
});
