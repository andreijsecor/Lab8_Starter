// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber()

test('makes sure 510-555-5555 is valid', () => {
    expect(functions.isPhoneNumber('510-555-5555')).toBe(true);
})

test('makes sure (666)-6666-6666 is valid', () => {
    expect(functions.isPhoneNumber('(666)-6666-6666')).toBe(true);
})

test('makes sure 123-456-789-10 is invalid', () => {
    expect(functions.isPhoneNumber('123-456-789-10')).toBe(false);
})

test('makes sure empty string is invalid', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
})

//isEmail()

test('makes sure abc@xyz.com is valid', () => {
    expect(functions.isEmail('abc@xyz.com')).toBe(true);
})

test('makes sure abracadabra@magico.uk is valid', () => {
    expect(functions.isEmail('abracadabra@magico.uk')).toBe(true);
})

test('makes sure banana@tree is invalid', () => {
    expect(functions.isEmail('banana@tree')).toBe(false);
})

test('makes sure empty string is invalid', () => {
    expect(functions.isEmail('')).toBe(false);
})

//isStrongPassword()

test('makes sure Iamapassword is valid', () => {
    expect(functions.isStrongPassword('Iamapassword')).toBe(true);
})

test('makes sure A123a456A789 is valid', () => {
    expect(functions.isStrongPassword('A123a456A789')).toBe(true);
})

test('makes sure Iamabittoolong__ is invalid', () => {
    expect(functions.isStrongPassword('Iamabittoolong__')).toBe(false);
})

test('makes sure noFaces:( is invalid', () => {
    expect(functions.isStrongPassword('noFaces:(')).toBe(false);
})

//isDate()

test('makes sure 1/1/1001 is valid', () => {
    expect(functions.isDate('1/1/1001')).toBe(true);
})

test('makes sure 22/11/2022 is valid', () => {
    expect(functions.isDate('22/11/2022')).toBe(true);
})

test('makes sure 10/10/100O is invalid', () => {
    expect(functions.isDate('10/10/100O')).toBe(false);
})

test('makes sure empty string is invalid', () => {
    expect(functions.isDate('')).toBe(false);
})

//isHexColor()

test('makes sure #0FF00F is valid', () => {
    expect(functions.isHexColor('#0FF00F')).toBe(true);
})

test('makes sure abc is valid', () => {
    expect(functions.isHexColor('abc')).toBe(true);
})

test('makes sure abdefg is invalid', () => {
    expect(functions.isHexColor('abdefg')).toBe(false);
})

test('makes sure #beef is invalid', () => {
    expect(functions.isHexColor('#beef')).toBe(false);
})