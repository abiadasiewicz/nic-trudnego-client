import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtHeaderComponent } from './nt-header.component';

describe('NtHeaderComponent', () => {
  let component: NtHeaderComponent;
  let fixture: ComponentFixture<NtHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtHeaderComponent]
    });
    fixture = TestBed.createComponent(NtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
