import { request } from './rest';

jest.mock('../store', () => ({
  dispatch:()=>'error'
}));

describe('request', () => {
  const test = 'test';
  const fakeJSON = {
    json: () => Promise.resolve(test)
  };

  it('on successfull fetch() should return data', (done) => {  //oldsckool
    global.fetch = () => Promise.resolve(fakeJSON);

    request('').then(data => {
      expect(data).toBe(test);
      done();
    });
  });

  it('(modern) on successfull fetch() should return data', async() => {  //modern
    global.fetch = () => Promise.resolve(fakeJSON);

    expect(await request('')).toBe(test);
  });


  it('on failed fetch() should throw an error', (done) => {  //oldsckool
    global.fetch = () => Promise.resolve({
      json: () => Promise.reject(test)
    });

    request('').catch(
      err => {
        expect(err).toBe(test);
        done();
      }
    )
  });

  it('on failed fetch() should throw an error', async() => {  //modern
    global.fetch = () => Promise.resolve({
      json: () => Promise.reject(test)
    });
    try{
      await  request('')
    } catch (err) {
      expect(err).toBe(test);
    }
  });

  xit('on failed fetch() and url is "userCheck"  shold call dispatch', async() => {  //modern
    global.fetch = () => Promise.resolve({
      json: () => Promise.reject(test)
    });
    try{
      await  request('checkUser');
    } catch (err) {
      expect(String(err)).toBe(test);
    }
  });
});
