import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ConsultationsService } from '../consultations.service';
import { FormsModule } from '@angular/forms';
import { formatDate, NgFor } from '@angular/common';
import { Consultation } from '../consultation';

@Component({
  selector: 'app-see-consultations',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './see-consultations.component.html',
  styleUrl: './see-consultations.component.css'
})
export class SeeConsultationsComponent {

  cc:string = '';
  minDate: Date = new Date();
  maxDate: Date = new Date();
  consultations: Consultation[] = [];
  formatingDate: Function = (date:Date) => formatDate(date, "dd-MM-YYYY hh:mm a", this.locale);

  constructor(private consultationsService: ConsultationsService,
    @Inject(LOCALE_ID) private locale: string) { }

  buscar(){
    if(!this.cc){
      this.consultationsService.getConsultations(this.formatingDate(this.minDate),this.formatingDate(this.maxDate))
      .subscribe(data => {
        this.consultations = data;
        this.consultations.forEach(con => con.imageUrl = this.consultationsService.getAuthorizationImage(con.consultationCode))
      })
    } else {
      this.consultationsService.getConsultationsByCC(this.cc,this.formatingDate(this.minDate),this.formatingDate(this.maxDate))
      .subscribe(data => {
        this.consultations = data;
        this.consultations.forEach(con => con.imageUrl = this.consultationsService.getAuthorizationImage(con.consultationCode))
      })
    }
  }

}
