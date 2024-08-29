import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtOfertaComponent } from './nt-oferta.component';

describe('NtOfertaComponent', () => {
  let component: NtOfertaComponent;
  let fixture: ComponentFixture<NtOfertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtOfertaComponent]
    });
    fixture = TestBed.createComponent(NtOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
