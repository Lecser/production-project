import { describe, expect, test } from '@jest/globals';

import { cn } from './classNames';

describe('classNames util func tests', () => {
  test('with only first param', () => {
    const expected = 'cn';
    expect(cn('cn')).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'cn mods';
    expect(cn('cn', { mods: true })).toBe(expected);
  });
  test('with mods and one mod undefined', () => {
    const expected = 'cn mods';
    expect(cn('cn', { mods: true, undefinedMod: undefined })).toBe(expected);
  });
  test('with mods and one mod false', () => {
    const expected = 'cn mods';
    expect(cn('cn', { mods: true, falseMod: false })).toBe(expected);
  });
  test('with additional class', () => {
    const expected = 'cn additional class';
    expect(cn('cn', {}, ['additional class'])).toBe(expected);
  });
  test('with mods and additional class', () => {
    const expected = 'cn additional class1 additional class2 mods';
    expect(cn('cn', { mods: true }, ['additional class1', 'additional class2'])).toBe(expected);
  });
});
