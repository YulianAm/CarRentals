import { Component, OnInit } from '@angular/core';

import { BranchService } from '../services/branch.service';
import { branch } from '../models/branch';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { SearchFormDataService } from '../services/search-form-data.service';
import { searchFormStage1 } from '../models/searchFormStage1';
import { ifStmt } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-search-home-page',
  templateUrl: './search-home-page.component.html',
  styleUrls: ['./search-home-page.component.css']
})
export class SearchHomePageComponent implements OnInit {
  pickUpDate: Date;
  returnDate: Date;
  branch: branch;
  branches: branch[];


  constructor(
    private carSerivce: CarsService,
    private branchService: BranchService,
    private router: Router,
    private form: SearchFormDataService
    
    //test
    
    ) { }

  ngOnInit() {
    this.GetBranches();
  }
//
  GetBranches(): void {
    this.branchService.getBranches().subscribe( (brnch) => {
      //debugger;

      this.branches = brnch;
      //console.log(this.branches);
    });
  }
  InitialData(a: any): void {
    console.log(a);

  }
 /*
  RouterNavigateToCars(a: any): void {
    console.log(a);
    var searchInfo = this.form.formData;

    searchInfo.returnDate = this.returnDate;
    searchInfo.pickUpDate = this.pickUpDate;
    searchInfo.branch = this.branch;

    

  }*/
  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }

  onFormSubmit(userForm: NgForm) {


    var pickUpDate = userForm.controls['pickUpDate'].value;
    var returnDate = userForm.controls['returnDate'].value;
    var branch = userForm.controls['branch'].value;

    var x = this.form.formData;

 



    x.pickUpDate =  this.parseDate(pickUpDate);
    x.returnDate = this.parseDate(returnDate);
    x.branch = branch;


    console.log(x.pickUpDate, x.branch , x.returnDate );
    //console.log('Form Submitted:' + userForm.submitted);
    //console.log(x.returnDate.constructor.name);

    //console.log(this.form.formData.returnDate   );

    var diffMillisec = this.form.formData.returnDate.getTime() - this.form.formData.pickUpDate.getTime();


    this.form.formData.totalNumbweOfDays = Math.round(Math.abs(diffMillisec/(1000*60*60*24)));

   

    this.router.navigate(['/rentCar']);




    
}


}
