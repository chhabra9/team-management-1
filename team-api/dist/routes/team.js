"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid = __importStar(require("uuid"));
const route = (0, express_1.Router)();
const team = [
    { id: '1', firstName: "abc", lastName: "xyz", jobTitle: "mechanic", status: "onboard", team: "artizens" },
    { id: '2', firstName: "ram ", lastName: "charan", jobTitle: "driver", status: "onboard", team: "Quartz" },
    { id: '3', firstName: "Arman", lastName: "Malik", jobTitle: "sales", status: "onboard", team: "Invaders" },
    { id: '4', firstName: "Salman", lastName: "Khan", jobTitle: "Driver", status: "in Jail", team: "Quartz" },
    { id: '5', firstName: "Akshay", lastName: "Kumar", jobTitle: "mechanic", status: "onboard", team: "artizens" },
    { id: '6', firstName: "Sharukh", lastName: "Khan", jobTitle: "mechanic", status: "onboard", team: "artizens" },
];
route.get('/', (req, res) => {
    res.status(200).json(team);
});
route.get('/:id', (req, res) => {
    const result = team.find(team => team.id == req.params.id);
    if (result === null)
        res.status(404).json({ message: "team not found" });
    else
        res.status(200).json(result);
});
route.post('/', (req, res) => {
    const memberId = uuid.v4();
    ;
    const member = Object.assign(Object.assign({}, req.body), { id: memberId });
    console.log(member);
    team.push(member);
});
route.delete('/:id', (req, res) => {
    const result = team.find(team => team.id == req.params.id);
    if (result === null)
        res.status(404).json({ message: "team not found" });
    else {
        team.splice(team.indexOf(result), 1);
        console.log(team.indexOf(result));
        res.status(200).json(result);
    }
});
route.put('/:id', (req, res) => {
    const id = req.params.id;
    const result = team.find(team => team.id == id);
    if (req == null) {
        res.status(404).json({ message: 'teammember not found' });
    }
    else {
        console.log(req.body);
        team[team.indexOf(result)] = Object.assign(Object.assign({}, req.body), { id });
        console.log(team[team.indexOf(result)]);
        return res.status(200).json(req.body);
    }
});
exports.default = route;
