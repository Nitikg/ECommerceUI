
import { Router } from '@angular/router';
import { OpenProductDetailsDirective } from './open-product-details.directive';

describe('OpenProductDetailsDirective', () => {
  it('should create an instance', () => {
    const directive = new OpenProductDetailsDirective(new Router);
    expect(directive).toBeTruthy();
  });
});
