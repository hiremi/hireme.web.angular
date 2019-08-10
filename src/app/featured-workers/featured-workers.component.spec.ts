import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWorkersComponent } from './featured-workers.component';

describe('FeaturedWorkersComponent', () => {
  let component: FeaturedWorkersComponent;
  let fixture: ComponentFixture<FeaturedWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
