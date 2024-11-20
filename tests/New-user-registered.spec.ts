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

test('New User Registered', async ({ request }) => {

    const date = new Date();
    const guid = generateGUID()

    const response = await request.post('/users/track', {
    data: {
        
            "attributes": [
                {
                    "external_id": process.env.EXTERNAL_ID, //"{{external_id}}", //CEPCustomerUniqueID (required)
                    "first_name": "BobbyPWupdated",
                    "last_name": "Uno",
                    "email": "bobby.uno+cwr1update@applydigital.com",//"{{email}}",
                    //"has_email_verified": false,
                    "has_verified_email": true,
                    "phone": "+16478026902", // E.164 format
                    "email_subscribe": "opted_in", //Choices are "opted_in" and "unsubscribed"
                    "has_app": false, //Member_App_Download = 0
                    "language": "fr", //French = "fr"
                    "country": "CA",
                    "has_linked_aeroplan": true, //Member_AE_Linked = 1
                    "has_linked_cibc": true, //Member_CIBC_Linked = 1
                    "unsubscribe_token": guid, //Member_Unsubscribe_Token
                    "postal_code": "H0H 0H0",
                    "account_status": "enrolled" // enrolled|suspended|deleted
                }
            ],
            "events": [
                {
                    "external_id": process.env.EXTERNAL_ID,//"{{external_id}}", //CEPCustomerUniqueID
                    "name": "New User Registered",
                    "time": date,
                    "properties": {
                        "has_rewards_unlocked": true
                    }
                }
            ]
        
    }
  })

  console.log(response.status());
  
  await expect(response).toBeOK();

});