import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema({
  userName: String,
  email: String,
  password: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnendObject) => {
    returnendObject.id = returnendObject._id;
    delete returnendObject._id;
    delete returnendObject.__v;
    delete returnendObject.password;
  },
});

const User = model("User", userSchema);

export default User;
