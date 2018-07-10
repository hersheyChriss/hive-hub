import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Nom } from './nom';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class NomService {

  private nomsUrl = 'api/nominations/';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET nominations from the server */
  getNoms (): Observable<Nom[]> {
    return this.http.get<Nom[]>(this.nomsUrl).pipe(
      tap(nom => this.log(`fetched noms`)),
      catchError(this.handleError('getNoms', []))
    );
  }

  /** GET nomination by id. Will 404 if id not found */
  getNom(name: string): Observable<Nom> {
    const url = `${this.nomsUrl}/${name}`;
    return this.http.get<Nom>(url).pipe(
      tap(_ => this.log(`fetched nomination name=${name}`)),
      catchError(this.handleError<Nom>(`getNom name=${name}`))
    );
  }


  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addNom(nom: Nom): Observable<Nom> {
    return this.http.post<Nom>(this.nomsUrl, nom, httpOptions).pipe(
      tap((nom: Nom) => this.log(`added nom`)),
      catchError(this.handleError<Nom>('addNom'))
    );
  }


  /** PUT: update the hero on the server */
  updateNom(nom: Nom): Observable<any> {
    return this.http.put(this.nomsUrl, nom, httpOptions).pipe(
      tap(_ => this.log(`updated nom`)),
      catchError(this.handleError<any>('updateNom'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a NomService message with the MessageService */
  private log(message: string) {

  }
}
