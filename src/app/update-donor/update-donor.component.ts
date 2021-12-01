import { Component, OnInit } from '@angular/core';
import { DonorService } from "../donor.service";
import { donor } from "../donor";
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit {

  id: number;
  donor: donor;

  constructor(private route: ActivatedRoute,private router: Router,
    private donorService: DonorService) { }

  ngOnInit(){
    this.donor = new donor();

    this.id = this.route.snapshot.params['id'];
    
    this.donorService.getDonor(this.id)
      .subscribe(data => {
        console.log(data)
        this.donor = data;
      }, error => console.log(error));
  }
  updateDonor() {
    this.donorService.updateDonor(this.id, this.donor)
      .subscribe(data => {
        console.log(data);
        this.donor = new donor();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateDonor();    
  }

  gotoList() {
    this.router.navigate(['/donors']);
  }

}
