import { Component, OnInit } from '@angular/core';
import { GalleryItem } from './galleryItem';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  // @todo
  galleryItems: GalleryItem[] = [
    {
      title: 'Kubernetes',
      description: 'Kubernetes resource map',
      imgUrl: '',
      shareUrl: '',
    },
    {
      title: 'AWS',
      description: 'Smart products platform',
      imgUrl: '',
      shareUrl: '',
    },
    {
      title: 'Azure',
      description: '',
      imgUrl: '',
      shareUrl: '',
    },
    {
      title: 'GCP',
      description: '',
      imgUrl: '',
      shareUrl: '',
    },
    {
      title: 'Alibaba Cloud',
      description: '',
      imgUrl: '',
      shareUrl: '',
    },
    {
      title: 'Azure',
      description: '',
      imgUrl: '',
      shareUrl: '',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
