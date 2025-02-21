import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  
  servicecarddata =[
    {
      "title": "Paid",
       "substitle":"Marketing",
      "img": "../../../../assets/images/pm.png",
    },
    {
      "title": "Social Media  ",
      "substitle":"Marketing",
      "img": "../../../../assets/images/smm.png",
   
    },
    {
      "title": "Performance",
      "substitle":"Marketing",
      "img": "../../../../assets/images/pmm.png"
    },
    {
      "title": "Search engine",
      "substitle":"Marketing",
      "img":"../../../../assets/images/sem.png"
    },
    {
      "title": "E-commerce ",
       "substitle":"Marketing",
      "img": "../../../../assets/images/ec.png",
    },
    {
      "title": "Web",
       "substitle":"Development",
      "img": "../../../../assets/images/wb.png",
    }
  ];
  
  cardData= this.servicecarddata;
  

  public dummyObjectArray: any = [
    {
      id: 56,
      title: 'Paid Marketing',
      description: 'Engage your customers promptly and effectively with a data-driven PPC campaign. With our AdWords certified PPC Specialists, you can feel confident that your campaign is in the hands of skilled professionals. Our team crafts targeted ad copy fine-tunes your bidding strategies and device targeting and tracks your ROI for each keyword. Additionally, we capitalize on seasonal trends to enhance product promotion and attract substantial leads and traffic'
    },
    {
      id: 63,
      title: 'Social Media Marketing',
      description: 'Enhance your brand visibility online and forge meaningful relationships with your customers and followers through social media marketing (SMM).At Bhiive Internet Marketing Agency, we offer comprehensive social media marketing services tailored for small businesses, large enterprises, and multi-location companies. Whether you are launching a startup or leading a Fortune 500 firm, our team of social media marketing experts is here to support your campaign. Collaborate with us to elevate your brands presence and strengthen its credibility!'
      
    },
    {
      id: 72,
      title: 'Performance Marketing',
      description: 'Performance Marketing goes beyond merely advertising your product; it’s about engaging in creative promotion. Team up with Bhiive today to connect with your customers ahead of your competitors. Boundary specializes in developing strategies that surpass the competition and foster sustainable growth and scalability.'
    },
    {
      id: 83,
      title: 'SEM',
      description: 'In the fast-paced and competitive landscape of todays digital age, search engines have emerged as essential tools for various industries and organizations. They serve as customer service platforms that enable users to find a wide range of information online, such as news articles, blog posts, and brand offerings, empowering them to make well-informed choices.Are you ready to launch your SEM advertising campaign? Our search engine marketing agency will guide you on the pivotal role of search engines in SEM and show you how your business can leverage them to accelerate your customers purchasing journey. Discover more about search engine advertising and enhance your marketing effectiveness in no time!'
    },
    {
      id: 83,
      title: 'Ecommerce Marketing',
      description: 'The eCommerce sector experiences a remarkable 23 percent year-over-year revenue growth. Capitalize on the multitude of opportunities within the eCommerce landscape to promote your products and provide your customers with 24/7 convenience. Our internet marketing agency offers eCommerce SEO and PPC solutions designed to boost top-of-funnel traffic to your website. We focus on increasing product reviews, enhancing your product pages, and tailoring your marketing strategies to meet your customers needs.'
    },
    {
      id: 83,
      title: 'Web development',
      description: 'Bhiive develops tailored, mobile-responsive, and search engine optimized websites designed to align with your business goals and enhance your digital marketing efforts. We establish a visual hierarchy that emphasizes key elements of your site, guiding visitors towards your desired actions. Our web design specialists implement clear calls-to-action (CTAs), steer clear of carousels and rotating sliders, streamline form fields, and craft content specifically for your target audience'
    }
  ]
  
  
  
  toogleModal(listIndex: number, expanded?: boolean): void {
    // reset
    this.dummyObjectArray.forEach((a:any, index:any) => {
      Object.assign(this.dummyObjectArray[index], { expanded: false });
    });
  
    // open modal for the the single clicked dummyObject
    // unless modal already open
    if (expanded) {
      return 
    }
    Object.assign(this.dummyObjectArray[listIndex], { expanded: true },);
  
  }
}
