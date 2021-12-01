import { Component, OnInit } from '@angular/core';
import { DonorService } from "../donor.service";
import { donor } from "../donor";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-create-donor',
  templateUrl: './create-donor.component.html',
  styleUrls: ['./create-donor.component.css']
})
export class CreateDonorComponent implements OnInit {

  donor: donor = new donor();
  submitted = false;
  constructor(private donorService: DonorService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newDonor(): void {
    this.submitted = false;
    this.donor = new donor();
  }
  save() {
    this.donorService
    .createDonor(this.donor).subscribe(data => {
      console.log(data)
      this.donor = new donor();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/donor']);
  }


}
