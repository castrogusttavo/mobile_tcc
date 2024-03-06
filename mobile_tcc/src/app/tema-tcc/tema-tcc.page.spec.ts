import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemaTccPage } from './tema-tcc.page';

describe('TemaTccPage', () => {
  let component: TemaTccPage;
  let fixture: ComponentFixture<TemaTccPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TemaTccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
