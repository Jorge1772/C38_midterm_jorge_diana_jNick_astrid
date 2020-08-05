import React from 'react';
import Footer from './Footer';

const heading = {
  fontSize: '60px',
  margin: '20px',
  textAlign: 'center',
  color: '#51544f',
  paddingBottom: 15,
  paddingTop: 20
};

const secondHeading = {
  fontSize: '25px',
  color: '#51544f'
};

const FaqPage = () => {
  return (
    <>
      <div className="container">
        <h1 style={heading}>
          Keeping Your Pets Safe During the COVID-19 Crisis
        </h1>

        <p className="faqPTags">
          The CDC says there’s no evidence that any animals in the U.S. have
          contracted or can spread the virus. This also means that quarantining
          them is an unnecessary measure. (And using medical masks, even for
          entertaining photo ops, is a wasteful and potentially dangerous
          practice, in light of shortages of these essential supplies at
          hospitals that really need them.)
        </p>
        <h3 style={secondHeading}>
          How can I best care for my pet during this time?
        </h3>

        <p className="faqPTags">
          The ASPCA encourages all pet owners to incorporate pets into their
          preparedness plans in the event they are impacted by COVID-19. Pet
          owners should make contingency plans with family, friends or
          neighbors, so that they have two or more emergency caregivers who can
          provide care for their pet if they are unable to do so – either in the
          owner’s home or by temporarily relocating the animal to a caretaker’s
          home, a boarding kennel or veterinary office. Emergency caretakers
          should have keys and written permission to access the owner's
          residence and to make decisions for the pet. In addition to stocking
          up on essential supplies such as pet food and medications, pet owners
          should keep pet identification and veterinary information in one
          place. Veterinary contact information should also be easily
          accessible.
        </p>
        <h3 style={secondHeading}>
          Is COVID-19 transmittable between humans and animals?
        </h3>
        <p className="faqPTags">
          Based on current evidence, companion animals do not play a meaningful
          role in the transmission of COVID-19 and there have been no documented
          cases of companion animals transmitting the virus to people. We are
          continuing to monitor new information as it becomes available.
        </p>

        <h3 style={secondHeading}>
          What should I do if I get sick? Should I avoid contact with my pet?
        </h3>
        <p className="faqPTags">
          Pet owners impacted by COVID-19 can and should keep their pets with
          them while they are in home quarantine, as recommended by the CDC and
          the WHO. You should have another member of the household provide care
          for animals, if possible. Where that isn’t possible, you should limit
          close contact with your pets, wash your hands regularly, and wear a
          face mask while caring for animals. If you become sick or
          hospitalized, you should refer to your preparedness plan and activate
          emergency caretakers to provide care for your pets.
        </p>
        <h3 style={secondHeading}>
          I heard that there were a few tigers, cats and a dog infected with
          COVID-19. What does that mean for domestic pets?
        </h3>
        <p className="faqPTags">
          Spread of COVID-19 is the result of person-to-person transmission and
          the risk to companion animals, at this time, is believed to be low.
          There is no evidence that companion animals play a meaningful role in
          spreading the virus. We are continuing to monitor new information as
          it becomes available.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FaqPage;
