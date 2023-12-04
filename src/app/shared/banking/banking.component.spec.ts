import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getCarteira(): should have poupanca equals 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCarteira(): should have carteira equals 50', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) setSacar(): should transfer value to carteira', () => {
    component.setSacar('10');
    expect(component.getCarteira).toEqual(60);
    expect(component.getPoupanca).toEqual(0);
  });

  it('(U) setDepositar(): should transfer value from carteira', () => {
    component.setDepositar('10');
    expect(component.getCarteira).toEqual(40);
    expect(component.getPoupanca).toEqual(20);
  });

  it('(U) setSacar(): should return undefined for value > poupanca', () => {
    expect(component.setSacar('11')).toBeUndefined();
    expect(component.getCarteira).toEqual(50);
    expect(component.getPoupanca).toEqual(10);
  })

  it('(U) setDepositar(): should return undefined for value > carteira', () => {
    expect(component.setDepositar('51')).toBeUndefined();
    expect(component.getCarteira).toEqual(50);
    expect(component.getPoupanca).toEqual(10);
  })
});
