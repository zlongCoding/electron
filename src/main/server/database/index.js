var sqlite3 = require('sqlite3').verbose()

/*
 具体看  https://www.cnblogs.com/sorrowx/p/7162356.html?utm_source=itdadao&utm_medium=referral
*/
class HandleDB {
    constructor(options) {
        this.databaseFile = options && options.databaseFile
        this.tableName = options && options.tableName
        this.db = null
    }
    connectDataBase() {
        return new Promise((resolve, reject) => {
            this.db = new sqlite3.Database(this.databaseFile, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, function(err) {
                if (err) reject(new Error(err))
                resolve(this.databaseFile+' 数据库连接成功')
            })
            this.db.prepare
        })
    }
    createTable(sentence) {
        return new Promise((resolve, reject) => {
            this.db.exec(sentence, function(err) {
                if (err) reject(new Error(err))
                resolve(`表创建成功 / 已存在,不需要重新创建该表`)
            })
        })
    }
    sql(sql, param, mode) {
        mode = mode == 'all' ? 'all' : mode == 'get' ? 'get' : 'run'
        return new Promise((resolve, reject) => {
            this.db[mode](sql, param,  (err, data) => {
                    if (err) {
                        reject(new Error(err))
                    } else {
                        if (data) {
                            resolve(data)
                        } else {
                            resolve('success')
                        }
                    }
                }
            )
        })
    }
    close() {
        return new Promise((resolve, reject) => {
            this.db.close(() => {
                if (err) {
                  reject(new Error(err))
                } else {
                  resolve('success')
                }
            })
        })
    }
}

module.exports = HandleDB