export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Orange background header area that extends full width */}
      <div className="bg-orange-600 text-white w-full">
        {/* Content area with proper padding - navbar would be above this */}
        <div className="container mx-auto px-4 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-xl">Who we are & where do we stand</p>
        </div>
      </div>

      {/* Main content area with white background */}
      <div className="container mx-auto px-4 py-10 bg-white">
        <div className="max-w-4xl">
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-orange-800 mb-3">Vision</h2>
            <p className="text-gray-800 text-lg">
              Keeping the core values and the ethics in center, HiddenSafari – the NGO will be 
              a benchmark in training the youth for a better situation. The NGO will work for 
              enhancement of all good qualities in the modern youth with a brighter waw
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-orange-800 mb-3">Mission</h2>
            <p className="text-gray-800 text-lg">
              The motive of the NGO is to moderate the young thinking for a happy and 
              developed world. The youth become responsible and understand their own need 
              for the society and country is the heart value of the mission...
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-orange-800 mb-3">Objectives</h2>
            <p className="text-gray-800 text-lg mb-4">
              The idea of establishing NGO came up during the various activities with other 
              NGOs as a part of collaboration with NSS/NCC in college activities. It was a very 
              clear view behind the organization that it will be for young people and specially 
              students development activities will be given priority.
            </p>
            <p className="text-gray-800 text-lg">
              Keeping the ethics and value system in center, the NGO has thought for such 
              activities, which will fill valuable qualities in the youth. NGO is thankful to all the 
              young students of various colleges who are voluntarily giving a boost to the 
              activities. For spreading awareness in the field of adventure, NGO has planned 
              some very charming events as per regular basis.
            </p>
          </section>
        </div>
      </div>

      {/* The footer would go here, already existing */}
    </div>
  );
}