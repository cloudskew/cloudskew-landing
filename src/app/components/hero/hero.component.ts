import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  //
  appUrl = UrlConstants.appUrl;
  heroImageUrl = `${environment.cdnUrlPrefix}/assets/misc/landing-page-hero-3.png`;

  constructor() { }

  ngOnInit(): void {
  }
}
