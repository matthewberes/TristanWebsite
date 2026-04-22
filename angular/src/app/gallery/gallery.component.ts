import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  galleryImages = [
    { src: 'images/gallery/image1.jpg', alt: 'Image 1' },
    { src: 'images/gallery/image2.jpg', alt: 'Image 2' },
    { src: 'images/gallery/image3.jpg', alt: 'Image 3' },
    { src: 'images/gallery/image4.jpg', alt: 'Image 4' },
  ];

}
