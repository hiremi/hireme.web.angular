import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCardTwoComponent } from './worker-card-two.component';

describe('WorkerCardTwoComponent', () => {
  let component: WorkerCardTwoComponent;
  let fixture: ComponentFixture<WorkerCardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerCardTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
