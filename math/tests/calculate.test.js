const calculate  = require("../src/logic/calculate");

test('getting values from calculate',()=>{
  const objresult = calculate({
    total:'5',
    next: '3',
    operation:'+'
  },'=');

  expect((objresult.total)).toBe('8');
})