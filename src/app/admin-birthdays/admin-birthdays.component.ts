import { Component, OnInit } from '@angular/core';
import { BirthdayBoy } from './BirthdayBoy';

@Component({
  selector: 'app-admin-birthdays',
  templateUrl: './admin-birthdays.component.html',
  styleUrls: ['./admin-birthdays.component.css']
})

export class AdminBirthdaysComponent implements OnInit {
  monthNames: string[]
  month: string
  mockBirthdays: BirthdayBoy[] = [
    {id: 1, firstName: "Luis", lastName: "Perez", day: 2},
    {id: 3, firstName: "Hector", lastName: "Gonzalez", day: 17},
    {id: 6, firstName: "Salvador", lastName: "Gutierrez", day: 20}
  ]

  constructor() { }

  ngOnInit() {
    this.monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
    this.month = this.monthNames[new Date().getMonth()];
  }


  addBirthday(first: string, last: string, day_: number) : void {
    first = first.trim();
    last = last.trim();
    if(!first || !last || !day_) return;

    this.mockBirthdays.push({id: 999, firstName: first, lastName: last, day: day_})
    console.log(this.mockBirthdays)
  }

  editBirthday(index: number) : void {
    console.log(index);
  }

  removeBirthday(index: number) : void {
    console.log("Removing " + this.mockBirthdays[index]);
    this.mockBirthdays.splice(index, 1);
  }
}
