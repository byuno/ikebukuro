import { expect, test } from '@playwright/test';

test('Reward Level Multiple Unlocked', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Level 3 Aeroplan Unlocked",
                    "time": date
                }
            ]
        }
  })

    await expect(response).toBeOK();
});