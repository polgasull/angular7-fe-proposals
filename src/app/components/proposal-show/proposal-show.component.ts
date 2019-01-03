import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Proposal } from '../../proposal';
import { ProposalService } from '../../services/proposal.service';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.scss']
})
export class ProposalShowComponent implements OnInit {

  proposal: Proposal;

  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
  ) { }

  @Input()

  ngOnInit() {
    this.getProposal();
  }

  getProposal() {
    this.route.params.subscribe(params => {
        if (params['id']) {
            this.proposalService.showProposal(+params['id'])
                .subscribe(
                  proposal => this.proposal = proposal,
                  );
        }
    });
  }
}
