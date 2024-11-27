import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoMinicursoListarComponent } from './inscricao-minicurso-listar.component';

describe('InscricaoMinicursoListarComponent', () => {
  let component: InscricaoMinicursoListarComponent;
  let fixture: ComponentFixture<InscricaoMinicursoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoMinicursoListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscricaoMinicursoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
