import { Injectable } from '@angular/core';
import { searchFormStage1 } from '../models/searchFormStage1';

@Injectable({
  providedIn: 'root'
})
export class SearchFormDataService {

  public formData: searchFormStage1 = new searchFormStage1();

  constructor() { }
}
