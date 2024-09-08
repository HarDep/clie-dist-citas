import { Component } from '@angular/core';
import { ConsultationsService } from '../consultations.service';

@Component({
  selector: 'app-see-consultations',
  standalone: true,
  imports: [],
  templateUrl: './see-consultations.component.html',
  styleUrl: './see-consultations.component.css'
})
export class SeeConsultationsComponent {

  constructor(private consultationsService: ConsultationsService) { }

}
