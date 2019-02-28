import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModalComponent } from './sub-modal.component';

describe('SubModalComponent', () => {
  let component: SubModalComponent;
  let fixture: ComponentFixture<SubModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
