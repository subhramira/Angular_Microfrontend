import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteAppComponent } from './remote-app.component';

describe('RemoteAppComponent', () => {
  let component: RemoteAppComponent;
  let fixture: ComponentFixture<RemoteAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoteAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
