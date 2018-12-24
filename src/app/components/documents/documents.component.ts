import { Component, OnInit } from '@angular/core';
import { Document } from '../../document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  docTitle = 'Docs Title';

  documents: Document[] = [
    {
      title: 'My first Doc',
      description: 'lorem ipsum bla bla',
      file_url: 'http://google.com',
      updated_at: '11/07/18',
      image_url: 'https://artisantalent.com/wp-content/uploads/2012/04/mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: 'My Second Doc',
      description: 'lorem ipsum bla bla',
      file_url: 'http://google.com',
      updated_at: '11/07/18',
      image_url: 'https://cdn.shopify.com/s/files/1/0533/2089/files/freelancer-tools.jpg?v=1516733249'
    },
    {
      title: 'My third Doc',
      description: 'lorem ipsum bla bla',
      file_url: 'http://google.com',
      updated_at: '11/07/18',
      image_url: 'https://collectivehub.com/wp-content/uploads/2016/07/Things_successful_freelancers_do_at_home_body-1.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
