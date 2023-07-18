import { Router } from "express";
const router=Router();
const users:any[]=[];
router.post('/register',(req,res)=>{
    const result=users.find(user=>user.email===req.body.email);
    console.log(result);
if(result===undefined){
    users.push(req.body);
    res.status(200).json('success')
}else{
    res.status(400).json('email already registered');
}
})
router.post('/login',(req,res)=>{
    const result=users.find(user=>user.email===req.body.email);
    if(result===null){
        res.status(400).json({message:"email not found"})
    }
    else if(users[users.indexOf(result)].password ===req.body.password ){
            res.status(200).json({message:"success"});
    }
    else{
        res.status(400).json({message:"wrong credentials"})
    }
})
export default router;