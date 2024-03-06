import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjetivosPage } from './objetivos.page';

describe('ObjetivosPage', () => {
  let component: ObjetivosPage;
  let fixture: ComponentFixture<ObjetivosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObjetivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
