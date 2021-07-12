import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //
  missionStatement = `"My mission is to empower users to do their best work"`;
  name = 'Mithun Shanbhag';
  title = 'CEO - Skewed Ventures';
  linkedinUrl = 'https://www.linkedin.com/in/mithunshanbhag/';
  twitterUrl = 'https://twitter.com/MithunShanbhag';

  constructor() { }

  ngOnInit(): void {
  }
}
