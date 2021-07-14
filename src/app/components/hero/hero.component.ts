import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { environment } from 'src/environments/environment';
import Typed from 'typed.js';


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

    var typedjsOptions = {
      strings: [
        '???',
        'AWS',
        'Azure',
        'GCP',
        'Kubernetes',
        'Oracle Cloud',
        'Alibaba Cloud',
        'Elastic Cloud',
      ],
      typeSpeed: 100,
      startDelay: 5000,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    };

    var typedjs = new Typed('.cs-section-title-typedjs', typedjsOptions);
  }
}
