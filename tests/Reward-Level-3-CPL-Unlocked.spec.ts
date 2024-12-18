import { expect, test } from '@playwright/test';

test('Reward Level 3 CPL Unlocked', async ({ request }) => {

    const date = new Date();
    const rewardExpiryDate = date.setDate(date.getDate()+60); //60 is in days

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Level 3 Cpl Reminder",
                    "time": date,
                    "properties": {
                        "reward_expiry_date_time": rewardExpiryDate
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});