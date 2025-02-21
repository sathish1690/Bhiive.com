import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ResquestquoteComponent } from './resquestquote/resquestquote.component';
import { ServiceComponent } from './service/service.component';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [CarouselModule,AboutComponent, ServiceComponent, FeedbackComponent, ProjectsComponent, ResquestquoteComponent ],
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.scss'
})
export class HomelayoutComponent {
 

}
