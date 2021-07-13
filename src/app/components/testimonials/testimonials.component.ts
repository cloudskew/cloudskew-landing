import { Component, OnInit } from '@angular/core';
import { TestimonialItem } from './testimonialItem';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  //
  testimonialItems: TestimonialItem[] = [
    {
      name: 'Wesley Haakman',
      job: 'Microsoft Azure MVP',
      testimonial: `"I absolutely fell in love with CloudSkew. Things you need are.. just.. there.."`,
      artwork: '../../../assets/triangle-icon.svg',
      liveUrl: 'https://twitter.com/whaakman/status/1370035551231967235',
    },
    {
      name: 'John Doe',
      job: 'Cloud Solution Architect',
      testimonial: `"Aliqua pariatur id ex dolor laborum. Sunt ullamco consequat eu excepteur voluptate esse aliqua proident et nulla adipisicing exercitation commodo. Officia quis nisi deserunt nulla ad fugiat velit eu occaecat anim est."`,
      artwork: '../../../assets/square-icon.svg',
    },
    {
      name: 'Anand Kumar R',
      job: 'Cloud Solution Architect @ Microsoft',
      testimonial: `"So I used cloudskew.com for the first time and it was a breeze, super easy and intuitive to create architecture diagrams! Love it."`,
      artwork: '../../../assets/plus-icon.svg',
      liveUrl: 'https://twitter.com/ranand12/status/1278370886198886406',
    },
    {
      name: 'Swaminathan Vetri',
      job: 'Microsoft MVP | Architect @ Maersk',
      testimonial: `"CloudSkew is a super cool product. Neat and clean to draw cloud arch diagrams. Kudos to @MithunShanbhag for this great product."`,
      artwork: '../../../assets/ellipse-icon.svg',
      liveUrl: 'https://twitter.com/svswaminathan/status/1224358759364845569',
    },
    {
      name: 'John Doe',
      job: 'Cloud Solution Architect',
      testimonial: `"Aliqua pariatur id ex dolor laborum. Sunt ullamco consequat eu excepteur voluptate esse aliqua proident et nulla adipisicing exercitation commodo. Officia quis nisi deserunt nulla ad fugiat velit eu occaecat anim est."`,
      artwork: '../../../assets/multiply-icon.svg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
