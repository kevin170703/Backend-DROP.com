import { File } from "../models/Files";
import { Request, Response } from "express";

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
  const { image, imageName, userId, sizeImage } = req.body;
  console.log("llegue");
  try {
    await File.create({
      name: imageName,
      imageUrl: image,
      user: userId,
      size: sizeImage,
    });
    res.send({ msj: "Imagen cargada correactamente" });
  } catch (error) {
    console.log(error);
  }
};
