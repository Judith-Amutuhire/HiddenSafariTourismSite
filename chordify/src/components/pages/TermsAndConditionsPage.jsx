export default function TermsAndConditionsPage() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Orange background header area that extends full width */}
        <div className="bg-orange-600 text-white w-full">
          {/* Content area with proper padding - navbar would be above this */}
          <div className="container mx-auto px-4 pt-20 pb-10">
            <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
            <p className="text-xl">Meet the norms behind our Success</p>
          </div>
        </div>
  
        {/* Main content area with white background */}
        <div className="container mx-auto px-4 py-6 bg-white">
          <div className="max-w-4xl">
            <section className="mb-6">
              <h2 className="text-xl font-medium text-orange-800 mb-3">Booking, payments and cancellations</h2>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-800 mb-2">1.Booking confirmation</h3>
                <p className="text-gray-800 mb-3">
                  After a client requests a quote on our website, we promptly send a 
                  comprehensive itinerary to their email address. This detailed itinerary outlines 
                  the various destinations they will visit, the activities they will do and 
                  accommodations where they will stay, allowing them to gain a clear 
                  understanding of what to anticipate. Following this, it is imperative for the client 
                  to either confirm their acceptance of the proposed itinerary or provide 
                  suggestions for any modifications they desire.
                </p>
                <p className="text-gray-800">
                  The safari services agreed upon with the client throughout this process will be 
                  diligently provided, except in the event of unforeseen circumstances, such as 
                  road closures, bad weather, or security concerns. In such cases, the itinerary 
                  may be changed or terminated (see sections 5.3.2. and 5.3.3).
                </p>
              </div>
  
              <div className="mb-4">
                <h3 className="font-medium text-gray-800 mb-2">2.Payment</h3>
                <p className="text-gray-800 mb-3">
                  Payments can be made by bank wire/transfer, debit or credit card as well as 
                  other direct card payments.
                </p>
                <p className="text-gray-800 mb-3">
                  After clients accept a proposal, they receive an invoice with all details. We 
                  require a 50% deposit payment of the itinerary cost within 10 days of receiving 
                  the invoice and 100% upfront payment if the booking was made within 61 days 
                  prior to departure. We cannot guarantee a booking if a deposit or a full amount is 
                  delayed.
                </p>
                <p className="text-gray-800 mb-3">
                  If clients book international airline tickets with us, we require 100% payment 
                  within a specified reservation deadline.
                </p>
                <p className="text-gray-800 mb-3">
                  In both cases, full payment must be made no later than 61 days before the 
                  departure date. Failure to make full payment by this deadline gives us the right to 
                  cancel the holiday and apply the applicable cancellation charges (refer to section 
                  5.3.1). The travel agreement will then be automatically dissolved and you will 
                  receive a notification prior. In such cases, we bear no liability and cancellation is 
                  without penalty to us. The lead booking name is responsible for full payment on 
                  behalf of the entire party, and all members agree to the stated conditions. The 
                  lead booking name is severally responsible for all duties resulting from the 
                  agreement.
                </p>
              </div>
  
              <div className="mb-4">
                <h3 className="font-medium text-gray-800 mb-2">3.Cancellations and/or refunds</h3>
                <h4 className="font-medium text-gray-700 mb-2">5.3.1 Cancellation by the client</h4>
                <p className="text-gray-800 mb-3">
                  In the event that you cancel your booking, in full or partially, Afrika Safari will levy 
                  cancellation charges as defined in the section below. This is only different if the 
                  traveler terminates the contract because he does not accept a proposal for a 
                  substantial change to the trip or if the trip is canceled by the traveler if 
                  unavoidable and unforeseeable circumstances occur at the place of destination 
                  that significantly affect the execution of the trip. In these situations, Afrika Safari 
                  will not charge cancellation fees if she believes that the traveler can validly 
                  appeal to the situations mentioned above.
                </p>
                <ul className="list-disc pl-6 mb-3">
                  <li className="text-gray-800 mb-1">61+ days before departure: deposit non-refundable</li>
                  <li className="text-gray-800">0-61 days before departure: 100% of the itinerary cost</li>
                </ul>
  
                <h4 className="font-medium text-gray-700 mb-2">5.3.2 Cancellation by AS</h4>
                <p className="text-gray-800 mb-2">
                  Whilst we always endeavor to avoid cancellations, we reserve the right to cancel 
                  your holiday for the reasons and respecting the deadlines specified below.
                </p>
                <p className="font-medium text-gray-700 mb-2">Reasons:</p>
                <ul className="list-disc pl-6 mb-3">
                  <li className="text-gray-800 mb-1">If you don't comply with your duty to pay the travel sum.</li>
                  <li className="text-gray-800 mb-1">
                    If we have a legitimate fear that you will not or not fully pay the travel sum, 
                    before payment has become claimable.
                  </li>
                  <li className="text-gray-800 mb-1">
                    When, on a date specified in the agreement, it becomes clear that the 
                    minimum number of participants is insufficient.
                  </li>
                </ul>
  
                <p className="font-medium text-gray-700 mb-2">Deadlines:</p>
                <ul className="list-disc pl-6 mb-3">
                  <li className="text-gray-800 mb-1">
                    For trips of more than 6 days: termination will have to be done not later than 
                    20 days before departure.
                  </li>
                  <li className="text-gray-800 mb-1">
                    For trips of 2-6 days: termination will have to be done not later than 7 days 
                    before departure.
                  </li>
                  <li className="text-gray-800 mb-1">
                    For trips of less than 2 days: termination will have to be done not later than 48 
                    hours before departure.
                  </li>
                </ul>
  
                <p className="text-gray-800 mb-3">
                  Deadlines for last-minute trips, that is trips taking place within 61 days of the 
                  booking, the full travel price must be paid within two days of the invoice being 
                  sent, regardless of the default 10 days deadline mentioned on the invoice 
                  document. If the traveler does not pay, they have breached the legal contract and the 
                  contract may be terminated immediately by AS.
                </p>
                <p className="text-gray-800 mb-3">
                  We may also be entitled to cancel your holiday during your trip if you fail to 
                  comply with local laws, tours, carriers and accommodations regulations.
                </p>
                <p className="text-gray-800 mb-3">
                  We cannot accept liability where the performance or prompt performance of our 
                  contractual obligations is prevented or affected by your failure to adhere to 
                  applicable local laws as well as tours, carriers and accommodations regulations.
                </p>
                <p className="text-gray-800 mb-3">
                  If you fail to comply with the above or commit any illegal act, or if AS (acting 
                  reasonably) believes that the client's behavior is causing or is likely to cause 
                  danger, distress, or material annoyance to others, AS may terminate your travel 
                  arrangements without liability on AS's part, and you will not be entitled to any 
                  refund for unused or missed services or costs incurred as a result of the 
                  termination.
                </p>
                <p className="text-gray-800 mb-3">
                  Moreover, we cannot accept liability where the performance or prompt 
                  performance of our contractual obligations is prevented or affected by, or you 
                  suffer any damage or loss as a result of force majeure (refer to section 15.1). In 
                  circumstances amounting to force majeure, we cannot refund any money to you. 
                  Although, if we can recover any monies from our service providers, we will refund 
                  these to you. In any case, you are not entitled to additional compensation.
                </p>
                <p className="text-gray-800">
                  We may cancel your confirmed holiday if you fail to comply with any requirement 
                  of these booking conditions entitling us to cancel.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }