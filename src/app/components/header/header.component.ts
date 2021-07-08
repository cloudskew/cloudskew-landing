import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component-desktop.css',
    './header.component-mobile.css',
  ]
})
export class HeaderComponent implements OnInit {

  appUrl = environment.appUrl;
  brandingLogoUrl = `${environment.cdnUrlPrefix}/assets/logos/cloudskew-logo.png`

  constructor() { }

  ngOnInit(): void {
  }

}
