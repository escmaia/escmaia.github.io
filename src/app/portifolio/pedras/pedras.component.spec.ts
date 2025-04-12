import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedrasComponent } from './pedras.component';

describe('PedrasComponent', () => {
  let component: PedrasComponent;
  let fixture: ComponentFixture<PedrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
