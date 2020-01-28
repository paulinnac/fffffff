import { Component, OnInit } from '@angular/core';
import {Person} from './Person'

@Component({
  selector: 'app-dash-birthdays',
  templateUrl: './dash-birthdays.component.html',
  styleUrls: ['./dash-birthdays.component.css']
})



export class DashBirthdaysComponent implements OnInit {
 
  people : Person[]=[
    {name:"Victor", dob:"01/09/1995"},
    {name:"Leticia", dob:"01/08/1969"},
    {name:"Maria", dob:"01/23/1994"},
    {name:"Rosa", dob:"01/19/1993"},
    {name:"Carlos", dob:"01/30/1975"},
    {name:"Patricia", dob:"01/20/1989"},
    {name:"Alberto", dob:"01/22/1979"},
    {name:"Perla", dob:"01/13/1990"},
    {name:"Ivan", dob:"01/13/1986"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
