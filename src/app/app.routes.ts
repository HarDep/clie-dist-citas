import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeeConsultationsComponent } from './see-consultations/see-consultations.component';
import { CreateConsultationComponent } from './create-consultation/create-consultation.component';
import { CancelConsultationComponent } from './cancel-consultation/cancel-consultation.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'consultations', component: SeeConsultationsComponent },
    { path: 'create', component: CreateConsultationComponent },
    { path: 'cancel', component: CancelConsultationComponent },
    { path: '**', redirectTo: 'home' }
];
