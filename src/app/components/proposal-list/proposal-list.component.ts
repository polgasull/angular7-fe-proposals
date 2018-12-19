import { Component, OnInit } from '@angular/core';
import { Proposal } from '../../proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.scss']
})
export class ProposalListComponent implements OnInit {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150,
  120, 15, 'jordan@devcamp.com');
  proposalTwo: Proposal = new Proposal(99, 'XDF Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150,
  120, 15, 'jordan@devcamp.com');
  proposalThree: Proposal = new Proposal(300, 'Some Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150,
  120, 15, 'jordan@devcamp.com');

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];

  constructor() { }

  ngOnInit() {
  }

}
