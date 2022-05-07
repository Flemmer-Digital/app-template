beforeAll(async () => {
  await device.reloadReactNative();
});

it('Clicks the button to sign the user up', async () => {
  await waitFor(element(by.text('Sign In/Register'))).toBeVisible();
  await element(by.text('Sign In/Register')).tap();
});
