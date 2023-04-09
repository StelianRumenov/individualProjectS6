import { config } from 'dotenv';
import env from './envParser';

config();

export default (key: string, ...args) => env(process.env[key], ...args);
