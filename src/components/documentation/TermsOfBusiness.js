import React from "react";

export const TermsOfBusiness = (setShowNav) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="title mt-6 mb-6">Terms Of Business</div>

        <div className="content">
          <h3>The products that we offer?</h3>
          <br></br>
          <p>
            Brocar LTD acts as an independent broker. We work with a carefully
            selected panel of lenders to provide you with access to a range of
            competitive products. Upon request a full list of the lenders that
            we work with is available. We recognise that it is important for
            customers to have the choice of shopping around as there are other
            lenders in the market that we do not have on our panel.
          </p>
          <br></br>
          <h3>Our Process</h3>
          <p>
            During our initial consultation we will ask a range of questions to
            gain an understanding of your needs. Using this information we will
            present a selection of products that could suit your lifestyle. In
            order to establish whether these products are the right fit for you
            we will explain the key features of the products to enable you to
            make an informed choice. Whilst we will not give any advice, if any
            information is unclear we encourage you to ask questions.
          </p>
          <p>
            Before entering any product agreement we ask that you read the terms
            and conditions. If any of the terms and conditions are unclear you
            should seek independent financial advice.
          </p>
          <p>
            To protect both your interest and ours if we are not satisfied that
            you completely understand the terms and conditions of the finance
            you are applying for we will not make the introduction to the
            lender.
          </p>
          <br></br>
          <h3>What is the cost to you for our services?</h3>
          <p>
            There is no fee payable to Brocar LTD from you for our services.
          </p>
          <p>
            The interest rate of your product is determined by a number of
            factors including the age of the car, the amount that you borrow and
            your credit profile. These factors may affect the commission we are
            paid from the lender for any deal that is written.
          </p>
          <p>
            We will receive commission from a lender for introducing them to
            you. Further information regarding the commission paid to us by a
            lender is available upon request. Should you wish to receive this
            information please let us know in writing.
          </p>
          <p>
            If your details were given to us by one of our panel of introducers
            they may also receive a portion of the commission received from the
            lender. We are not linked to any of our lending panel.
          </p>
          <p>
            Before entering into a contract with a lender, or before if
            requested, you will receive Pre-Contract Credit Information for
            products regulated by the FCA. This will declare any other fees
            relating to any particular product.
          </p>
          <br></br>
          <h3>Treating you Fairly</h3>
          <p>
            Our principal aim is to treat you fairly. To fulfil this principle
            we will always endeavour to:
          </p>
          <ul>
            <li>Conduct all of our business with integrity, skill and care</li>
            <li>
              Deal with any complaint sympathetically, efficiently and
              independently of the colleague to whom the complaint is directed
            </li>
            <li>Be transparent in all matters including any remuneration</li>
            <li>Respect confidentiality</li>
          </ul>
          <br></br>
          <p>Your Responsibilities:</p>
          <p>In order for us to fulfil our responsibilities, you must:</p>
          <ul>
            <li>
              Read the documentation we give you and let us know if there is
              anything that is unclear or that does not represent your
              requirements
            </li>
            <li>
              Comply with the terms and conditions of any agreement we arrange
              for you
            </li>
          </ul>
          <br></br>
          <h3>Who regulates us?</h3>
          <p>
            Brocar Limited, Regus House, Fairbourne Drive, Atterbury, Milton
            Keynes, MK10 90RG are regulated and authorised by the Financial
            Conduct Authority. Our FCA Authorisation Number is 944254.
          </p>
          <p>
            We are authorised for full permission Credit broking with
            debt-adjusting and debt-counselling.
          </p>
          <p>
            You can check this on the Financial Services Register by visiting
            the FCA’s website here: https://register.fca.org.uk/register or by
            contacting the FCA on 0800 111 6768 (freephone) or 0300 500 8082
            from the UK.
          </p>
          <h3>Privacy, Data Protection and Confidentiality</h3>
          <p>
            Please find a link to our <a href="/privacy">privacy policy </a>and
            our <a href="/complaints">complaints policy</a> here.
          </p>
        </div>
      </div>
    </section>
  );
};
