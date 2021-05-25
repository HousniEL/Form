import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModule } from 'src/app/models/userModule';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {

  user : UserModule = new UserModule();

  constructor(private httpClient:HttpClient, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( (data:any) => {
      this.httpClient.get("/api/v1/users/" + data.uid).subscribe( obj => {
        this.user = new UserModule(obj);
      });
    })
  }

}
