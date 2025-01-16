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
      async authorize(credentials) {
        console.log(credentials);

        const usuario = await db.usuarios.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!usuario) throw new Error("Ningún usuario encontrado");

        console.log(usuario);

        const matchPassword = await bcrypt.compare(
          credentials?.contrasena || "",
          usuario.contrasena
        );

        if (!matchPassword) throw new Error("contraseña incorrecta");
        console.log("estado autorizado");
        return {
          id: usuario.id,
          name: usuario.nombre,
          email: usuario.email,
          tipo: usuario.tipo,
        };
      },
    }),
  ],
  pages: {
    signIn: "/inicio-de-sesion",
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
