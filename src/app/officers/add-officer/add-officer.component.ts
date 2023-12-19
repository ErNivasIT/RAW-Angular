import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfficersapiService } from '../../officersapi.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal, NgbModule, NgbToast, NgbToastConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-officer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule, NgbModule],
  providers: [Validators, CommonModule, NgbToast, NgbToastConfig],
  templateUrl: './add-officer.component.html',
  styleUrl: './add-officer.component.css',
})
export class AddOfficerComponent implements OnInit {

  isModalShowable: boolean = false;
  response: any;
  showToast: boolean = false;
  officerForm!: FormGroup;
  constructor(private toastConfig: NgbToastConfig, private fb: FormBuilder, private toasting: NgbToast, private officerApi: OfficersapiService, private router: Router) {

  }
  ngOnInit(): void {
    this.officerForm = this.fb.group({
      Name: [''],
      FatherName: [''],
      MotherName: [''],
      Gender: [''],
      NickName: [''],
      DOB: [''],
      Address: [''],
      Added_By: [''],
    });
  }
  officerList() {
    this.router.navigate(['officer-list']);
  }
  onSubmit() {
    if (this.officerForm.valid) {
      this.officerApi.addOfficer(this.officerForm.value)
        .subscribe(p => {
          this.response = p;
          this.isModalShowable = true;
          this.showToast = true;
          this.officerForm.reset();
          //this.router.navigate(['officer-list']);
        });
    }
    else
      console.log(this.officerForm);
  }
}
