import merge from "../src/merge";

describe('merge function', () => {
  test('1.should merge three sorted arrays into one ascending sorted array', () => {
    const collection_1 = [9, 7, 5, 3, 1];
    const collection_2 = [2, 4, 6, 8, 10];
    const collection_3 = [0, 1, 5, 9, 11];
    const expected = [0, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10, 11];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });


  test('2.should handle one empty', () => {
    const collection_1 = [5, 3, 1];
    const collection_2: number[] = [];
    const collection_3 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('3.should return an empty array if all collections are empty', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const expected: number[] = [];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('4.should handle arrays with single elements', () => {
    const collection_1 = [3];
    const collection_2 = [1];
    const collection_3 = [2];
    const expected = [1, 2, 3];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('5.should handle duplicate values correctly', () => {
    const collection_1 = [5, 2]; 
    const collection_2 = [1, 2, 3];
    const collection_3 = [2, 4, 5];
    const expected = [1, 2, 2, 2, 3, 4, 5, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('6.should handle arrays with different lengths', () => {
    const collection_1 = [10, 9, 8];
    const collection_2 = [1, 2];
    const collection_3 = [3, 4, 5, 6, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('7.should handle all elements being the same', () => {
    const collection_1 = [5, 5];
    const collection_2 = [5, 5];
    const collection_3 = [5, 5];
    const expected = [5, 5, 5, 5, 5, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });
});
