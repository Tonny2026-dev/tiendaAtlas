import { Schema, model } from "mongoose";

const clienteEsquema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        apellido: {
            type: String,
            required: true,
            trim: true,
        },
        correo: {
            type: String,
            required: true,
            trim: true,
        },
        telefono: {
            type: String,
            required: true,
            trim: true,
        },
        edad: {
            type: Number,
            required: true,
        },
        direccion: {
            type: String,
            required: true,
            trim: true,
        },
        ciudad: {
            type: String,
            required: true,
            trim: true,
        },
        
        estado: {
        type: Boolean,
        default: false,
  },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Cliente", clienteEsquema);