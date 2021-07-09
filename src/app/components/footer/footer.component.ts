import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  appUrl = environment.appUrl;
  blogUrl = environment.blogUrl;
  brandingLogoUrl = `${environment.cdnUrlPrefix}/assets/logos/cloudskew-logo.png`
  docsUrl = environment.docsUrl;
  privacyPolicyUrl = `${environment.docsUrl}/about/privacy-policy.html`;
  statusUrl = `${environment.docsUrl}/status/current-status.html`;
  termsOfServiceUrl = `${environment.docsUrl}/about/terms-of-service.html`;

  constructor() { }

  ngOnInit(): void {
  }

}
