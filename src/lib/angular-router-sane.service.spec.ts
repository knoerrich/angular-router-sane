import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { Sane } from './angular-router-sane.service';

describe('AngularRouterSaneService', () => {
  let sane: Sane;
  let result: any;
  let result2: any;
  let result3: any;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    sane = TestBed.get(Sane);
    let route: any = {
      snapshot: {
        paramMap: {
          get: (id: string) => { return id=='param' ? result : 'sane'; }
        },
        queryParamMap: {
          get: (id: string) => { return id=='query' ? result2 : result3; }
        }
      }
    };
    sane.setActivatedRoute(route);
  });

  it('should be created', () => {
    const sane: Sane = TestBed.get(Sane);
    expect(sane).toBeTruthy();
  });

  describe('hasBeenSet', () => {

    it('should return false for undefined', () => {
      result = undefined;
      const is: boolean = sane.hasBeenSet('param');
      expect(is).toBe(false);
    });

    it('should return false for \'\'', () => {
      result = '';
      const is: boolean = sane.hasBeenSet('param');
      expect(is).toBe(false);
    });

    it('should return true for other param', () => {
      result = false;
      const is: boolean = sane.hasBeenSet('other');
      expect(is).toBe(true);
    });

    it('should return true for null', () => {
      result = null;
      const is: boolean = sane.hasBeenSet('param');
      expect(is).toBe(true);
    });

    it('should return true for NaN', () => {
      result = NaN;
      const is: boolean = sane.hasBeenSet('param');
      expect(is).toBe(true);
    });

    it('should return true for false', () => {
      result = false;
      const is: boolean = sane.hasBeenSet('param');
      expect(is).toBe(true);
    });

    it('should return true for true', () => {
      result = true;
      const is: boolean = sane.hasBeenSet('param');
      expect(is).toBe(true);
    });

    it('should return true for \'all is well\'', () => {
      result = 'all is well';
      const is: boolean = sane.hasBeenSet('param');
      expect(is).toBe(true);
    });
  });

  describe('getNumber', () => {

    it('should return 0 for null', () => {
      result = null;
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for undefined', () => {
      result = undefined;
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for \'\'', () => {
      result = '';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for 0', () => {
      result = 0;
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for \'0\'', () => {
      result = '0';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for \'0X0\'', () => {
      result = '0X0';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for false', () => {
      result = false;
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for \'false\'', () => {
      result = 'false';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for \'X\'', () => {
      result = 'X';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for other param', () => {
      result = '1';
      const number: number = sane.getNumber('other');
      expect(number).toBe(0);
    });

    it('should return NaN for NaN', () => {
      result = NaN;
      const number: number = sane.getNumber('param');
      expect(number).toBeNaN();
    });

    it('should return Infinity for +Infinity', () => {
      result = +Infinity;
      const number: number = sane.getNumber('param');
      expect(number).toBe(Infinity);
    });

    it('should return-Infinity for \'-Infinity\'', () => {
      result = '-Infinity';
      const number: number = sane.getNumber('param');
      expect(number).toBe(-Infinity);
    });

    it('should return 0 for \'6/0\'', () => {
      result = '6/0';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return -21 for \'-42/2\'', () => {
      result = '-42/2';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 0 for \'true\'', () => {
      result = 'true';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0);
    });

    it('should return 1 for 1', () => {
      result = 1;
      const number: number = sane.getNumber('param');
      expect(number).toBe(1);
    });

    it('should return 1 for \'1\'', () => {
      result = '1';
      const number: number = sane.getNumber('param');
      expect(number).toBe(1);
    });

    it('should return 1 for true', () => {
      result = true;
      const number: number = sane.getNumber('param');
      expect(number).toBe(1);
    });

    it('should return 1000 for \'1e3\'', () => {
      result = '1e3';
      const number: number = sane.getNumber('param');
      expect(number).toBe(1000);
    });

    it('should return 0.001 for \'1e-3\'', () => {
      result = '1e-3';
      const number: number = sane.getNumber('param');
      expect(number).toBe(0.001);
    });

    it('should return 12345 for +12345', () => {
      result = +12345;
      const number: number = sane.getNumber('param');
      expect(number).toBe(12345);
    });

    it('should return 12345 for \'+12345\'', () => {
      result = '+12345';
      const number: number = sane.getNumber('param');
      expect(number).toBe(12345);
    });

    it('should return -12345 for -12345', () => {
      result = -12345;
      const number: number = sane.getNumber('param');
      expect(number).toBe(-12345);
    });

    it('should return -12345 for \'-12345\'', () => {
      result = '-12345';
      const number: number = sane.getNumber('param');
      expect(number).toBe(-12345);
    });

  });

  describe('getBoolean', () => {

    it('should return false for null', () => {
      result = null;
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(false);
    });

    it('should return false for undefined', () => {
      result = undefined;
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(false);
    });

    it('should return false for \'\'', () => {
      result = '';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(false);
    });

    it('should return false for 0', () => {
      result = 0;
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(false);
    });

    it('should return false for \'0\'', () => {
      result = '0';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(false);
    });

    it('should return false for false', () => {
      result = false;
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(false);
    });

    it('should return false for \'false\'', () => {
      result = 'false';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(false);
    });

    it('should return true for \'X\'', () => {
      result = 'X';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for other param', () => {
      result = false;
      const boolean: boolean = sane.getBoolean('other');
      expect(boolean).toBe(true);
    });

    it('should return true for \'0X0\'', () => {
      result = '0X0';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for \'true\'', () => {
      result = 'true';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for 1', () => {
      result = 1;
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for \'1\'', () => {
      result = '1';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for true', () => {
      result = true;
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for \'1e3\'', () => {
      result = '1e3';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for \'1e-3\'', () => {
      result = '1e-3';
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });

    it('should return true for []', () => {
      result = [];
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });
    
    it('should return true for {}', () => {
      result = {};
      const boolean: boolean = sane.getBoolean('param');
      expect(boolean).toBe(true);
    });
  });

  describe('getString', () => {

    it('should return \'\' for null', () => {
      result = null;
      const string: string = sane.getString('param');
      expect(string).toBe('');
    });

    it('should return \'\' for undefined', () => {
      result = undefined;
      const string: string = sane.getString('param');
      expect(string).toBe('');
    });

    it('should return \'\' for \'\'', () => {
      result = '';
      const string: string = sane.getString('param');
      expect(string).toBe('');
    });

    it('should return \'0\' for 0', () => {
      result = 0;
      const string: string = sane.getString('param');
      expect(string).toBe('0');
    });

    it('should return \'0\' for \'0\'', () => {
      result = '0';
      const string: string = sane.getString('param');
      expect(string).toBe('0');
    });

    it('should return \'false\' for false', () => {
      result = false;
      const string: string = sane.getString('param');
      expect(string).toBe('false');
    });

    it('should return \'true\' for true', () => {
      result = true;
      const string: string = sane.getString('param');
      expect(string).toBe('true');
    });

    it('should return \'X\' for \'X\'', () => {
      result = 'X';
      const string: string = sane.getString('param');
      expect(string).toBe('X');
    });

    it('should return \'sane\' for other param', () => {
      result = false;
      const string: string = sane.getString('other');
      expect(string).toBe('sane');
    });

    it('should return \'\"Hello, \\Wörld\\\'\n\' for \'\"Hello, \\Wörld\\\'\n\'', () => {
      result = '\"Hello, \\Wörld\'\n';
      const string: string = sane.getString('param');
      expect(string).toBe('\"Hello, \\Wörld\'\n');
    });
  });

  describe('getJson', () => {

    it('should return null for null', () => {
      result = null;
      const any: any = sane.getJson('param');
      expect(any).toBe(null);
    });

    it('should return undefined for undefined', () => {
      result = undefined;
      const any: any = sane.getJson('param');
      expect(any).toBe(undefined);
    });

    it('should return undefined for \'\'', () => {
      result = '';
      const any: any = sane.getJson('param');
      expect(any).toBe(undefined);
    });

    it('should return 0 for 0', () => {
      result = 0;
      const any: any = sane.getJson('param');
      expect(any).toBe(0);
    });

    it('should return 0 for \'0\'', () => {
      result = '0';
      const any: any = sane.getJson('param');
      expect(any).toBe(0);
    });

    it('should return false for false', () => {
      result = false;
      const any: any = sane.getJson('param');
      expect(any).toBe(false);
    });

    it('should return true for true', () => {
      result = true;
      const any: any = sane.getJson('param');
      expect(any).toBe(true);
    });

    it('should return undefined for \'random string\'', () => {
      result = 'random string';
      const any: any = sane.getJson('param');
      expect(any).toBe(undefined);
    });

    it('should return \'X\' for \'\"X\"\'', () => {
      result = '\"X\"';
      const any: any = sane.getJson('param');
      expect(any).toBe('X');
    });

    it('should return undefined for other param', () => {
      result = false;
      const any: any = sane.getJson('other');
      expect(any).toBe(undefined);
    });

    it('should return [] for \'[]\'', () => {
      result = '[]';
      const any: any = sane.getJson('param');
      expect(any).toEqual([]);
    });
  });
});
