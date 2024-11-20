import { expect, test } from '@playwright/test';

test('Reward Level Multiple Unlocked', async ({ request }) => {

    const date = new Date();
    const rewardExpiryDate = date.setDate(date.getDate()+60); //60 is in days

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Level Multiple Unlocked",
                    "time": date,
                    "properties": {
                        //    "app_id": "{{$guid}}", //Push notification only
                        "deeplink_type": "deals" //Push notification only
                        //    "reward_expiry_date_time": "{{$isoTimestamp}}" //Push notification only
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});