import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { CreateDonorComponent } from './create-donor/create-donor.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { RecepientListComponent } from './recepient-list/recepient-list.component';
import { UpdateDonorComponent } from './update-donor/update-donor.component';
import { ChatComponent } from './chat/chat.component';
import { CreateRecepientComponent } from './create-recepient/create-recepient.component';


const routes: Routes = [
  // { path: '', redirectTo: 'donors', pathMatch: 'full' },
  { path: 'donors', component: DonorListComponent },
  { path: 'recepients', component: RecepientListComponent },
  { path: 'add', component: CreateDonorComponent },
  { path: 'addR', component: CreateRecepientComponent },
  { path: 'update/:id', component: UpdateDonorComponent },
  { path: 'details/:id', component: DonorDetailsComponent },
  { path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
