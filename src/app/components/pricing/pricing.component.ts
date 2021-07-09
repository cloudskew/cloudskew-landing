import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  //
  appUrl = UrlConstants.appUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
