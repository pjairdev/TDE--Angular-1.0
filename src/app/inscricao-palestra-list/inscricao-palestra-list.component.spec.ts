import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoPalestraListComponent } from './inscricao-palestra-list.component';

describe('InscricaoPalestraListComponent', () => {
  let component: InscricaoPalestraListComponent;
  let fixture: ComponentFixture<InscricaoPalestraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoPalestraListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscricaoPalestraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
