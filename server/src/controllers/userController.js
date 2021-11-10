const Db = require('../DB/db')
const Validator = require('../helper/index')

class UserController {

    getUsersList(req, res) {
        const page = req.params.page || 1
        const usersCount = req.query.count || 50

        if(Validator.isValidNumber(page) && Validator.isValidNumber(usersCount)){
            Db.getUsersList(usersCount, page)
                .then(list => {
                    res.status(200).send(list)
                })
                .catch(reason => res.status(404).send(reason))
        }else {
            return res.status(400).send('Wrong page or users count')
        }
    }
    getStatsById(req, res) {
        const dayWeekAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString().split('T')[0]
        const dayNow = new Date().toISOString().split('T')[0]

        const {id} = req.params
        const from = req.query.from || dayWeekAgo
        const to = req.query.to || dayNow

        if (id && Validator.isValidNumber(id)) {
            if(Validator.isValidDate(from) && Validator.isValidDate(to)){
                Db.getUsersStats(id, from, to)
                    .then(stats => res.status(200).send(stats))
                    .catch(reason => res.status(400).send(reason))
            }else {
                return res.status(400).send('Wrong date')
            }
        }else{
            return res.status(400).send('Wrong user id')
        }
    }
}

module.exports = new UserController()