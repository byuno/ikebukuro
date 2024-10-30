import { expect, test } from '@playwright/test';

test('New User Registered', async ({ request }) => {
   const response = await request.post('/users/track', {
    data: {
        
            "attributes": [
                {
                    "external_id": "buno-test-carWashReceipt1", //"{{external_id}}", //CEPCustomerUniqueID (required)
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
                    "unsubscribe_token": "{{$guid}}", //Member_Unsubscribe_Token
                    "postal_code": "H0H 0H0",
                    "account_status": "enrolled" // enrolled|suspended|deleted
                }
            ],
            "events": [
                {
                    "external_id": "buno-test-carWashReceipt1",//"{{external_id}}", //CEPCustomerUniqueID
                    "name": "New User Registered",
                    "time": "{{$isoTimestamp}}",
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