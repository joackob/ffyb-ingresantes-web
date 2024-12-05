import NextAuth from "next-auth";
//import GithubProvider from "next-auth/providers/github"
import db from "@/db";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials"; //quiero hacer login con usaurio y contraseña

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        contrasena: {
          label: "Contraseña",
          type: "password",
          placeholder: "*****",
        },
      },
      async authorize(credentials, req) {
        console.log(credentials);

        const userFound = await db.usuarios.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!userFound) throw new Error("Ningún usuario encontrado");

        console.log(userFound);

        const matchPassword = await bcrypt.compare(
          credentials?.contrasena || "",
          userFound.contrasena
        );

        if (!matchPassword) throw new Error("contraseña incorrecta");
        console.log("estado autorizado");
        return {
          id: userFound.id,
          name: userFound.nombre,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/tu-progreso/inicio-de-sesion",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Configure one or more authentication providers
//  providers: [
//    GithubProvider({
//      clientId: process.env.GITHUB_ID,
//      clientSecret: process.env.GITHUB_SECRET,
//    }),
// ...add more providers here
//  ],
//}

export default NextAuth(authOptions);
