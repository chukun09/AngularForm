import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthostComponent } from './testhost.component';

describe('TesthostComponent', () => {
  let component: TesthostComponent;
  let fixture: ComponentFixture<TesthostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesthostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
