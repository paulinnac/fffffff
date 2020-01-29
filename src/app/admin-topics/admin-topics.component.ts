import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-topics',
  templateUrl: './admin-topics.component.html',
  styleUrls: ['./admin-topics.component.css']
})
/**
 * Class to manage "Topics Due Date" table
 */
export class AdminTopicsComponent implements OnInit {

  //topics: Topic[];
  topics: any[] = [
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

  ngOnInit() { console.log(this.topics); console.log(this.getCurrentDate().toDateString().valueOf()); }

  /**
   * // TODO: update values in this.topics array
   * Gets the values in Topics Due Date table and assigns them to this.topics array
   * @param topics 
   */
  updateTopics(topics: any[]) {
    console.log(topics);
    this.showValues();
  }

  /**
   * Displays current values of Topic objects contained in this.topics array on the console
   */
  showValues() {
    console.log(this.topics);
  }

  /**
   * // TODO: validate if topics' dates are close to due
   * Highlight topics in table in regards of their dueDate proximity to the current date
   * @param currentDate 
   */
  validateDueDate(currentDate: Date) {
    this.topics.forEach(topic => {
      if(topic.dueDate.valueOf() > currentDate.toDateString().valueOf()) {
        //Highlight element in table
      }
    });
  }

  /**
   * Returns a Date object containing the current date
   * @returns current date
   */
  getCurrentDate() {
    let currentDate = new Date();
    //console.log("fecha actual" + today);
    return currentDate;
  }

}
/**
 * Class that holds the data of a certain topic present in the table
 */
class Topic{
  constructor(public description: string, public dueDate: string, public link: string) { }
}
