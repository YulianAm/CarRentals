import { Injectable } from '@angular/core';
import { branch } from '../models/branch';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  branches: branch[];

  constructor(private http: HttpClient) { }


  
  getBranches (): Observable<branch[]> {
    const urlBranch: string = 'branches/find'; 
    
    console.log('fethched branches');
    return this.http.get<branch[]>(baseUrl + urlBranch)
      .pipe(
        //tap(_ => console.log('fetched car types')) //,
        //catchError(this.handleError)
      );



      
}

}