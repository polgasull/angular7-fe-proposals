import { Component, OnInit } from '@angular/core';
import { Document } from '../../document';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  docTitle = 'Documents';
  errorMessage: string;
  documents: Document[];

  constructor( private documentService: DocumentService ) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments()
    .subscribe(
      documents => this.documents = documents,
      error => this.errorMessage = <any>error
    );
  }
}
