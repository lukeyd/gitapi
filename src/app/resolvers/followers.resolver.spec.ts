import { TestBed } from '@angular/core/testing';

import { FollowersResolver } from './followers.resolver';

describe('FollowersResolver', () => {
  let resolver: FollowersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FollowersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
