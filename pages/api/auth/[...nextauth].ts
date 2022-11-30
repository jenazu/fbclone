import NextAuth from "next-auth"
import Provider from "next-auth/providers"

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    Provider.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  
})


// FACEBOOK_CLIENT_ID=699907141751657
// FACEBOOK_CLIENT_SECRET=d78f5ba99cb03bff226df4f0a48149a8