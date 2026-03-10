import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database Connected'))
        mongoose.connection.on('error', (err) => console.error('Database connection error:', err))

        const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
        const dbName = process.env.MONGODB_DB || 'job-portal'

        await mongoose.connect(`${uri}/${dbName}`)
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message)
        process.exit(1)
    }
}

export default connectDB