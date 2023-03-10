import { Sequelize } from "sequelize";

const sequelize = new Sequelize("products", "postgres", "170703", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
