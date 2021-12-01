import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { RecepientService } from "../recepient.service";
import { donor } from "../donor";
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-list',
  templateUrl: './recepient-list.component.html',
  styleUrls: ['./recepient-list.component.css']
})
export class RecepientListComponent implements OnInit {

  donor: Observable<donor[]>;
  constructor(private recepientService: RecepientService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.donor = this.recepientService.getRecepientList();
  }
  deleteDonor(id: number) {
    this.recepientService.deleteRecepient(id)
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
