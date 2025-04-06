const About = () => {
  return (
    <div className="h-fit w-screen bg-gradient-to-t from-slate-700 to-slate-900">
      <div className="pt-[80px] text-5xl font-bold text-center text-neutral-200 font-mono">
        About Kestrel
      </div>
      <div className="text-amber-50 pt-6 text-center font-serif justify-center w-2/3 items-center m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <section className="flex flex-row gap-20 items-center justify-center pt-8 w-screen">
        <div className="w-78 flex flex-col border-2 h-100 shadow-neutral-600 shadow-2xl overflow-y-hidden">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">Circuitry</h1>
            <p className="flex justify-center text-center pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="w-78 flex flex-col border-2 h-100 shadow-neutral-600 shadow-2xl overflow-y-hidden">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">
              Model Training
            </h1>
            <p className="flex justify-center text-center pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="w-78 flex flex-col border-2 h-100 shadow-neutral-600 shadow-2xl overflow-y-hidden">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">Research</h1>
            <p className="flex justify-center text-center pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 w-screen">
        <div className="">
          <div className="absolute flex justify-center pt-5 w-screen">
            <h1 className="text-5xl font-serif font-bold text-amber-100">
              The Team
            </h1>
          </div>
          <img className="" src="GroupSample.jpg" />
        </div>
      </section>
    </div>
  );
};

export default About;
