import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  tab4:any
  showDiv = {
    uiux : true,
    webdesign : false,
    digitalmarketing : false,
    webdevelop:false
  }
  onClick(check:any){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else if(check==3){
          this.tab = 'tab3';
        }else{
          this.tab = 'tab4';
        }        
      
    }
}
