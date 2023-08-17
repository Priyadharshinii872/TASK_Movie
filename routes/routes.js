const exp =require('express')
const router = exp.Router()


const functions = require('../controller/movies/index')

let routes=(app)=>
{

    router.post('/save',functions.moviesave)
    router.post('/get1',functions.get1)
    router.post('/get2',functions.get2)
    router.post('/get3',functions.get3)
    router.post('/get4',functions.get4)
    router.post('/get5',functions.get5)
    router.post('/get6',functions.get6)
    router.post('/get7',functions.get7)
    router.post('/get8',functions.get8)
    router.post('/get9',functions.get9)
    router.post('/get10',functions.get10)
    router.post('/get11',functions.get11)
    router.post('/get12',functions.get12)
    router.post('/get13',functions.get13)
    router.post('/get14',functions.get14)
    router.post('/get15',functions.get15)
    router.post('/get16',functions.get16)
    router.post('/get17',functions.get17)
    router.post('/get18',functions.get18)
    router.post('/get19',functions.get19)
    router.post('/get20',functions.get20)
    router.post('/get21',functions.get21)
    router.post('/get22',functions.get22)
    router.post('/get23',functions.get23)
    router.post('/get24',functions.get24)
    
    


    app.use('/api',router)
}


module.exports=
routes