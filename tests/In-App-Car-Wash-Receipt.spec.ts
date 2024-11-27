import { expect, test } from '@playwright/test';

test('Reward Level Multiple Unlocked', async ({ request }) => {

    const date = new Date();

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID,//"{{external_id}}", //CEPCustomerUniqueID
                    "name": "In-App Car Wash Purchased",
                    "time": date,
                    "properties": {
                        "journie_card_number": "7078647445411739",
                        "order_id": "E17A0621",
                        "payment_type": "APPLEPAY",
                        "points_earned": 89,
                        "purchase": "Absolutely Everything",
                        "quantity": 1,
                        "subtotal": 50,
                        "taxes": [
                            {
                                "amount": 2.5,
                                "name": "GST",
                                "rate": 5
                            },
                            {
                                "amount": 4.99,
                                "name": "QST",
                                "rate": 9.975
                            }
                        ],
                        "total": 59.49
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});