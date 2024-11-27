import { expect, test } from '@playwright/test';

test('Reward Level Multiple Unlocked', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Levels 1 And 2 Day 21 Reminder",
                    "time": date,
                    "properties": {
                        "deeplink_type": "deals" //Push notification only
                    }            
                }
            ]
        }
  })

    await expect(response).toBeOK();
});