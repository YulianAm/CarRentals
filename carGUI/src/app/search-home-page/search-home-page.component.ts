import { Component, OnInit } from '@angular/core';

import { BranchService } from '../services/branch.service';
import { branch } from '../models/branch';
import { CarsService } from '../services/car.service';


@Component({
  selector: 'app-search-home-page',
  templateUrl: './search-home-page.component.html',
  styleUrls: ['./search-home-page.component.css']
})
export class SearchHomePageComponent implements OnInit {
  pickUpDate: Date;
  returnDate: Date;
  branches: branch[];

  constructor(
    private carSerivce: CarsService,
    private branchService: BranchService
    
    //test
    
    ) { }

  ngOnInit() {
  }

  GetBranches(): void {
    this.branchService.getBranches().subscribe((brnch) => {
      //debugger;

      this.branches = brnch;
      console.log(this.branches);
    });
  }

}
