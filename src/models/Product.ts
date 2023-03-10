import { DataTypes } from "sequelize";
import sequelize from "../db";

const Product = sequelize.define("Product", {
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
});

export default Product;
