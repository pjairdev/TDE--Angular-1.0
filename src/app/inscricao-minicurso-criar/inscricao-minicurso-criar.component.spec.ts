import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoMinicursoCriarComponent } from './inscricao-minicurso-criar.component';

describe('InscricaoMinicursoCriarComponent', () => {
  let component: InscricaoMinicursoCriarComponent;
  let fixture: ComponentFixture<InscricaoMinicursoCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoMinicursoCriarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscricaoMinicursoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
