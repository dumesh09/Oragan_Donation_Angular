import { Component, OnInit } from '@angular/core';
import { RecepientService } from "../recepient.service";
import { donor } from "../donor";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recepient-details',
  templateUrl: './recepient-details.component.html',
  styleUrls: ['./recepient-details.component.css']
})
export class RecepientDetailsComponent implements OnInit {
  id: number;
  donor: donor;
  constructor(private route: ActivatedRoute,private router: Router,
    private recepientService: RecepientService) { }

    ngOnInit(){
      this.donor = new donor();
  
      this.id = this.route.snapshot.params['id'];
      
      this.recepientService.getRecepient(this.id)
        .subscribe(data => {
          console.log(data)
          this.donor = data;
        }, error => console.log(error));
    }
    list(){
      this.router.navigate(['donors']);
    }

}
