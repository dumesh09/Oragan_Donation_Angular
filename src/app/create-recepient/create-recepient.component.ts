import { Component, OnInit } from '@angular/core';
import { DonorService } from "../donor.service";
import { donor } from "../donor";
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RecepientService } from '../recepient.service';

@Component({
  selector: 'app-create-recepient',
  templateUrl: './create-recepient.component.html',
  styleUrls: ['./create-recepient.component.css']
})
export class CreateRecepientComponent implements OnInit {

  donor: donor = new donor();
  submitted = false;
  constructor(
    private recipientService: RecepientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newRecepient(): void {
    this.submitted = false;

    this.donor = new donor();
  }

  saveRecipient() {
    this.recipientService.createRecepient(this.donor).subscribe(data => {
      console.log("Recipient:   "+data)
      this.donor = new donor();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.saveRecipient();  
  }

  gotoList() {
    this.router.navigate(['/donor']);
  }

}
