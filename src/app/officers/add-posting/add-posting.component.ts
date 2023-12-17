import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfficersapiService } from '../../officersapi.service';
import { PostingapiService } from '../../postingapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-posting',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-posting.component.html'
})
export class AddPostingComponent {
  id: number = 0;
  isModalShowable: boolean = false;
  response: any;
  postingForm = new FormGroup({
    Designation: new FormControl(''),
    DOJ: new FormControl(''),
    Posting: new FormControl(''),
    Posting_From: new FormControl(''),
    Posting_Upto: new FormControl(''),
    Officer_Id: new FormControl(0),
    Added_By: new FormControl('Administrator'),
  });
  constructor(private officerApi: PostingapiService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    this.router.params.subscribe(p => {
      this.id = p['id'];
      console.log(this.id);

      this.postingForm.patchValue({
        Officer_Id: this.id
      });
    });
  }
  onSubmit() {
    this.officerApi.addPosting(this.postingForm.value)
      .subscribe(p => {
        this.response = p;
        this.isModalShowable = true;
      });
  }
}
