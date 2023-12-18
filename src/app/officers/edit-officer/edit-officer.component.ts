import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfficersapiService } from '../../officersapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-edit-officer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-officer.component.html'
})
export class EditOfficerComponent {
  isModalShowable: boolean = false;
  id: number = 10;
  response: any;
  officerForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    FatherName: new FormControl(''),
    Gender: new FormControl(''),
    MotherName: new FormControl(''),
    NickName: new FormControl(''),
    Designation: new FormControl(''),
    DOB: new FormControl(new Date()),
    DOJ: new FormControl(''),
    Address: new FormControl(''),
    Posting: new FormControl(''),
    Posting_From: new FormControl(''),
    Posting_Upto: new FormControl(''),
    Added_By: new FormControl(''),
    Updated_By: new FormControl('Administrator')

  });

  constructor(private officerApi: OfficersapiService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    });
    this.officerApi.getOfficerById(this.id)
      .subscribe(p => {
        this.response = p.content;
        this.isModalShowable = true;
        this.officerForm.patchValue({
          Name: this.response.name,
          FatherName: this.response.fatherName,
          Gender: this.response.gender,
          MotherName: this.response.motherName,
          NickName: this.response.nickName,
          DOB: new Date(this.response.dob),
          Address: this.response.address,
          Added_By: this.response.added_By,
        });
      });
  }
  SaveChanges() {
    this.officerApi.updateOfficer(this.officerForm.value, this.id)
      .subscribe(p => {
        if (p.result.indexOf('SUCCESS') > -1) {
          this.router.navigate(['officer-list']);
        } else
          alert(p.result);
      });
  }
  gotoAllOfficePage() {
    this.router.navigate(['officer-list']);
  }
}
