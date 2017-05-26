/**
 * Created by hustcc on 17/5/25.
 */

const Radix = require('../src/');

test('radix options and default', () => {
  let radix = new Radix();
  expect(radix.formatter).toEqual('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@');

  radix = new Radix('hello-world');
  expect(radix.formatter).toEqual('hello-world');
});


test('radix convent number string with no decimal', () => {
  let radix = new Radix();
  expect(radix.convent('6', 10, 2)).toEqual('110');
  expect(radix.convent('jRSy', 64, 10)).toEqual('5201314');
  expect(radix.convent('4f5da2', 16, 10)).toEqual('5201314');
  expect(radix.convent('10011110101110110100010', 2)).toEqual('5201314');
  expect(radix.convent('520ab1314', 14, 38)).toEqual('2jwrkiy');
});


test('radix convent number string with decimal', () => {
  let radix = new Radix();
  expect(radix.convent('520.1314', 10, 2)).toEqual('1000001000.001000011010001101');
  expect(radix.convent('520.1314', 10, 16)).toEqual('208.21a36e2eb1c432');
  expect(radix.convent('520.1314', 10, 64)).toEqual('88.8qdKbH74cw');
  expect(radix.convent('520a.131b', 14, 38)).toEqual('9to.3c70lA69p915zzb5z0');
});


test('radix convent default options', () => {
  let radix = new Radix('0123456789');
  expect(radix.convent(520)).toEqual('520');
});


test('radix exceptions', () => {
  let radix = new Radix('0123456789');
  expect(radix.convent('')).toEqual('');
  expect(radix.convent('...')).toEqual('');
  expect(radix.convent('520-1314')).toEqual('');
  expect(radix.convent('520.1314a')).toEqual('');
  expect(radix.convent('520.13.14')).toEqual('');
  expect(radix.v10toN('520love', 2)).toEqual('');
  expect(radix.v10toN('', 2)).toEqual('');
  expect(radix.v10toN('520.13.14', 2)).toEqual('');
});