import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementsGlobalComponent } from './evenements-global.component';

describe('EvenementsGlobalComponent', () => {
  let component: EvenementsGlobalComponent;
  let fixture: ComponentFixture<EvenementsGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementsGlobalComponent]
    });
    fixture = TestBed.createComponent(EvenementsGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
