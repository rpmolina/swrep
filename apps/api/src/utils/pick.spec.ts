import { pick } from './pick';

describe('pick', () => {
  it('should return an object with the specified keys', () => {
    const originalObject = { a: 1, b: 2, c: 3 };
    const pickedObject = pick(originalObject, 'a', 'b');
    expect(pickedObject).toEqual({ a: 1, b: 2 });
  });

  it('should ignore keys that do not exist in the source object', () => {
    const originalObject = { a: 1, b: 2, c: 3 };
    // @ts-expect-error - we want to test that the function ignores keys that do not exist in the source object
    const pickedObject = pick(originalObject, 'a', 'd');
    expect(pickedObject).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are specified', () => {
    const originalObject = { a: 1, b: 2, c: 3 };
    const pickedObject = pick(originalObject);
    expect(pickedObject).toEqual({});
  });

  it('should return an empty object if the source object is empty', () => {
    const originalObject = {};
    // @ts-expect-error - we want to test that the function returns an empty object if the source object is empty
    const pickedObject = pick(originalObject, 'a');
    expect(pickedObject).toEqual({});
  });
});
