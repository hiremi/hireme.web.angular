import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
