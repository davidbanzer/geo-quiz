import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderCapitalesComponent } from './aprender-capitales.component';

describe('AprenderCapitalesComponent', () => {
  let component: AprenderCapitalesComponent;
  let fixture: ComponentFixture<AprenderCapitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprenderCapitalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprenderCapitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
