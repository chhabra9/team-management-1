import { Router } from "express";
import * as uuid from 'uuid';

const route:Router=Router();
const team:any[]=[
    {id:'1',firstName:"abc",lastName:"xyz",jobTitle:"mechanic",status:"onboard",team:"artizens"},
    {id:'2',firstName:"ram ",lastName:"charan",jobTitle:"driver",status:"onboard",team:"Quartz"},
    {id:'3',firstName:"Arman",lastName:"Malik",jobTitle:"sales",status:"onboard",team:"Invaders"},
    {id:'4',firstName:"Salman",lastName:"Khan",jobTitle:"Driver",status:"in Jail",team:"Quartz"},
    {id:'5',firstName:"Akshay",lastName:"Kumar",jobTitle:"mechanic",status:"onboard",team:"artizens"},
    {id:'6',firstName:"Sharukh",lastName:"Khan",jobTitle:"mechanic",status:"onboard",team:"artizens"},
]
route.get('/',(req,res)=>{
    res.status(200).json(team);
})
route.get('/:id',(req,res)=>{
    const result=team.find(team=>team.id==req.params.id);
    if(result===null)
    res.status(404).json({message:"team not found"});
    else
    res.status(200).json(result);
}
)
route.post('/',(req,res)=>{
    const memberId = uuid.v4();;
    const member={...req.body,id:memberId}
    console.log(member);
    team.push(member);
})
route.delete('/:id',(req,res)=>{
    const result=team.find(team=>team.id==req.params.id);
    if(result===null)
    res.status(404).json({message:"team not found"});
    else
    {
        team.splice(team.indexOf(result),1);

        console.log(team.indexOf(result))
        res.status(200).json(result);
    }
})
route.put('/:id',(req,res)=>{
    const id=req.params.id;
   const result=team.find(team=>team.id==id)
   if(req==null){
    res.status(404).json({message:'teammember not found'})
   }
    else{
        console.log(req.body);
        team[team.indexOf(result)]={...req.body,id};
        console.log(team[team.indexOf(result)]);
        return res.status(200).json(req.body);
    }
})
export default route;