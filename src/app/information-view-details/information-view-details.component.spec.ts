import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationViewDetailsComponent } from './information-view-details.component';

describe('InformationViewDetailsComponent', () => {
  let component: InformationViewDetailsComponent;
  let fixture: ComponentFixture<InformationViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
