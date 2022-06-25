const connection = require('../services/db')

const find = (_, res) => {
    const querySelectPeople = `SELECT * FROM people`

    connection.query(querySelectPeople, (error, result) => {
        if (error) res.render('home/index', { error });
        if (result) {
            res.render('home/index', { people: result })
        }
    })
}

module.exports = { find }