import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioParte2Component } from './formulario-parte2.component';

describe('FormularioParte2Component', () => {
  let component: FormularioParte2Component;
  let fixture: ComponentFixture<FormularioParte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioParte2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioParte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
