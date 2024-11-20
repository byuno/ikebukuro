import { test } from '@playwright/test';

test('Create new user alias', async ({ request }) => {
  const response = await request.post('users/alias/new', {
    data: {
      "user_aliases" : [{
        "external_id": process.env.EXTERNAL_ID,
        "alias_name" : "example_nameTEST20",
        "alias_label" : "example_labelTEST20"
      }],
    }
  })

  console.log(response.status())
});
