import { Component, OnInit } from '@angular/core';
import { DonorService } from "../donor.service";
import { donor } from "../donor";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {

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
  list(){
    this.router.navigate(['donors']);
  }

}
