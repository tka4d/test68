'use strict'

// test

// console.log('test git');


function User() {
  this.name = 'anonimus';
  this.say = () =>  {
    console.log(`${this.name}: kiiiya`);
  };
}


let o = new User();

o.say();

// console.log(o?.address?.street);
