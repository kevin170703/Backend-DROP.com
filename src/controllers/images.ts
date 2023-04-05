import { File } from "../models/Files";
import { Request, Response } from "express";
import { fileURLToPath } from "url";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dwnptvxe5",
  api_key: "223422247246345",
  api_secret: "CSUtXk5x13w2NMt2my3PGIJloVI",
});

export const getFile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const imagesUser = await File.findAll({
    where: {
      user: id,
    },
  });
  if (!imagesUser.length)
    return res.send([{ msj: "El usuario no cuenta con imagenes" }]);
  res.json(imagesUser);
};

export const postFile = async (req: Request, res: Response) => {
  const { image, userId } = req.body;
  try {
    const imageCloud = cloudinary.uploader.upload(image);
    const data = await imageCloud;
    await File.create({
      name: data.public_id,
      imageUrl: data.secure_url,
      user: userId,
    });
    res.send({ msj: "Imagen cargada correactamente" });
  } catch (error) {
    console.log(error);
  }
};
