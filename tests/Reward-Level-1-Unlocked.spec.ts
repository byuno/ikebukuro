import { expect, test } from '@playwright/test';

test('Create new user alias', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": "buno-test-carWashReceipt1", //CEPCustomerUniqueID
                    "name": "Reward Level 1 Unlocked",
                    "time": date,
                    "properties": {
                        //                "app_id": "{{$guid}}",
                        "deeplink_type": "deals",
                        //                "customer_reward_id": "{{$guid}}", // TODO: WHAT IS FORMAT
                        "reward_expiry_date_time": date
                    }
                }
            ]
        }   
  })

  await expect(response).toBeOK();

});