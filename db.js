const Sequelize = require('sequelize')

// these information has been copied from heroku credentials (Resources->postgre->credential)
if (process.env.DATABASE_URL) {
    db = new Sequelize(process.env.DATABASE_URL)
} else {
    db = new Sequelize({
        dialect: 'sqlite',
        storage: __dirname + '/test.db'
    })
}



const Tasks = db.define('task', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.DataTypes.STRING(35),
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false

    }

})


module.exports = {
    db,
    Tasks
}