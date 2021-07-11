import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component-desktop.css',
    './header.component-mobile.css',
  ]
})
export class HeaderComponent implements OnInit {

  //
  appUrl = UrlConstants.appUrl;
  blogUrl = UrlConstants.blogUrl;
  brandingLogoUrl = UrlConstants.brandingLogoUrl;
  docsUrl = UrlConstants.docsUrl;
  statusUrl = UrlConstants.statusUrl;
  title = "CloudSkew";

  constructor() { }

  ngOnInit(): void {
  }
}
