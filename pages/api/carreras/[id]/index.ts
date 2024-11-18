import { NextApiRequest, NextApiResponse } from "next";

const route = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  return res.status(200).json({ message: `Hello from /api/carreras/${id}` });
};

export default route;
