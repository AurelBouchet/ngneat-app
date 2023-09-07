import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InformationRepository } from '../store/information.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss'],
})
export class User2Component implements OnInit {
  infoForm2!: FormGroup;
  firstInfo?: any;
  secondInfo?: any;
  subscription = new Subscription();
  constructor(private informationRepository: InformationRepository) {}

  ngOnInit() {
    this.infoForm2 = this.initForm();
    this.subscription.add(
      this.informationRepository.firstInfo$.subscribe(
        (info) => (this.firstInfo = info)
      )
    );
    this.subscription.add(
      this.informationRepository.secondInfo$.subscribe(
        (info) => (this.secondInfo = info)
      )
    );
  }

  initForm() {
    return new FormGroup({
      firstInfo: new FormControl(''),
      secondInfo: new FormControl(''),
    });
  }

  addInfos() {
    this.infoForm2?.setValue({
      firstInfo: this.infoForm2.get('firstInfo')?.value,
      secondInfo: this.infoForm2.get('secondInfo')?.value,
    });
    this.informationRepository.updateInformation(this.infoForm2.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
