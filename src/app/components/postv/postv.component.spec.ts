import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvComponent } from './postv.component';

describe('PostvComponent', () => {
  let component: PostvComponent;
  let fixture: ComponentFixture<PostvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
