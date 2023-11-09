// FundraiserPage.js

import React from "react";

const FundraiserPage = () => {
  return (
    <div className="container mx-auto p-4 font-Playpensans text-center ">
      <h2 className="text-3xl font-bold mb-8 text-center font-ShadowsIntoLight">
        Fundraiser
      </h2>

      <p className="mb-8">
        To meet the financial needs of Rhonak's medical journey, your support is
        crucial. We've set a fundraising target that includes ongoing monthly
        treatment costs and anticipated transplant expenses. Your contributions
        make a vital difference in Rhonak's fight for better health.
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 font-ShadowsIntoLight">
          Donation Options
        </h3>

        {/* Impact Guru Fundraiser */}
        <div className="mb-6">
          <h4 className="text-xl font-bold mb-2 ">1. Impact Guru Fundraiser</h4>
          <p>
            We have an ongoing fundraiser on Impact Guru that covers most of
            Rhonak's medical expenses. Your contributions to this fundraiser are
            immensely appreciated.{" "}
            <a
              href="[Insert Impact Guru Fundraiser Link]"
              className="text-blue-500"
            >
              Donate Now
            </a>
          </p>
        </div>

        {/* Personal Bank Donation */}
        <div>
          <h4 className="text-xl font-bold mb-2">2. Personal Bank Donation</h4>
          <p>
            For those who wish to extend their generosity through Rhonak's
            personal bank account, your support is equally cherished. Your
            contributions ensure we can meet immediate needs and address
            unforeseen expenses.
          </p>
        </div>
      </div>

      <p className="mb-8">
        We deeply appreciate your support through Impact Guru, but it's
        important to note that occasional delays in bill payments and certain
        expenses may not be fully covered. Your kindness can make a significant
        difference in such instances.
      </p>

      <p>
        Your support, whether through the Impact Guru fundraiser or by donating
        to Rhonak's personal bank account, is more than a financial
        contribution; it is a heartfelt blessing that keeps our hopes high and
        spirits resilient. Thank you for being an invaluable part of this
        journey and for your unwavering support.
      </p>
    </div>
  );
};

export default FundraiserPage;
