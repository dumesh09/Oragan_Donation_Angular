import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DonorService } from "../donor.service";
import { donor } from "../donor";
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {

  donor: Observable<donor[]>;
  constructor(private donorService: DonorService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.donor = this.donorService.getDonorsList();
  }
  deleteDonor(id: number) {
    this.donorService.deleteDonor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  donorDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
