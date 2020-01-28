import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-topics',
  templateUrl: './admin-topics.component.html',
  styleUrls: ['./admin-topics.component.css']
})
export class AdminTopicsComponent implements OnInit {

  //topics: Topic[];
  topics: Topic[] = [
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
    {description: 'link', dueDate: '01/01/2020', link: 'hppt://link'},
  ];
  

  constructor() { console.log("AdminTopicsComponent constructor"); }

  ngOnInit() { console.log(this.topics); console.log(this.getCurrentDate()); }

  updateTopics(topics: Topic[]) {
    console.log(topics);
    topics.forEach(topic => {
      //if (document.getElementById("topic").value 
      topics.push(topic);
    });
    this.showValues();
  }

  showValues() {
    console.log(this.topics);
  }

  validateDueDate(currentDate: Date) {
    this.topics.forEach(topic => {
      if(topic.dueDate.valueOf() > currentDate.toDateString().valueOf()) {
        //Highlight element in table
      }
    });
  }

  getCurrentDate() {
    let today = new Date();
    console.log("fecha actual" + today);
    return today;
  }

}
class Topic{
  constructor(public description: string, public dueDate: string, public link: string) { }
}
