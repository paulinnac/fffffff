import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-topics',
  templateUrl: './admin-topics.component.html',
  styleUrls: ['./admin-topics.component.css']
})
export class AdminTopicsComponent implements OnInit {

  topics: Topic[];

  constructor() { }

  ngOnInit() {
  }

  updateTopics(topics: Topic[]) {
    this.topics = topics;
  }

}
class Topic{
  dueDate: string;
  description: String;
}
