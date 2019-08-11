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
  data = {
    "@components": {
      "actions": {
        "@id": "http://calico.palisadoes.org:8081/users/@actions"
      },
      "breadcrumbs": {
        "@id": "http://calico.palisadoes.org:8081/users/@breadcrumbs"
      },
      "navigation": {
        "@id": "http://calico.palisadoes.org:8081/users/@navigation"
      },
      "types": {
        "@id": "http://calico.palisadoes.org:8081/users/@types"
      },
      "workflow": {
        "@id": "http://calico.palisadoes.org:8081/users/@workflow"
      }
    },
    "@id": "http://calico.palisadoes.org:8081/users/",
    "@type": "Folder",
    "UID": "6351e767ce14424e99747db6a0efef2f",
    "allow_discussion": false,
    "contributors": [],
    "created": "2019-08-10T13:43:11+00:00",
    "creators": [
      "admin"
    ],
    "description": "the users",
    "effective": "2019-08-10T08:48:12",
    "exclude_from_nav": true,
    "expires": null,
    "id": "users",
    "is_folderish": true,
    "items": [
      {
        "@id": "http://calico.palisadoes.org:8081/users/skill1",
        "@type": "skillworker",
        "description": "I have worked for several clients and sometimes undertake nanny-type duties",
        "review_state": "published",
        "title": "Domestic Worker"
      },
      {
        "@id": "http://calico.palisadoes.org:8081/users/copy_of_skill1",
        "@type": "skillworker",
        "description": "I am a plumber from Kingston. I do both on-demand and contract work.",
        "review_state": "published",
        "title": "Certified Plumber"
      },
      {
        "@id": "http://calico.palisadoes.org:8081/users/copy2_of_skill1",
        "@type": "skillworker",
        "description": "I do new building wiring,  small system maintenance and minor generator repairs.",
        "review_state": "published",
        "title": "Electrician"
      },
      {
        "@id": "http://calico.palisadoes.org:8081/users/copy3_of_skill1",
        "@type": "skillworker",
        "description": "I am proficient in building websites and mobile phone applications",
        "review_state": "published",
        "title": "Web Developer"
      }
    ],
    "items_total": 4,
    "language": {
      "title": "English (USA)",
      "token": "en-us"
    },
    "layout": "listing_view",
    "modified": "2019-08-10T14:03:50+00:00",
    "nextPreviousEnabled": false,
    "parent": {
      "@id": "http://calico.palisadoes.org:8081",
      "@type": "Plone Site",
      "description": "",
      "title": "COC"
    },
    "relatedItems": [],
    "review_state": "published",
    "rights": null,
    "subjects": [],
    "title": "Users",
    "version": "current"
  }
}
