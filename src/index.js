const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send('Image Upload')
// })

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     const isUnderMaintainance = true;
    
//     if (isUnderMaintainance) {
//         res.status(503).send('Site Under Maintainance\nPlease Try later')
//     } else {
//         next()
//     }
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')

// const main = async () => {
//     const task = await Task.findById('5eecad20b6d51c50cccedbd7')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)
// }

// const User = require('./models/user')
// const main = async() => {
//     const user = await User.findById('5eecac773d1ec32eb030435b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()