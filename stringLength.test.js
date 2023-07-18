const stringLength = require('./stringLength');

it('length of string', () => {
    expect(stringLength('maris')).toBe(5);
})
    it('length of string', () => {
        expect(stringLength('')).toBe('string is beyond interval');
    });
