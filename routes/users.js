const controller = require('../controllers/users');
const bcrypt = require('bcrypt');

module.exports = (router) => {
    router.route('/users')
        .post(controller.add);

    router.route('/login')
        .post(controller.login)
};