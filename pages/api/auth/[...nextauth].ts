import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; //quiero hacer login con usaurio y contraseña
import { intentarAutenticarAlUsuarioLigadoALasCredenciales } from "@/src/api/usuarios/autenticar";

export const authOptions = {
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
        return intentarAutenticarAlUsuarioLigadoALasCredenciales(credentials);
      },
    }),
  ],
  pages: {
    signIn: "/inicio-de-sesion",
  },
};

export default NextAuth(authOptions);
