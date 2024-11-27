import { expect, test } from '@playwright/test';

test('Reward Level 3 CPL Unlocked', async ({ request }) => {

    const date = new Date();
    const rewardExpiryDate = date.setDate(date.getDate()+60); //60 is in days

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Level 3 Day 21 Reminder",
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