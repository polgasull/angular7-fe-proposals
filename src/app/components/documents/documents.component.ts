import { Component, OnInit } from '@angular/core';
import { Document } from '../../document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  docTitle = 'My docs';

  documents: Document[] = [
    {
      title: 'My first Doc',
      description: 'lorem ipsum bla bla',
      file_url: 'http://google.com',
      updated_at: '11/07/18',
      image_url: 'http://innroute.com'
    },
    {
      title: 'My Second Doc',
      description: 'lorem ipsum bla bla',
      file_url: 'http://google.com',
      updated_at: '11/07/18',
      image_url: 'http://innroute.com'
    },
    {
      title: 'My third Doc',
      description: 'lorem ipsum bla bla',
      file_url: 'http://google.com',
      updated_at: '11/07/18',
      image_url: 'http://innroute.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
