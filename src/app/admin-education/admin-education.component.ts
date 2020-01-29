import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-education',
  templateUrl: './admin-education.component.html',
  styleUrls: ['./admin-education.component.css']
})
/**
 * Class to manage "Education Due Date" table
 */
export class AdminEducationComponent implements OnInit {

  //topics: Topic[];
  courses: any[] = [
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
  
  constructor() { console.log("AdminEducationComponent constructor"); }

  ngOnInit() { console.log(this.courses); console.log(this.getCurrentDate().toDateString().valueOf()); }

  /**
   * // TODO: update values in this.courses array
   * Gets the values in Education Due Date table and assigns them to this.courses array
   * @param topics 
   */
  updateCourses(courses: any[]) {
    console.log(courses);
    this.showValues();
  }

  /**
   * Displays current values of Course objects contained in this.courses array on the console
   */
  showValues() {
    console.log(this.courses);
  }

  /**
   * // TODO: validate if courses' dates are close to due
   * Highlight courses in table in regards of their dueDate proximity to the current date
   * @param currentDate 
   */
  validateDueDate(currentDate: Date) {
    this.courses.forEach(course => {
      if(course.dueDate.valueOf() > currentDate.toDateString().valueOf()) {
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
 * Class that holds the data of a certain course present in the table
 */
class Course{
  constructor(public description: string, public dueDate: string, public link: string) { }
}
