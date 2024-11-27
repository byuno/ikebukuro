import { expect, test } from '@playwright/test';

test('CIBC Linked', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
    data: {
        "events": [
            {
                "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                "name": "CIBC Card Linking Prompted",
                "time": date
            }
        ]
    }
  })

  await expect(response).toBeOK();

});