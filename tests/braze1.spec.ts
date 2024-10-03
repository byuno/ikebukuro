import { test } from '@playwright/test';

test('Create new user alias', async ({ request }) => {
  const context = await request.post('users/alias/new', {
    data: {
      "user_aliases" : [{
        "external_id": "buno-test-carWashReceipt0",
        "alias_name" : "example_name",
        "alias_label" : "example_label"
      }],
    }
  })
});
