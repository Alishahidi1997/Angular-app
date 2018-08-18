import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoshowComponent } from './todoshow.component';

describe('TodoshowComponent', () => {
  let component: TodoshowComponent;
  let fixture: ComponentFixture<TodoshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
