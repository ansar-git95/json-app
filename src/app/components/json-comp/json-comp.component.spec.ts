import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCompComponent } from './json-comp.component';

describe('JsonCompComponent', () => {
  let component: JsonCompComponent;
  let fixture: ComponentFixture<JsonCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
