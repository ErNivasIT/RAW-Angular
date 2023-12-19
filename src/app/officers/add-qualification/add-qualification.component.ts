import { NgFor } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfficersapiService } from '../../officersapi.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-qualification',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './add-qualification.component.html'
})
export class AddQualificationComponent implements OnInit {
  qualificationForm!: FormGroup;
  response:any;
  @ViewChild('content', { static: true }) contentTemplate!: TemplateRef<any>;

  constructor(private modalService: NgbModal,private fb: FormBuilder, private officerService: OfficersapiService,private activatedRoute:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.qualificationForm = this.fb.group({
      Officer_Id: ['', Validators.required],
      Added_By: ['Administrator', Validators.required],
      Qualifications: this.fb.array([this.addQualification()])
    });

    this.activatedRoute.params.subscribe(p=>{
      this.qualificationForm.get('Officer_Id')?.setValue(p['id']);
    });
    
  }
  addQualification(): FormGroup {
    return this.fb.group({
      Name: new FormControl(''),
      Marks: new FormControl(''),
      PassingYear: new FormControl('')
    });
  }

  AddMore() {
    (<FormArray>this.qualificationForm.get('Qualifications')).push(this.addQualification());
    console.log(this.qualificationForm.value);
  }
  getAllQualifications(): FormArray {
    return this.qualificationForm.get('Qualifications') as FormArray;
  }
  onSubmit() {
    this.officerService.addQualifications(this.qualificationForm.value)
      .subscribe(p => {
        this.response=p;
        this.openModal();
        this.qualificationForm.reset();
        this.activatedRoute.params.subscribe(p=>{
          this.qualificationForm.get('Officer_Id')?.setValue(p['id']);
        });
        console.log(p);
      });
  }
  openModal() {
    this.modalService.open(this.contentTemplate);
  }
}
