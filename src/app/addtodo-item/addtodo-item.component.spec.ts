import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodoItemComponent } from './addtodo-item.component';

describe('AddtodoItemComponent', () => {
  let component: AddtodoItemComponent;
  let fixture: ComponentFixture<AddtodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
