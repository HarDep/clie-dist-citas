import { Component } from '@angular/core';
import { ConsultationsService } from '../consultations.service';

@Component({
  selector: 'app-cancel-consultation',
  standalone: true,
  imports: [],
  templateUrl: './cancel-consultation.component.html',
  styleUrl: './cancel-consultation.component.css'
})
export class CancelConsultationComponent {

  constructor(private consultationsService: ConsultationsService) { }

}
