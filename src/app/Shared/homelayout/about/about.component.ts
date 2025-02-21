import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {

  public modalDisplayStyle: string | undefined;
  public dummyObjectExpandedIndex: number | undefined;

  constructor() { }
 aboutcarddata =[
  {
    "title": "Connect",
    "description": "Building Meaningful Connections: Connecting with the target audience is crucial in digital marketing. This involves leveraging various platforms and channels to establish meaningful connections with potential customers and existing audiences. ",
    "image" : "../../../../assets/images/con.png",
  },
  {
    "title": "Convert",
    "description": "Driving Conversions: The process of converting leads into customers is a fundamental aspect of digital marketing. This involves employing strategies to guide potential customers through the sales funnel and encouraging them to take desired actions, such as making a purchase or signing up for a service.",
    "image" : "../../../../assets/images/convert.png"
  },
  {
    "title": "Conquer",
    "description": "Establishing Market Presence: Conquering the digital landscape involves creating a strong market presence and effectively presenting a brand to the target audience. This includes utilizing marketing and advertising channels to highlight the most attractive features of products and make them appealing to the target group ",
    "image" : "../../../../assets/images/conquer.png"
  },
];

cardData= this.aboutcarddata;
//modaldata: any;




}
