import { Client } from 'pg'
import * as dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.error('Please provide a DATABASE_URL environment variable')
  process.exit(1)
}

const client = new Client({
  connectionString: connectionString
})

async function checkConnection() {
  try {
    await client.connect()
    console.log('Connected to the database successfully')
  } catch (err) {
    console.error('Failed to connect to the database', err)
  } finally {
    await client.end()
  }
}

checkConnection()
