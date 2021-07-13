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
      liveUrl: 'https://twitter.com/whaakman/status/1370035551231967235'
    },
    {
      name: 'John Doe',
      job: 'Cloud Solution Architect',
      testimonial: `"Aliqua pariatur id ex dolor laborum. Sunt ullamco consequat eu excepteur voluptate esse aliqua proident et nulla adipisicing exercitation commodo. Officia quis nisi deserunt nulla ad fugiat velit eu occaecat anim est."`,
      artwork: '../../../assets/square-icon.svg',
    },
    {
      name: 'John Doe',
      job: 'Software Director - Foo Bar Baz',
      testimonial: `"Anim magna ad qui enim sunt cupidatat in. Tempor cupidatat nisi enim ipsum ad exercitation."`,
      artwork: '../../../assets/plus-icon.svg',
    },
    {
      name: 'John Doe',
      job: 'Software Director - Foo Bar Baz',
      testimonial: `"Anim magna ad qui enim sunt cupidatat in. Tempor cupidatat nisi enim ipsum ad exercitation."`,
      artwork: '../../../assets/ellipse-icon.svg',
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
