const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
        },

        permissions: {
            type: String,
            required: true,
        },
        passwordResetToken: {
            type: String,
            select: false,
        },
        passwordResetExpires: {
            type: Date,
            select: false,
        }
    },

    {
        timestamps: true,
    }
);

// Checking if the password was modified, if it's not, just send
UserSchema.pre("save", async function bCryptPassword(next) {
    if (!this.isModified("password")) next();

    this.password = await bcrypt.hash(this.password, 8);
});
// Comparing the password that it sent with the pass that it saved before
UserSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    },

    createToken() {
        return jwt.sign({ id: this._id, permissions: this.permissions }, process.env.JWT_SECRET, {
            expiresIn: 300000
        })
    },

    decodedToken(token) {
        var data = jwt.verify(token, process.env.JWT_SECRET);
        return data;
    }
};

module.exports = mongoose.model("User", UserSchema);