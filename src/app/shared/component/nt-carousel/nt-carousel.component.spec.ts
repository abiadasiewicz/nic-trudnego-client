import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtCarouselComponent } from './nt-carousel.component';

describe('NtCarouselComponent', () => {
  let component: NtCarouselComponent;
  let fixture: ComponentFixture<NtCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtCarouselComponent]
    });
    fixture = TestBed.createComponent(NtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
