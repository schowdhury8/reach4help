import { validate } from 'class-validator';

import { TestObject } from '../src/test';

describe('test object validation', () => {
  it('fails when you pass it non-string ', () => {
    const user = TestObject.fromFirestore({
      testRef: null,
      displayName: {} as any,
    });

    return validate(user).then((errors) => {
      expect(errors.length).toBe(1);
    });
  });
});
