import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('user interactions', () => {
  it('Check for screen calculator', async () => {
    render(<Calculator />);
    const button = await screen.findByTitle('#5');
    fireEvent.click(button);// click interaction
    const result = await screen.findByTitle('screen');
    expect(result.innerText).toContain('5');
  });
});
