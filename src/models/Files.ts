import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";
import sequelize from "../db";

export class File extends Model<
  InferAttributes<File>,
  InferCreationAttributes<File>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare imageUrl: string;
  declare user: string;
}

File.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "file",
  }
);
