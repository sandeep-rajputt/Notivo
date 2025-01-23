import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { signUp, login } from "@services/auth";
import dbConnect from "@lib/dbConnect";
import User from "@models/User";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        action: { label: "Action", type: "text" },
      },
      async authorize(credentials) {
        if (credentials?.action === "signup") {
          const { email, password, name } = credentials;
          const user = await signUp(name, email, password);
          return user;
        } else if (credentials?.action === "login") {
          const { email, password } = credentials;
          const user = await login(email, password);
          return user;
        } else {
          throw new Error("Action is required");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { email: token.email, name: token.name };
      return session;
    },
    async signIn({ profile, account }) {
      if (account?.provider === "credentials") {
        return true;
      } else if (profile?.email) {
        try {
          await dbConnect();
          const existingUser = await User.findOne({ email: profile.email });
          if (!existingUser) {
            const newUser = new User({
              name: profile.name || "Unknown",
              email: profile.email,
              platforms: [],
              reminders: [],
            });
            await newUser.save();
          } else if (existingUser.verified === false) {
            await existingUser.updateOne({ verified: true });
          }
          return true;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      }
      return false;
    },
  },
  pages: {
    error: "/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
