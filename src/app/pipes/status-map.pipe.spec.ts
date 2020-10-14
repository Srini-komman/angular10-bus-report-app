import { StatusMapPipe } from './status-map.pipe';

describe('StatusBackgroundPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusMapPipe();
    expect(pipe).toBeTruthy();
  });
});
