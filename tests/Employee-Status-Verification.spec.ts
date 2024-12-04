import { expect, test } from '@playwright/test';

test('Employee Status Verification', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Employee Status Verification",
                    "time": date,
                    "properties": {
                        //"activation_code": "code123" // spotted discrepency on July 31
                        "activation_token": "code123"   // July 31 - alignment value with segment documentation
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});