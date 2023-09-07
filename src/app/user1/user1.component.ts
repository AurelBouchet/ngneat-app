import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InformationRepository } from '../store/information.store';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss'],
})
export class User1Component implements OnInit {
  infoForm1!: FormGroup;

  constructor(private informationRepository: InformationRepository) {}

  ngOnInit() {
    this.infoForm1 = this.initForm();
  }

  initForm() {
    return new FormGroup({
      firstInfo: new FormControl(''),
      secondInfo: new FormControl(''),
    });
  }

  addInfos() {
    this.infoForm1?.setValue({
      firstInfo: this.infoForm1.get('firstInfo')?.value,
      secondInfo: this.infoForm1.get('secondInfo')?.value,
    });
    this.informationRepository.updateInformation(this.infoForm1.value);
  }
}
