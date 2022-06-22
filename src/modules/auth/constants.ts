const dotenv = require('dotenv')
dotenv.config()
export const jwtConstants = {
  secret: process.env.APP_KEY,
  adminJWTKey: `admin-${process.env.APP_KEY}-key`,
};