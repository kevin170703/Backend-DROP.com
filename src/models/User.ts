import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from "sequelize";
import sequelize from "../db";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<string>;
  declare userName: string;
  declare email: string;
  declare password: string;
  declare files: CreationOptional<Array<string>>;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    files: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    sequelize,
    tableName: "user",
  }
);

// interface UserAttributes {
//   id: string;
//   userName: string;
//   email: string;
//   password: string;
//   products: Array<string>;
// }

// export class User extends Model<UserAttributes> {
//   declare id: string;
//   declare userName: string;
//   declare email: string;
//   declare password: string;
//   declare products: Array<string>;
// }
