import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Proposal } from '../proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  private proposal_url: string = environment.proposalsURL;

  constructor(
    private http: HttpClient
  ) { }

  getProposals() {
     return this.http.get<Proposal[]>(`${this.proposal_url}/proposals`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  showProposal(id: number) {
    return this.http.get(`${this.proposal_url}/proposals/${id}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  createProposal(proposal) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
    return this.http.post(`${this.proposal_url}/proposals`, JSON.stringify(proposal), {headers: headers })
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
