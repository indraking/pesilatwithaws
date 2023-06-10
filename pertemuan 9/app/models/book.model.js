module.exports = (sequelizeConnection, Sequelize) => {
    const Book = sequelizeConnection.define("books", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author : {
            type: Sequelize.STRING,
            allowNull: false
        },
        release_date : {
            type : Sequelize.DATE,
        },
        subject:{
            type: Sequelize.STRING,
        }
    });
    return Book;    
};

