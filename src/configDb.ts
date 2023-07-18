import mongoose from "mongoose";

export const connectDB = async():Promise<void>=>{
    try {
        await mongoose.connect('mongodb+srv://admin:BPRWM6CCkR99VOIc@nucbaentrega.3uspobz.mongodb.net/')
        console.log('Base de datos conectada');
        
    } catch (error) {
        console.error(error)
        throw new Error('Error al conectarse a la base de datos')
    }
}