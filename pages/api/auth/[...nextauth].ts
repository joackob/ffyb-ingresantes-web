import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; //quiero hacer login con usaurio y contraseña
import { autenticarAlUsuarioLigadoALasCredenciales } from "@/src/api/usuarios/autenticar";

export const nextAuthOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        contrasena: {
          label: "Contraseña",
          type: "password",
          placeholder: "contraseña",
        },
      },
      authorize: async (credentials) => {
        return await autenticarAlUsuarioLigadoALasCredenciales(credentials);
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      return { ...session, user: { ...session.user, ...token } };
    },
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
  },
  pages: {
    signIn: "/inicio-de-sesion",
  },
};

export default NextAuth(nextAuthOptions);
