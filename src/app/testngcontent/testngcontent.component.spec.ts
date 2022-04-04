import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngcontentComponent } from './testngcontent.component';

describe('TestngcontentComponent', () => {
  let component: TestngcontentComponent;
  let fixture: ComponentFixture<TestngcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestngcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
