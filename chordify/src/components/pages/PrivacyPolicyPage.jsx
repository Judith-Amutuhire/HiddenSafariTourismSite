export default function PrivacyPolicyPage() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Orange background header area that extends full width */}
        <div className="bg-orange-600 text-white w-full">
          {/* Content area with proper padding - navbar would be above this */}
          <div className="container mx-auto px-4 pt-20 pb-10">
            <h1 className="text-4xl font-bold mb-2">Privacy policy</h1>
            <p className="text-xl">Meet the heroes behind our Success</p>
          </div>
        </div>
  
        {/* Main content area with white background */}
        <div className="container mx-auto px-4 py-10 bg-white">
          <div className="max-w-4xl">
            <section className="mb-8">
              <h2 className="text-2xl font-medium text-orange-800 mb-4">Guarantee of confidentiality</h2>
              <p className="text-gray-800 text-lg">
                We are committed to protecting your privacy online. Our privacy policy is
                designed to give you peace of mind and confidence. We may change this policy
                from time to time by updating this page and you should check this page to
                ensure that you are happy with any changes. This policy is effective from 1st of
                December 2021 onwards.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-medium text-orange-800 mb-4">Cookie usage</h2>
              <p className="text-gray-800 text-lg">
                We use cookies on our website for a variety of reasons. Cookies help us identify
                the device you are using and how you use our website, but not you personally.
                Cookies record anonymous information about visits and clicks on each webpage.
                Cookies are small files which are stored on your computer when you visit a
                website. However, they cannot be used to identify you personally and they are
                not harmful to your computer. They are essential for several features of our
                website to work, they help us to identify which pages are being used, and to
                analyse data and improve our site. We use this information for statistical analysis
                purposes only and they in no way give us any information about you. If you
                choose, you can opt out by turning off cookies in the preferences settings in your
                web browser.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }