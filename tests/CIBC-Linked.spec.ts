import { expect, test } from '@playwright/test';

test('CIBC Linked', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
    data: {
        "events": [
            {
                "external_id": "buno-test-carWashReceipt1", //CEPCustomerUniqueID
                "name": "CIBC Linked",
                "time": date
            }
        ]
    }
  })

  await expect(response).toBeOK();

});