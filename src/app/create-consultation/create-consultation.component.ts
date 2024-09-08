import { Component } from '@angular/core';
import { ConsultationsService } from '../consultations.service';

@Component({
  selector: 'app-create-consultation',
  standalone: true,
  imports: [],
  templateUrl: './create-consultation.component.html',
  styleUrl: './create-consultation.component.css'
})
export class CreateConsultationComponent {

  constructor(private consultationsService: ConsultationsService) { }

}
