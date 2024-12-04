import { expect, test } from '@playwright/test';

test('Reward Levels 1 and 2 Day 3 Reminder', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Levels 1 And 2 Day 3 Reminder",
                    "time": date,
                    "properties": {
                        "deeplink_type": "rewards" //Push notification only
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});