import { expect, test } from '@playwright/test';

test('Reward Level Multiple Reminder', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Level Multiple Reminder",
                    "time": date
                }
            ]
        }
  })

    await expect(response).toBeOK();
});