import sql from './db.js'

const startTime = performance.now()

try {
    // Drop table
    await sql`DROP TABLE IF EXISTS task;`

    // Create table
    await sql`
        CREATE TABLE task(
            id SERIAL PRIMARY KEY, 
            name VARCHAR(50), 
            description VARCHAR(50), 
            priority VARCHAR(50)
        );
    `

    // Insert data
    await sql`
        INSERT INTO task (name, description, priority) VALUES 
        ('cleaning', 'Clean the house', 'Low'),
        ('gardening', 'Mow the lawn', 'Medium'),
        ('shopping', 'Buy the groceries', 'High'),
        ('painting', 'Paint the fence', 'Medium'),
        ('exercising', 'Walk the dog', 'Medium'),
        ('meditating', 'Contemplate the infinite', 'High')
    `

    console.log('Operation was successful and took', performance.now() - startTime, 'milliseconds')
} catch (error) {
    console.error(error)
    console.log('Operation failed and took', performance.now() - startTime, 'milliseconds')
}

process.exit(0)