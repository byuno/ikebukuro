import { expect, test } from '@playwright/test';

test('Reward Level Multiple Unlocked', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward MM Unlocked",
                    "time": date,
                    "properties": {
                        "mm_promo_code": "ABCDE12345",
                        "dollar_amount": 5,
                        "reward_expiry_date_time": date
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});