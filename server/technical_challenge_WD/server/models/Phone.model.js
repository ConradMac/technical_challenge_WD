const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
    {
        name: {
            type: String,
            enum: ["iPhone 7", "Galaxy S7", "Honor 10", "P10 Lite", "Nokia 7.1", "Zen Phone 5", "MI A2", "Moto G6"],
        },
        manufacturer: {
            type: String,
            enum: ["Apple", "Samsung", "Xiaomi", "Asus", "Huawei", "Sony", "LG", "Motorola"],
        },
        description: {
            type: String,
        },
        color: {
            type: String,
            enum: ["Black", "White", "Blue", "Gray"],
        },
        price: {
            type: Number,
        },
        imageFileName: {
            type: String,
        },
        screen: {
            type: String,
        },
        processor: {
            type: String,
            enum: [
                "Kirin 970",
                ",Snapdragon 450",
                "Snapdragon 660",
                "Snapdragon 636",
                "Octa-core",
                "Kirin 658",
                "Kirin 970",
                "Snapdragon 820",
                "A10 Fusion",
            ],
        },
        ram: {
            type: Number,
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const User = model("Phone", phoneSchema);

module.exports = Phone;
