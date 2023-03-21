import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarQuizComponent } from './iniciar-quiz.component';

describe('IniciarQuizComponent', () => {
  let component: IniciarQuizComponent;
  let fixture: ComponentFixture<IniciarQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
