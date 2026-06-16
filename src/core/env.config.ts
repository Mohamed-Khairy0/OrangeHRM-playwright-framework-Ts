import dotenv from 'dotenv';
import path from 'path';

const env = process.env.ENV || 'demo';
const envFilePath = path.resolve(__dirname, `../../config/${env}.env`)
dotenv.config({ path: envFilePath });