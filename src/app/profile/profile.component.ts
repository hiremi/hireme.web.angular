import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46YWRtaW4='
  })
};
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private name: FormControl = new FormControl('');
  private email: FormControl = new FormControl('');
  private tel: FormControl = new FormControl('');
  private message: FormControl = new FormControl('');




  private quote = {
    name: null,
    email: null,
    tel: null,
    message: null,
    // skills:[],
    // occupation: 'carpentry'
  }


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  sendQuote(id: string) {
    this.quote.name = this.name.value;
    this.quote.email = this.email.value;
    this.quote.message = this.message.value;
    this.quote.tel = this.tel.value;

    this.httpClient.post('${id}', this.quote)
  }

  getUsers() {
    // http://calico.palisadoes.org:8081/users/`,httpOptions
    return this.httpClient.get('http://calico.palisadoes.org:8081/users');

    // console.log(this.httpClient.get('http://calico.palisadoes.org:8081/users'));
  }
}
