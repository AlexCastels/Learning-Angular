import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoloContattoComponent } from './singolo-contatto.component';

describe('SingoloContattoComponent', () => {
  let component: SingoloContattoComponent;
  let fixture: ComponentFixture<SingoloContattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingoloContattoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingoloContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
