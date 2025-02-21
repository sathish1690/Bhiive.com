import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResquestquoteComponent } from './resquestquote.component';

describe('ResquestquoteComponent', () => {
  let component: ResquestquoteComponent;
  let fixture: ComponentFixture<ResquestquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResquestquoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResquestquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
