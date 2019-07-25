import { Component, OnInit } from '@angular/core';

import { BranchService } from '../services/branch.service';
import { branch } from '../models/branch';
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { SearchFormDataService } from '../services/search-form-data.service';
import { searchFormStage1 } from '../models/searchFormStage1';


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
 
  RouterNavigateToCars(a: any): void {
    console.log(a);
    var searchInfo = this.form.formData;

    searchInfo.returnDate = this.returnDate;
    searchInfo.pickUpDate = this.pickUpDate;
    searchInfo.branch = this.branch;

    

  }
  
  onFormSubmit(userForm: NgForm) {


    var pickUpDate = userForm.controls['pickUpDate'].value;
    var returnDate = userForm.controls['returnDate'].value;
    var branch = userForm.controls['branch'].value;

    var x = this.form.formData;



    x.pickUpDate =  pickUpDate;
    x.returnDate = returnDate;
    x.branch = branch;

    console.log(x.pickUpDate, x.branch , x.returnDate );
    console.log('Form Submitted:' + userForm.submitted);

    this.router.navigate(['/rentCar']);




    
}


}
