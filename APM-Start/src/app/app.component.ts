import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  pageTitle = 'Acme Product Management';

  constructor(private cookieService: CookieService) {

  }
  ngOnInit(): void {
    let cc = window as any;
    console.log('cookie status is ',window.navigator.cookieEnabled);
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#164969"
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        },
      },
      theme: "classic",
      content: {
        //message: '',
        //dismiss: 'cookieDismiss',
        //deny: 'cookieDeny',
        //allow: 'cookieAllow',
        //link: 'cookieLinkText',
        //href: "/dataprivacy",// environment.Frontend +  
      }
    });
  }

  setCookie() {
    this.cookieService.set('userid','user');
  }
}
