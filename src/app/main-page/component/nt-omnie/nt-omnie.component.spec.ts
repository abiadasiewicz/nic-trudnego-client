import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtOMnieComponent } from './nt-omnie.component';

describe('NtOMnieComponent', () => {
  let component: NtOMnieComponent;
  let fixture: ComponentFixture<NtOMnieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtOMnieComponent]
    });
    fixture = TestBed.createComponent(NtOMnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
