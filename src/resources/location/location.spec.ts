import { Configuration, LocationApi } from '../../../sdk';

test('Test', async () => {
  const config = new Configuration({ basePath: 'http://localhost:3000' });

  const locationn = new LocationApi(config);

  const locationPromise = locationn.locationControllerGetLocation({
    ip: '123.123.123.123',
  });

  const data = await locationPromise;

  console.log(data);

  const { city } = data;

  expect(city).toBe('Beijing');
});
