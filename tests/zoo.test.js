const Animal = require('../zoo/models/Animal');
const Lion = require('../zoo/models/Lion');
const Tiger = require('../zoo/models/Tiger');

describe('Zoo', ()=>{
    describe('Abstract Class Animal',()=>{
        test('Abstract classes cant be instantiated',()=>{
            expect(() => { new Animal(); }).toThrow('Abstract classes cant be instantiated.');
        })
    })

    describe('Class Lion',()=>{
        test('Can Speak',()=>{
            const lion = new Lion();
            expect(lion instanceof Animal).toBe(true);
            expect(lion.speak('I\'m a lion')).toBe('I\'m roar a roar lion roar');
        })
    })

    describe('Class Tiger',()=>{
        test('Can Speak',()=>{
            const tiger = new Tiger();
            expect(tiger instanceof Animal).toBe(true);
            expect(tiger.speak('Lions suck')).toBe('Lions grrr suck grrr');
        })
    })

})