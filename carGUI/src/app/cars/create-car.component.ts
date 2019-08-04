import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarsService } from '../services/car.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  cars: Car[];
  base64textString: String="";

  car: Car = {
    carNumber: null,
    carType: null,
    imagePath: null,
    isAvailable: null,
    isUndamaged: null,
    mileage: null
  }
  
 

 
  constructor(private carsService: CarsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.Get();
  }

  
  Create(car: Car): void {

 this.car.image = this.base64textString;

    //this.car.imagePath = "";

      console.log('created car:' + car);
      this.carsService.CreateCar(car).subscribe();
       

alert("car created");

        
      

  }

  Get(): void {
    this.carsService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();
  
      reader.onload =this._handleReaderLoaded.bind(this);
  
      reader.readAsBinaryString(file);
  }
  }
  
  _handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
          //console.log(btoa(binaryString));
  }
 
}
