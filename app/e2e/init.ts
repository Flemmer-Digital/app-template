import {device} from 'detox';

beforeAll(async () => {
  await device.clearKeychain();
  await device.launchApp({newInstance: true});
});
