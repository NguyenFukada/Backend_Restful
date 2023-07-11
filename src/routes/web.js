const express = require('express');
const { handleGetHomePage, test, postCreateUser, 
    getCreatePage, getupdatePage, postUpdateUser, postDeleteUser, postRemoveUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', handleGetHomePage)

router.get('/test', test)

router.post('/create-user', postCreateUser)
router.get('/create', getCreatePage)
router.get('/update/:id', getupdatePage)
router.post('/update-user',postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postRemoveUser)
module.exports = router;