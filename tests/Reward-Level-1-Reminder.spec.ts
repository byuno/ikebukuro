import { expect, test } from '@playwright/test';

test('Reward Level 1 Reminder', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Level 1 Reminder",
                    "time": date,
                    "properties": {
                        "reward_expiry_date_time": date
                    }
                }
            ]
        }
    })

    await expect(response).toBeOK();

});