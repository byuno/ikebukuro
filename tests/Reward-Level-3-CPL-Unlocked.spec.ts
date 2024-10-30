import { expect, test } from '@playwright/test';

test('Reward Level 3 CPL Unlocked', async ({ request }) => {

    const date = new Date();
    const rewardExpiryDate = date.setDate(date.getDate()+60); //60 is in days

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": "{{external_id}}", //CEPCustomerUniqueID
                    "name": "Reward Level 3 Cpl Unlocked",
                    "time": date,
                    "properties": {
                        // "app_id": "{{$guid}}",
                        "deeplink_type": "deals",
                        //"deeplink_type": "journie://deals",
                        // "customer_reward_id": "{{$guid}}", // TODO: WHAT IS FORMAT
                        "reward_expiry_date_time": rewardExpiryDate
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});