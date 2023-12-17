import { Component } from '@angular/core';
import { PostingapiService } from '../../postingapi.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-officer-posting',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './view-officer-posting.component.html'
})
export class ViewOfficerPostingComponent {
  posting: any;
  officer_id:number=0;
  constructor(private postingService: PostingapiService,private router:ActivatedRoute) {

  }
  ngOnInit() {
    this.router.params.subscribe(p=>{
      this.officer_id=p["id"];
    });

    this.postingService.viewPosting(this.officer_id)
    .subscribe(p => {
      this.posting = p.content;
      console.log(p);
    });
  }
}
