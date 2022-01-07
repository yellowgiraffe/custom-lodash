/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import _ from './lodash.js';

test('Split array into arrays', () => {
  expect(_.chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  expect(_.chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  expect(_.chunk([], 2)).toEqual([]);
  expect(() => { _.chunk('a, b, c', 2); }).toThrow(new Error('Enter an array as the first parameter'));
});

test('Remove falsy values from array', () => {
  expect(_.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  expect(_.compact([0, false, ''])).toEqual([]);
  expect(_.compact([5, 6, 7])).toEqual([5, 6, 7]);
  expect(_.compact([])).toEqual([]);
  expect(() => { _.compact('a, b, c'); }).toThrow(new Error('Enter an array as the first parameter'));
});

test('Drop values from the array beginning', () => {
  expect(_.drop([1, 2, 3])).toEqual([2, 3]);
  expect(_.drop([1])).toEqual([]);
  expect(_.drop([1, 2, 3], 2)).toEqual([3]);
  expect(_.drop([1, 2, 3], 5)).toEqual([]);
  expect(_.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  expect(_.drop([])).toEqual([]);
  expect(() => { _.drop('1, 2, 3'); }).toThrow(new Error('Enter an array as the first parameter'));
});

test('Drop elements from the beginning until predicate returns falsey', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }];

  expect(_.dropWhile(users, (o) => !o.active)).toEqual([{ user: 'pebbles', active: true }]);
  expect(_.dropWhile(users, (o) => o.active)).toEqual([{ user: 'fred', active: false }, { user: 'pebbles', active: true }]);
  expect(_.dropWhile(users)).toEqual([{ user: 'barney', active: false }, { user: 'fred', active: false }, { user: 'pebbles', active: true }]);
  expect(() => { _.dropWhile(('1, 2, 3'), (o) => !o.active); }).toThrow(new Error('Enter an array as the first parameter'));
  expect(() => { _.dropWhile(users, 'Hello'); }).toThrow(new Error('Enter a function as the second parameter'));
});

test('Take elements from the array beginning', () => {
  expect(_.take([1, 2, 3])).toEqual([1]);
  expect(_.take([1, 2, 3], 2)).toEqual([1, 2]);
  expect(_.take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  expect(_.take([1, 2, 3], 0)).toEqual([]);
  expect(_.take([])).toEqual([]);
  expect(() => { _.take([1, 2, 3], 'Hello'); }).toThrow(new Error('Enter a number as the second parameter'));
  expect(() => { _.take('1, 2, 3', 0); }).toThrow(new Error('Enter an array as the first parameter'));
});

test('Filter array with elements predicate is truthy', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
  ];

  expect(_.filter(users, (o) => !o.active)).toEqual([{ user: 'fred', age: 40, active: false }]);
  expect(_.filter(users, (o) => o.age > 38)).toEqual([{ user: 'fred', age: 40, active: false }]);
  expect(_.filter(users, (o) => o.active)).toEqual([{ user: 'barney', age: 36, active: true }]);
  expect(_.filter(users)).toEqual([{ user: 'barney', age: 36, active: true }, { user: 'fred', age: 40, active: false }]);
  expect(() => { _.filter(('1, 2, 3'), (o) => o.age > 38); }).toThrow(new Error('Enter an array as the first parameter'));
  expect(() => { _.filter(users, 'Hello'); }).toThrow(new Error('Enter a function as the second parameter'));
});

test('Find first array element when predicate is truthy', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
  ];

  expect(_.find(users, (o) => o.age < 40)).toEqual({ user: 'barney', age: 36, active: true });
  expect(_.find(users, (o) => o.age < 45)).toEqual({ user: 'barney', age: 36, active: true });
  expect(_.find(users, (o) => o.age === 1)).toEqual({ user: 'pebbles', age: 1, active: true });
  expect(() => { _.find(('1, 2, 3'), (o) => o.age > 38); }).toThrow(new Error('Enter an array as the first parameter'));
  expect(() => { _.find(users, 'Hello'); }).toThrow(new Error('Enter a function as the second parameter'));
});

test('Check if array contains the value', () => {
  expect(_.includes([1, 2, 3], 1)).toBe(true);
  expect(_.includes([1, 2, 3], 5)).toBe(false);
  expect(_.includes([1, 2, 3], 2, 2)).toBe(false);
  expect(_.includes([1, 2, 3, 4, 5], 3)).toBe(true);
  expect(() => { _.includes(('1, 2, 3'), '2'); }).toThrow(new Error('Enter an array as the first parameter'));
  expect(() => { _.includes([5, 6, 7], '2', 'Hello'); }).toThrow(new Error('Enter a number as the third parameter'));
});

test('Create new array and run iteratee for each element', () => {
  function square(n) {
    return n * n;
  }

  expect(_.map([4, 8], square)).toEqual([16, 64]);
  expect(_.map([2, 3], square)).toEqual([4, 9]);
  expect(_.map([2, 3])).toEqual([2, 3]);
  expect(() => { _.map(('1, 2, 3'), square); }).toThrow(new Error('Enter an array as the first parameter'));
  expect(() => { _.map([4, 8], 'Hello'); }).toThrow(new Error('Enter a function as the second parameter'));
});

test('Move first indexes to first subarray, second indexes to second subarray and so on', () => {
  expect(_.zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});

test('Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.', () => {
  const object = {
    a: 1,
    b: '2',
    c: 3,
  };
  expect(_.omit(object, ['a', 'c'])).toEqual({ b: '2' });
  expect(_.omit(object, ['b', 'c'])).toEqual({ a: 1 });
});

test('Creates  an object composed of the own and inherited enumerable string keyed properties of object that predicate does not return truthy for.', () => {
  const object = { a: 1, b: '2', c: 3 };
  expect(_.omitBy(object, Number.isInteger)).toEqual({ b: '2' });
});

test('Create an object composed of the picked object properties.', () => {
  const object = { a: 1, b: '2', c: 3 };
  expect(_.pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
});

test('Creates an object composed of the object properties predicate returns truthy for.', () => {
  const object = { a: 1, b: '2', c: 3 };
  expect(_.pickBy(object, Number.isInteger)).toEqual({ a: 1, c: 3 });
});

test('Create an array of own enumerable string keyed-value pairs for object.', () => {
  const object = { a: 1, b: 2, c: 3 };

  const map1 = new Map();
  map1.set('a', 1);
  map1.set('b', 2);
  map1.set('c', 3);

  expect(_.toPairs(object)).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  expect(_.toPairs(map1)).toEqual([['a', 1], ['b', 2], ['c', 3]]);
});
