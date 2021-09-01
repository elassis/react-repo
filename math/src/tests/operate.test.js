import operate from "../logic/operate"

test('getting values from operate',()=>{
  const result = operate('5','3','+');

  expect((result)).toBe('8');
})