import { Component, OnInit } from '@angular/core';

import { ProposalService } from '../../services/proposal.service';
import { Proposal } from '../../proposal';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.scss']
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal;
  newProposalTitle = 'Create proposal';
  submitted = false;

  constructor(
    private proposalService: ProposalService
  ) { }

  ngOnInit() {
  }

  createProposal() {
    this.submitted = true;
    this.proposalService.createProposal(this.proposal)
      .subscribe(
        data => true,
        error => console.log('Error saving proposal')
        );
  }

}
