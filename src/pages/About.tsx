const About = () => {
  return (
    <div className="h-fit w-screen bg-gradient-to-t from-slate-700 to-slate-900">
      <div className="pt-[80px] text-5xl font-bold text-center text-neutral-200 font-mono">
        About Kestrel
      </div>
      <div className="text-amber-50 pt-6 text-center font-serif justify-center w-2/3 items-center m-auto">
        Kestrel is an autonomous videography drone initiative developed by
        student teams within ACM at UCF, focused on pushing the boundaries of
        aerial robotics. The project combines expertise from both hardware and
        software disciplines to design, build, and program drones capable of
        intelligent flight. Whether it's object detection, pathfinding, or
        dynamic control, Kestrel aims to provide a comprehensive platform for
        learning, research, and innovation in autonomous systems.
      </div>
      <section className="flex flex-row gap-20 items-center justify-center pt-8 w-screen">
        <div className="w-78 flex flex-col border-4 h-120 shadow-neutral-600 shadow-2xl overflow-y-hidden border-gray-700">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full h-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">Circuitry</h1>
            <p className="flex justify-center text-center pt-4">
              The Hardware Team is responsible for the electronic backbone of
              Kestrel. From designing custom PCBs to integrating sensors, power
              systems, and motor controllers, this team ensures the drone has a
              robust and reliable infrastructure. Their work allows Kestrel to
              maintain stable flight and interface seamlessly with onboard
              computing units and software components.
            </p>
          </div>
        </div>
        <div className="w-78 flex flex-col border-4 h-120 shadow-neutral-600 shadow-2xl overflow-y-hidden border-gray-700">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full h-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">
              Model Training
            </h1>
            <p className="flex justify-center text-center pt-4">
              The Software Team specializes in developing machine learning
              models to give Kestrel its intelligence. Using datasets gathered
              from real-world testing and simulation environments, the team
              trains models for object detection, flight path optimization, and
              obstacle avoidance. These models are then deployed onto the drone,
              enabling it to make decisions in real-time.
            </p>
          </div>
        </div>
        <div className="w-78 flex flex-col border-4 h-120 shadow-neutral-600 shadow-2xl overflow-y-hidden border-gray-700">
          <img
            className="h-1/3 border-b-3 border-b-gray-800"
            src="FlyingDrone.jpg"
          ></img>
          <div className="w-full h-full bg-amber-50">
            <h1 className="text-2xl text-center text-neutral-900">Research</h1>
            <p className="flex justify-center text-center pt-4">
              Our research focuses onreinforcement learning, deep learning,
              obstacle avoidance, and flight path optimization. By experimenting
              with neural networks and decision-making algorithms, we aim to
              improve Kestrel's ability to fly autonomously in dynamic
              environments. This includes navigating complex spaces, adapting to
              unseen obstacles, and making real-time decisions without human
              input.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 w-screen">
        <div className="">
          <div className="absolute flex justify-center pt-10 w-screen">
            <h1 className="text-5xl font-serif font-bold text-neutral-700">
              The Team
            </h1>
          </div>
          <img className="" src="FD_4.png" />
        </div>
      </section>
    </div>
  );
};

export default About;
