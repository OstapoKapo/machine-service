import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect  from "../../../../utils/db";
import User from '../../../../models/User';
import bcrypt from 'bcryptjs'


const handler =  NextAuth({
  providers: [
    GoogleProvider ({
      clientId: process.env.CLIENTID, 
      clientSecret: process.env.CLIENTSECRET,
    }),
  ],
  pages: {
    error: '/login'
  }
})

export {handler as GET, handler as POST}