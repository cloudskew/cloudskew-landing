import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { PricingTable } from './pricingTable';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  //
  appUrl = UrlConstants.appUrl;

  pricingPlans: PricingTable[] = [
    // free plan details
    {
      title: "Free",
      price: "$0",
      subtitle: "Free forever",
      features: [
        {
          featureText: "3 diagrams",
        },
        {
          featureText: "3 templates",
          featureContext: "Create up to 3 reusable diagram templates",
        },
        {
          featureText: "Standard support",
        },
        {
          featureText: "Infinite canvas size",
        },
        {
          featureText: "Autosaved to cloud",
        },
        {
          featureText: "Built-in document editor",
        },
        {
          featureText: "Print, export, share",
        },
      ],
    },

    // professional plan details
    {
      title: "Professional",
      price: "$36 / year",
      subtitle: "Limited time offer",
      features: [
        {
          featureText: "Unlimited diagrams",
        },
        {
          featureText: "Unlimited templates",
          featureContext: "Create as many reusable diagram templates as needed",
        },
        {
          featureText: "Priority support",
          featureContext: "24 hr response time for support requests",
        },
        {
          featureText: "Infinite canvas size",
        },
        {
          featureText: "Autosaved to cloud",
        },
        {
          featureText: "Built-in document editor",
        },
        {
          featureText: "Print, export, share",
        },
      ],
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
