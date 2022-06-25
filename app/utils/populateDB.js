const { faker} = require('@faker-js/faker')
const connection = require('../services/db')

module.exports = () => {
    const queryCreatePeopleTable = `CREATE TABLE IF NOT EXISTS people(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL
    );`
    
    // Create table if doesn't exists
    connection.query(queryCreatePeopleTable, (error, result) => {
        if (error) throw error;
    
        const querySelectPeople = `SELECT * FROM people`
    
        // Check if people table has data, if not, populate it.
        connection.query(querySelectPeople, (error, result) => {
            if (error) console.log(error)
            
            if (!result.length) {
                const queryInsertPersonIntoPeopleTable = `INSERT INTO people(name) VALUES ?;`
                const values = Array(10).fill(undefined).map(() => [faker.name.findName()])
    
                connection.query(queryInsertPersonIntoPeopleTable, [values], (error, result) => {
                    if (error) console.log(error)
                })
            }
        })
    })
}