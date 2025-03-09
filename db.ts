import postgres from 'postgres'

const postgresUrl = process.env.POSTGRES_URL
if (!postgresUrl) throw new Error('You forgot to set the POSTGRES_URL environment variable')

const sql = postgres(postgresUrl)

export default sql