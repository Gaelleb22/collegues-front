import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGalerieComponent } from './detail-galerie.component';

describe('DetailGalerieComponent', () => {
  let component: DetailGalerieComponent;
  let fixture: ComponentFixture<DetailGalerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGalerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
