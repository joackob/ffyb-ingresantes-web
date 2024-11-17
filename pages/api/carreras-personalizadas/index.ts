import { NextApiRequest, NextApiResponse } from "next";

const route = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ message: "Hello World" });
};

export default route;
