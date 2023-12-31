import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
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
  });

  it('(U) setDepositar(): should return undefined for value > carteira', () => {
    expect(component.setDepositar('51')).toBeUndefined();
    expect(component.getCarteira).toEqual(50);
    expect(component.getPoupanca).toEqual(10);
  });

  it('(I) setSacar(): should transfer value to carteira', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
    expect(el.querySelector('#get-poupanca').textContent).toEqual('0');
  });

  it('(I) setDepositar(): should transfer value to carteira', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('40');
    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });
});
