import { expect, test } from '@playwright/test';

function generateGUID() {
    // This is the template for a version 4 GUID
    var template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

    // Replace each 'x' and 'y' in the template with random hexadecimal digits
    var guid = template.replace(/[xy]/g, function(character) {
        // Generate a random number between 0 and 15
        var randomNumber = Math.random() * 16 | 0;

        // If the character is 'x', use the random number
        // If the character is 'y', ensure the number is one of 8, 9, A, or B
        var value = character === 'x' ? randomNumber : (randomNumber & 0x3 | 0x8);

        // Convert the number to a hexadecimal string
        return value.toString(16);
    });

    return guid;
}


test('Reward Level 2 Unlocked', async ({ request }) => {

    const date = new Date();
    const guid = generateGUID()
    const rewardExpiryDate = date.setDate(date.getDate()+60); //60 is in days

    const response = await request.post('/users/track', {
        data: {
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID, //CEPCustomerUniqueID
                    "name": "Reward Level 2 Unlocked",
                    "time": date,
                    "properties": {
                        "app_id": guid,
                        "deeplink_type": "deals",
                        "customer_reward_id": guid, // TODO: WHAT IS FORMAT
                        "reward_expiry_date_time": rewardExpiryDate
                    }
                }
            ]
        }
  })

    await expect(response).toBeOK();
});