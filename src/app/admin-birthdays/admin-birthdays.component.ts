import { Component, OnInit } from '@angular/core';
import { BirthdayBoy } from './BirthdayBoy';

@Component({
  selector: 'app-admin-birthdays',
  templateUrl: './admin-birthdays.component.html',
  styleUrls: ['./admin-birthdays.component.css']
})

export class AdminBirthdaysComponent implements OnInit {
  mockBirthdays: BirthdayBoy[] = [
    {id: 1, firstName: "Luis", lastName: "Perez", day: 2, month: 12,
      isEditing: false, prevFN: "", prevLN: "", birthdayString: "1998-12-02"},
    {id: 3, firstName: "Hector", lastName: "Gonzalez", day: 17, month: 2,
      isEditing: false, prevFN: "", prevLN: "", birthdayString: "1998-02-17"},
    {id: 6, firstName: "Salvador", lastName: "Gutierrez", day: 20, month: 4,
      isEditing: false, prevFN: "", prevLN: "", birthdayString: "1998-04-20"}
  ]

  constructor() { }

  ngOnInit() {
    //TODO: Get saved birthdays
  }


  addBirthday(first: string, last: string, date: string) : void {
    first = first.trim();
    last = last.trim();
    if(!first || !last || !date) return;
    let month_ = Number(date.substring(5, 7))
    let day_ = Number(date.substring(8, 10))
    console.log(date)
    this.mockBirthdays.push(
      {id: 999, firstName: first, lastName: last, day: day_, month: month_,
        isEditing: false, prevFN: "", prevLN: "", birthdayString: "1998-" + month_ + "-" + day_})
    console.log(this.mockBirthdays)
  }

  editBirthday(index: number) : void {
    console.log(index);
    this.mockBirthdays[index].isEditing = true;
    this.mockBirthdays[index].prevFN = this.mockBirthdays[index].firstName;
    this.mockBirthdays[index].prevLN = this.mockBirthdays[index].lastName;
    console.log(this.mockBirthdays[index]);
  }

  cancelUpdate(index: number) :  void {
    this.mockBirthdays[index].isEditing = false;
    this.mockBirthdays[index].firstName = this.mockBirthdays[index].prevFN;
    this.mockBirthdays[index].lastName = this.mockBirthdays[index].prevLN;
    this.mockBirthdays[index].prevFN = this.mockBirthdays[index].prevLN = "";

  }

  saveBirthday(index: number) : void {
    console.log("IN SAVEBIRTHDAY FUNC");
    console.log(index);
    console.log(this.mockBirthdays[index]);
    this.mockBirthdays[index].isEditing = false;
    let month_ = Number(this.mockBirthdays[index].birthdayString.substring(5, 7))
    let day_ = Number(this.mockBirthdays[index].birthdayString.substring(8, 10))
    this.mockBirthdays[index].month = month_;
    this.mockBirthdays[index].day = day_;
    console.log(this.mockBirthdays[index]);
  }

  removeBirthday(index: number) : void {
    console.log("Removing " + this.mockBirthdays[index]);
    this.mockBirthdays.splice(index, 1);
  }
}
