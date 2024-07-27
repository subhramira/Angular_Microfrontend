import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAppComponent } from './host-app.component';

describe('HostAppComponent', () => {
  let component: HostAppComponent;
  let fixture: ComponentFixture<HostAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
