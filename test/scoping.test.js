beforeAll(() => console.info('before all outer'));
afterAll(() => console.info('after all outer'));
beforeEach(() => console.info('before each outer'));
afterEach(() => console.info('after each outer'));

test('test outer', () => console.info('test outer'));

describe('inner', () => {

  beforeAll(() => console.info('before all outer'));
  afterAll(() => console.info('after all outer'));
  beforeEach(() => console.info('before each outer'));
  afterEach(() => console.info('after each outer'));

  test('inner', () => console.info('test inner'));
  

});
