import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: false,
    margin:10,
    center: true,
    autoHeight:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
