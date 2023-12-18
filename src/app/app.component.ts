import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FooterComponent]
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    if (localStorage.getItem("token") != null) {
      this.isLoggedIn = true;
    }
    else
      this.isLoggedIn = false;
    console.log(this.isLoggedIn);
  }
  title = 'officer-application';

}
