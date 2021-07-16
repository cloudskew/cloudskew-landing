import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Configuration, init as typewriterInit } from 'ityped';
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

  constructor(
    // details: https://angular.io/guide/universal#working-around-the-browser-apis
    @Inject(DOCUMENT) private document: HTMLDocument,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.enableTypewriter();
    }
  }

  private enableTypewriter() {
    const elem: Element = this.document.querySelector('#cs-section-title-cursor') as Element;
    const config: Configuration = {
      strings: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Kubernetes',
        'Oracle Cloud',
        'Alibaba Cloud',
        'IBM Cloud',
        'Elastic Cloud',
        'Cloud Architecture',
      ],
      typeSpeed: 100,
      startDelay: 2000,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    };

    typewriterInit(elem, config);
  }
}
