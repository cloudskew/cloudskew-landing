import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Configuration, init as typewriterInit } from 'ityped';
import { PageTitleConstants } from 'src/app/constants/pageTitleConstants';
import { SolutionIds } from 'src/app/constants/solutionIds';
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
    private route: ActivatedRoute,
    private titleService: Title,
    // details: https://angular.io/guide/universal#working-around-the-browser-apis
    @Inject(DOCUMENT) private document: HTMLDocument,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  //#region lifecycle hooks

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const pageTitle = this.getPageTitle(id);
        this.titleService.setTitle(pageTitle);
        this.heroImageUrl = this.getHeroImageUrl(id);
      }
      if (isPlatformBrowser(this.platformId)) {
        this.enableTypewriter();
      }
    });
  }

  //#endregion

  //#region private helper methods

  private getHeroImageUrl(id: string): string {
    switch (id.trim().toLowerCase()) {
      case SolutionIds.AWS1:
      case SolutionIds.AWS2:
        return `${environment.cdnUrlPrefix}/assets/misc/landing-page-hero-2.jpg`;
      default:
        return this.heroImageUrl;
    }
  }

  private getPageTitle(id: string): string {
    switch (id.trim().toLowerCase()) {
      case SolutionIds.AWS1:
      case SolutionIds.AWS2:
        return PageTitleConstants.awsTitle;
      default:
        return PageTitleConstants.defaultTitle;
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
        'Network',
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

  //#endregion
}
