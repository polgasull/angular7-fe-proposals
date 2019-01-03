import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from '../../proposal';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.scss']
})
export class ProposalListComponent implements OnInit {
  errorMessage: string;
  proposals: Proposal[];

  constructor(private proposalService: ProposalService, private router: Router) { }

  ngOnInit() {
    this.getProposals();
  }

  getProposals() {
    this.proposalService.getProposals()
    .subscribe(
      proposals => this.proposals = proposals,
      error => this.errorMessage = <any>error
    );
  }

  goToShow(proposal: Proposal) {
    const link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }

}
