import connectDB from '../../src/db.js'
import dotenv from 'dotenv'
import { ObjectId } from 'mongodb'
import { errorHandler } from '../errorhandler/errorhandler.js'

dotenv.config()
const {DB_COLLECTION1, DB_COLLECTION2, DB_COLLECTION3} = process.env

export const queries =
{
    getCategories: async () => {
        let db, categories = []
        try {
            db = await connectDB()
            categories = await db.collection(DB_COLLECTION2).find({}).toArray()
            return categories
        } catch (error) {
            errorHandler(error)
        }
        
    },
    getCategory: async (root, { name }) => {
        let db, category
        try {
            db = await connectDB()
            category = await db.collection(DB_COLLECTION2).findOne({name: name})
            return category
        } catch (error) {
            errorHandler(error)
        }
    },
    getCurrencies: async () => {
        let db, currencies = []
        try {
            db = await connectDB()
            currencies = await db.collection(DB_COLLECTION3).find({}).toArray()
            return currencies
        } catch (error) {
            errorHandler(error)
        }
        
    },
    getProduct: async (root, { id }) => {
        let db, product
        try {
            db = await connectDB()
            product = await db.collection(DB_COLLECTION1).findOne({_id: ObjectId(id)})
            return product
        } catch (error) {
            errorHandler(error)
        }
    },
}