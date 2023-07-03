

export default function TCModal() {
  return (
    <div
      className="modal fade "
      id="tcModal"
      tabIndex="-1"
      aria-labelledby="tcLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content rounded">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body ">
            <div className="headerText text-center" id="tcLabel">
              Terms and Conditions
            </div>
            <div className="container text-black my-5 overflow-scroll">
              Thank you for visiting the Aero Wings Travel and Cargo agency
              website. By accessing or using our website, you agree to comply
              with and be bound by the following terms and conditions. Please
              read these terms carefully before using our website.
              <br />
              <br />
              Use of the Website <br />
              a. The content provided on this website is for general information
              purposes only. It is subject to change without notice. <br />
              b. Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offense. <br />
              c. Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable.
              <br />
              <br />
              Intellectual Property <br />
              a. This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, graphics, and content. Reproduction is prohibited without
              prior written consent. <br />
              b. All trademarks reproduced on this website, which are not the
              property of, or licensed to, the operator, are acknowledged on the
              website.
              <br />
              <br />
              Privacy <br />
              a. We are committed to protecting your privacy. Any personal
              information provided by you is subject to our Privacy Policy.
              <br />
              <br />
              Links to Third-Party Websites <br />
              a. Our website may contain links to other websites. These links
              are provided for your convenience to provide further information.
              We have no control over the content or availability of those
              sites. The inclusion of any links does not necessarily imply a
              recommendation or endorsement of the views expressed within them.
              <br />
              <br />
              Disclaimer <br />
              a. We strive to keep the information on our website accurate and
              up to date. However, we make no representations or warranties of
              any kind, express or implied, about the completeness, accuracy,
              reliability, suitability, or availability with respect to the
              website or the information, products, services, or related
              graphics contained on the website for any purpose.
              <br />
              <br />
              Limitation of Liability <br />
              a. In no event shall Aero Wings Travels & Cargo Agency be liable
              for any direct, indirect, incidental, special, or consequential
              damages arising out of or in any way connected with the use of
              this website. <br />
              <br />
              Governing Law <br />
              a. These terms and conditions shall be governed by and construed
              in accordance with the laws of the Republic of India, and any
              disputes arising under or in connection with these terms and
              conditions shall be subject to the exclusive jurisdiction of the
              courts of Hyderabad, Telangana, India. <br />
              <br />
              By using this website, you acknowledge that you have read,
              understood, and agreed to these terms and conditions. If you do
              not agree to these terms, please refrain from using our website.{" "}
              <br />
              <br />
              For any questions or clarifications regarding these terms and
              conditions, please contact us. <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
