import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  description = 'Some text goes here.';

  constructor() { }

  ngOnInit() {
  }

}
