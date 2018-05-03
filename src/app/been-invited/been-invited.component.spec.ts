import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeenInvitedComponent } from './been-invited.component';

describe('BeenInvitedComponent', () => {
  let component: BeenInvitedComponent;
  let fixture: ComponentFixture<BeenInvitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeenInvitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeenInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
