const fs = require('fs')
const sqlite3 = require('sqlite3').verbose()

class Db {

    filePath = './src/DB/db.sql'
    isInit = fs.existsSync(this.filePath)
    db = this.isInit && new sqlite3.Database(this.filePath)
    constructor() {
        if(!this.isInit) this.init()
    }

    getUsersCount() {
        return new Promise(((resolve, reject) => {
            const sql = `
                SELECT COUNT(*) AS count
                FROM users
                `
            this.db.get(sql, (err, row) => {
                if (err) reject(err)
                resolve(row.count)
            })
        }))
    }
    getUsersList(usersCount, page) {
        return this.getUsersCount()
            .then(dbCount => {
                return new Promise(((resolve, reject) => {
                    if (dbCount < usersCount * page) reject('List not found')

                    const pagesLength = Math.floor(dbCount / usersCount)
                    const from = usersCount * page - usersCount
                    const sql = `
                      SELECT user.*, sum(usersStats.page_views) AS "total_page_views", sum(usersStats.clicks) AS "total_clicks"
                      FROM users AS user 
                      INNER JOIN users_statistic AS usersStats ON usersStats.user_id = user.id
                      GROUP BY user.id
                      LIMIT ${usersCount} OFFSET ${from}
                        `
                    this.db.all(sql, (err, row) => {
                        if (err) reject('List not found')
                        resolve({usersList: row, pagesLength})
                    })
                }))

            })
    }

    getUserById(id) {
        return new Promise(((resolve, reject) => {
            const sql = `
                SELECT *
                FROM users
                WHERE id = ${id}
                `
            this.db.get(sql, (err, row) => {
                if (err) reject('User not found')
                resolve(row)
            })
        }))
    }

    getUsersStats(id, from, to) {
        return this.getUserById(id)
            .then(user => {
                return new Promise(((resolve, reject) => {
                    if(!user) reject('User not found')
                    const sql = `
                        SELECT *
                        FROM users_statistic
                        WHERE user_id = ${id}
                        AND date BETWEEN '${from}' AND '${to}'
                        `
                    this.db.all(sql, (err, row) => {
                        if (err) reject('Users stats not found')
                        resolve({user, stats: row, from, to})
                    })
                }))
            })
    }

    async init() {
        try {
            this.db = new sqlite3.Database(this.filePath)
           fs.readFile('./src/mock/users.json', await ((err, data) => {
               if (err) throw new Error(err)
               else {
                   const users = JSON.parse(data)
                   const table = `CREATE TABLE users(
                    id INTEGER PRIMARY KEY NOT NULL,
                    first_name VARCHAR(50) NOT NULL,
                    last_name VARCHAR(50) NOT NULL,
                    email VARCHAR(100) NOT NULL,
                    gender VARCHAR(6) NOT NULL,
                    ip_address VARCHAR(15) NOT NULL
                    )`
                   let insertTable = 'INSERT INTO users(id, first_name, last_name, email, gender, ip_address)\n VALUES'
                   for (const user of users) {
                       insertTable += `("${user.id}","${user.first_name}", "${user.last_name}", "${user.email}", "${user.gender}", "${user.ip_address}"),\n`
                   }
                   insertTable = insertTable.substring(0, insertTable.length - 2) + ';'
                   this.db.run(table, (err) => {
                       if (err) throw new Error(err)
                       this.db.run(insertTable, (err) => {
                           if (err) throw new Error(err)
                       })
                   })
               }
           }))

           fs.readFile('./src/mock/users_statistic.json', await ((err, data) => {
               if (err) throw new Error(err)
               else {
                   const statistics = JSON.parse(data)
                   const table = `CREATE TABLE users_statistic(
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    date TEXT NOT NULL,
                    page_views INTEGER NOT NULL,
                    clicks INTEGER NOT NULL,
                    user_id INTEGER NOT NULL,
                    FOREIGN KEY(user_id) REFERENCES users(id)
                    )`
                   let insertTable = 'INSERT INTO users_statistic(date, page_views, clicks, user_id)\n VALUES'
                   for (const statistic of statistics) {
                       insertTable += `("${statistic.date}", ${statistic.page_views}, ${statistic.clicks}, ${statistic.user_id}),\n`
                   }
                   insertTable = insertTable.substring(0, insertTable.length - 2) + ';'
                   this.db.run(table, (err) => {
                       if (err) throw new Error(err)
                       this.db.run(insertTable, (err) => {
                           if (err) throw new Error(err)
                       })
                   })
               }
           }))
        }catch (e) {
            console.log(e)
        }
    }
}
module.exports = new Db()
