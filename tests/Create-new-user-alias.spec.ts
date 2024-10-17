import { test } from '@playwright/test';

test('Create new user alias', async ({ request }) => {
  const response = await request.post('users/alias/new', {
    data: {
      "user_aliases" : [{
        "external_id": "buno-test-carWashReceipt0",
        "alias_name" : "example_nameTEST16",
        "alias_label" : "example_labelTEST16"
      }],
    }
  })

  console.log(response.status())
});
