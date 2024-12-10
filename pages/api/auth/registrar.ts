import { NextApiRequest, NextApiResponse } from "next";
import db from "@/db";
import bcrypt from "bcrypt";

export default async function ruta(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body;
    console.table(data);
    const hashedPassword = await bcrypt.hash(data.contrasena, 10);
    await db.usuarios.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        contrasena: hashedPassword,
        tipo: data.tipo,
      },
    });

    return res
      .status(200)
      .json({ message: "todo bien, se pudo crear el usuario" });
  } catch (error) {
    console.table(error);
    return res.status(503).json({
      message: "HUBO UN ERROR",
    });
  }
}
