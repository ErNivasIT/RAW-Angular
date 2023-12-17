import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfficersapiService } from '../../officersapi.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-officer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,CommonModule],
  providers: [Validators,CommonModule],
  templateUrl: './add-officer.component.html',
  styleUrl: './add-officer.component.css',
})
export class AddOfficerComponent implements OnInit {
  isModalShowable: boolean = false;
  response: any;
  officerForm!:FormGroup;
  constructor(private fb: FormBuilder, private officerApi: OfficersapiService) { }
  ngOnInit(): void {
    this.officerForm = this.fb.group({
      Name:['',Validators.required],
      FatherName:['',Validators.required],
      MotherName:['',Validators.required],
      Gender:['',Validators.required],
      NickName:['',Validators.required],
      DOB:['',Validators.required],
      Address:['',Validators.required],
      Added_By:['',Validators.required],
    });
  }
  onSubmit() {
    if (this.officerForm.valid) {
      this.officerApi.addOfficer(this.officerForm.value)
        .subscribe(p => {
          this.response = p;
          this.isModalShowable = true;
        });
    }
    else
      console.log(this.officerForm);
  }
}
