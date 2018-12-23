import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { ProposalNewComponent } from './components/proposal-new/proposal-new.component';
import { ProposalShowComponent } from './components/proposal-show/proposal-show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocumentsComponent },
  { path: 'proposals', component: ProposalListComponent },
  { path: 'proposals/new', component: ProposalNewComponent },
  { path: 'proposal/:id', component: ProposalShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
