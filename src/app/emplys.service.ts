import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmplysService {

  employees = [
    {
        name: "John Doe",
        age: 30,
        position: "Software Engineer",
        department: "Engineering"
    },
    {
        name: "Jane Smith",
        age: 28,
        position: "UI/UX Designer",
        department: "Design"
    },
    {
        name: "Michael Johnson",
        age: 35,
        position: "Project Manager",
        department: "Management"
    },
    {
        name: "Emily Brown",
        age: 25,
        position: "Marketing Specialist",
        department: "Marketing"
    },
    {
        name: "David Wilson",
        age: 32,
        position: "Data Analyst",
        department: "Analytics"
    }
];
  constructor() { }

  details(){
    return this.employees
  }
}
