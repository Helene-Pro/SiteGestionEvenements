import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementsPersoComponent } from './evenements-perso.component';

describe('EvenementsPersoComponent', () => {
  let component: EvenementsPersoComponent;
  let fixture: ComponentFixture<EvenementsPersoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementsPersoComponent]
    });
    fixture = TestBed.createComponent(EvenementsPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
