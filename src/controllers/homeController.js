const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')
const connection = require('../config/database')

const handleGetHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const test = (req, res) => {
    res.render('sample.ejs',)
}

const postCreateUser = async (req, res) => {

    let { email, name, city } = req.body;


    const [results, fileds] = await connection.query(
        ` INSERT INTO Users (email,name,city)
        VALUES (?,?,?) `,
        [email, name, city]
    );
    console.log("check result: ", results);
    res.send('Create user succeed !')
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
const getupdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { user: user })
}
const postUpdateUser = async (req, res) => {
    let { email, name, city } = req.body;
    let userId = req.body.userId;

    await updateUserById(email,name,city,userId);
    res.redirect('/')
}
const postDeleteUser = async(req,res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { user: user })
}
const postRemoveUser = async (req,res) => {
   let id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}
module.exports = {
    handleGetHomePage, test, postCreateUser, getCreatePage,
    getupdatePage, postUpdateUser, postDeleteUser, postRemoveUser
}