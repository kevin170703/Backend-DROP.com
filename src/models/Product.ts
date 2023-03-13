import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";
import sequelize from "../db";

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<string>;
  declare nameProduct: string;
  declare stock: number;
  declare price: number;
  declare user: string;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nameProduct: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.FLOAT,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    user: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "product",
  }
);
