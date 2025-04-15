export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange header section with title and quote */}
      <div className="bg-orange-600 text-white py-16 px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-lg">Life is either a daring adventure or nothing.</p>
        </div>
      </div>

      {/* Main content with office cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Office 1 Card */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Office 1(Head Office)</h2>
            <p className="mb-1">308, University, Above Chocolate Room,</p>
            <p className="mb-1">ABC Cross Roads, XYZ,</p>
            <p className="mb-4">XXX, - 3X00X9</p>
            
            <p className="mb-4">Office Timings: 11AM to 8PM</p>
            
            <div className="space-y-2 mb-4">
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
            </div>
            
            <div className="text-right">
              <a href="#" className="text-orange-600 inline-flex items-center">
                View On Map <span className="ml-1">↗</span>
              </a>
            </div>
          </div>

          {/* Office 2 Card */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Office 2</h2>
            <p className="mb-1">308, University, Above Chocolate Room,</p>
            <p className="mb-1">ABC Cross Roads, XYZ,</p>
            <p className="mb-4">XXX, - 3X00X9</p>
            
            <p className="mb-4">Office Timings: 11AM to 8PM</p>
            
            <div className="space-y-2 mb-4">
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
            </div>
            
            <div className="text-right">
              <a href="#" className="text-orange-600 inline-flex items-center">
                View On Map <span className="ml-1">↗</span>
              </a>
            </div>
          </div>

          {/* Office 3 Card */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Office 3</h2>
            <p className="mb-1">308, University, Above Chocolate Room,</p>
            <p className="mb-1">ABC Cross Roads, XYZ,</p>
            <p className="mb-4">XXX, - 3X00X9</p>
            
            <p className="mb-4">Office Timings: 11AM to 8PM</p>
            
            <div className="space-y-2 mb-4">
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
            </div>
            
            <div className="text-right">
              <a href="#" className="text-orange-600 inline-flex items-center">
                View On Map <span className="ml-1">↗</span>
              </a>
            </div>
          </div>

          {/* Office 4 Card */}
          <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Office 4</h2>
            <p className="mb-1">308, University, Above Chocolate Room,</p>
            <p className="mb-1">ABC Cross Roads, XYZ,</p>
            <p className="mb-4">XXX, - 3X00X9</p>
            
            <p className="mb-4">Office Timings: 11AM to 8PM</p>
            
            <div className="space-y-2 mb-4">
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
              <p className="flex items-center text-orange-600">
                <span className="mr-2">📞</span> +91-XXX6475XXX
              </p>
            </div>
            
            <div className="text-right">
              <a href="#" className="text-orange-600 inline-flex items-center">
                View On Map <span className="ml-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer is already included separately */}
    </div>
  );
}