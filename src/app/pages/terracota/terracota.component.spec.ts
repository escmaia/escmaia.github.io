import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerracotaComponent } from './terracota.component';

describe('TerracotaComponent', () => {
  let component: TerracotaComponent;
  let fixture: ComponentFixture<TerracotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerracotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerracotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
