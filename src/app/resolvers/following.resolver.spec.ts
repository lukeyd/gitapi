import { TestBed } from '@angular/core/testing';

import { FollowingResolver } from './following.resolver';

describe('FollowingResolver', () => {
  let resolver: FollowingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FollowingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
