const service = require('./service')

const moviesave = async(req,res)=>
{
    const save = await service.savemovie(req.body)
    res.send('Movie stored successfully')
}

//1.
const get1 = async(req,res)=>
{
    const display = await service.getdata1(req.body)
    res.send(display)
}
//2.
const get2 = async(req,res)=>
{
    const display = await service.getdata2(req.body)
    res.send(display)
}
//3.
const get3 = async(req,res)=>
{
    const display = await service.getdata3(req.body)
    res.send(display)
}
//4.
const get4 = async(req,res)=>
{
    const display = await service.getdata4(req.body)
    res.send(display)
}
//5.
const get5 = async(req,res)=>
{
    const display = await service.getdata5(req.body)
    res.send(display)
}
//6.
const get6 = async(req,res)=>
{
    const display = await service.getdata6(req.body)
    res.send(display)
}
//7.
const get7 = async(req,res)=>
{
    const display = await service.getdata7(req.body)
    res.send(display)
}
//8.
const get8 = async(req,res)=>
{
    const display = await service.getdata8(req.body)
    res.send(display)
}
//9.
const get9 = async(req,res)=>
{
    const display = await service.getdata9(req.body)
    res.send(display)
}
//10.
const get10 = async(req,res)=>
{
    const display = await service.getdata10(req.body)
    res.send(display)
}
//11.
const get11 = async(req,res)=>
{
    const display = await service.getdata11(req.body)
    res.send(display)
}
//12.
const get12 = async(req,res)=>
{
    const display = await service.getdata12(req.body)
    res.send(display)
}
//13.
const get13 = async(req,res)=>
{
    const display = await service.getdata13(req.body)
    res.send(display)
}
//14.
const get14 = async(req,res)=>
{
    const display = await service.getdata14(req.body)
    res.send(display)
}
//15.
const get15 = async(req,res)=>
{
    const display = await service.getdata15(req.body)
    res.send(display)
}
//16.
const get16 = async(req,res)=>
{
    const display = await service.getdata16(req.body)
    res.send(display)
}
//17.
const get17 = async(req,res)=>
{
    const display = await service.getdata17(req.body)
    res.send(display)
}
//18.
const get18 = async(req,res)=>
{
    const display = await service.getdata18(req.body)
    res.send(display)
}
//19.
const get19 = async(req,res)=>
{
    const display = await service.getdata19(req.body)
    res.send(display)
}
//20.
const get20 = async(req,res)=>
{
    const display = await service.getdata20(req.body)
    res.send(display)
}
//21.
const get21 = async(req,res)=>
{
    const display = await service.getdata21(req.body)
    res.send(display)
}
//22.
const get22 = async(req,res)=>
{
    const display = await service.getdata22(req.body)
    res.send(display)
}
//23.
const get23 = async(req,res)=>
{
    const display = await service.getdata23(req.body)
    res.send(display)
}
//24.
const get24 = async(req,res)=>
{
    const display = await service.getdata24(req.body)
    res.send(display)
}


module.exports=
{
    moviesave,
    get1,
    get2,
    get3,
    get4,
    get5,
    get6,
    get7,
    get8,
    get9,
    get10,
    get11,
    get12,
    get13,
    get14,
    get15,
    get16,
    get17,
    get18,
    get19,
    get20,
    get21,
    get22,
    get23,
    get24
}