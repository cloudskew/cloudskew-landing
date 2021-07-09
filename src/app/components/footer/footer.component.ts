import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //
  appUrl = UrlConstants.appUrl;
  blogUrl = UrlConstants.blogUrl;
  brandingLogoUrl = UrlConstants.brandingLogoUrl;
  docsUrl = UrlConstants.docsUrl;
  privacyPolicyUrl = UrlConstants.privacyPolicyUrl;
  statusUrl = UrlConstants.statusUrl;
  termsOfServiceUrl = UrlConstants.termsOfServiceUrl;

  constructor() { }

  ngOnInit(): void {
  }
}
