import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtFooterComponent } from './nt-footer.component';

describe('NtFooterComponent', () => {
  let component: NtFooterComponent;
  let fixture: ComponentFixture<NtFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtFooterComponent]
    });
    fixture = TestBed.createComponent(NtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
