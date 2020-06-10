import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandItemComponent } from './band-item.component';

describe('BandItemComponent', () => {
  let component: BandItemComponent;
  let fixture: ComponentFixture<BandItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
