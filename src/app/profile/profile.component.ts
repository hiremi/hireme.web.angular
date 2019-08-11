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
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://c3168355-d247-4b77-9345-0f27a6797c4e.mock.pstmn.io");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
    xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.15.2");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "054e808c-f23d-4a50-ad55-609fc66d4289,c92f04e4-8e18-4990-a90f-53c0e1c85421");
    xhr.setRequestHeader("Host", "calico.palisadoes.org:8081");
    xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);

    xhr.onload = function () {
      alert(`Loaded: ${xhr.status} ${xhr.response}`);
    }
    // http://calico.palisadoes.org:8081/users/`,httpOptions
    // this.httpClient.get('http://calico.palisadoes.org:8081/users');
    //pipe, 
    //  console.log(this.httpClient.get('http://calico.palisadoes.org:8081/users'));

  }
  
  data = [
    {
      name: 'Shantal Laing',
      url: "http://calico.palisadoes.org:8081/users/copy3_of_skill1/view/++widget++form.widgets.profile_picture/@@download/yaba-blay-author.jpg",
      title: 'Domestic Worker',
      location: '9 Redmore Road,Kingston 7',
      email: ' slaing@hiremi.com ',
      phone: '1876-123-4567',
      description: 'I have worked for several clients and sometimes undertake nanny-type duties'
    },
    {
      name: 'Harry Patterson',
      url: "http://calico.palisadoes.org:8081/users/copy_of_skill1/view/++widget++form.widgets.profile_picture/@@download/bh.jpeg",
      title: 'Certified Plumber',
      location: 'Sturrey Street, Kingston 10',
      email: 'hpatterson@hiremi.com',
      phone: '1876-654-7896',
      description: 'I am a plumber from Kingston. I do both on-demand and contract work.'
    },
    {
      name: 'Peter Johnson',
      url: "http://calico.palisadoes.org:8081/users/copy2_of_skill1/view/++widget++form.widgets.profile_picture/@@download/7jhg.jpeg",
      title: 'Electrician',
      location: '14 Derrymore Road, Kingston 10',
      email: 'carl@hiremi.com',
      phone: '1876-345-9877',
      description: 'I do new building wiring, small system maintenance and minor generator repairs.'
    },
    {
      name: 'Jody Silvera',
      url: 'http://calico.palisadoes.org:8081/users/copy3_of_skill1/view/++widget++form.widgets.profile_picture/@@download/yaba-blay-author.jpg',
      title: 'Web Developer',
      location: 'Yemen Avenue,Browns Town',
      email: 'jodys3@hiremi.com',
      phone: '1876-783-0303',
      description: 'I am proficient in building websites and mobile phone applications.'
    
    },
  ]
}
