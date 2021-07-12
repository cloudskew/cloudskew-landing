import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //
  quote = '"Put an arbitrarily long sentence or quote here!"';
  name = 'Mithun Shanbhag';
  title = 'Skewed Ventures | Ex-Microsoft';
  linkedinUrl = 'https://www.linkedin.com/in/mithunshanbhag/';
  twitterUrl = 'https://twitter.com/MithunShanbhag';

  constructor() { }

  ngOnInit(): void {
  }
}
