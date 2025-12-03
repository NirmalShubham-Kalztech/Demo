import aboutImg from "../assets/about-img.png";
import leader1 from "../assets/leader1.png"; 
import leader2 from "../assets/leader2.png"; 
import award1 from "../assets/award1.png"; 
import award2 from "../assets/award2.png"; 
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";

export default function About() {
  return (
    <div className="w-full bg-white pt-20">

      {/* -------- ABOUT SECTION -------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="pt-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">
              ABOUT <span className="text-green-500">US</span>
            </h1>

            <div className="w-20 h-[3px] bg-yellow-400 mt-3 mb-6"></div>

            <p className="italic text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
              We live and breathe digital. The Internet is our home.
            </p>

            <p className="text-gray-700 text-[17px] leading-[1.9]">
              We are a buzzing digital media agency based out of New Delhi, India.
              Our team consists of experienced and hardworking social bees who
              breathe and live digital. Change on Facebook, Twitter, YouTube,
              Instagram, Google algorithm? Rest assured we know it the moment it’s out.
              <br /><br />
              We combine our years of experience in creating integrated social
              solutions with creative output to generate a rich digital experience
              for our clients. We think, we research, we create, and we deliver the
              best possible solutions.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-end items-start">
            <img
              src={aboutImg}
              alt="About Visual"
              className="w-[90%] md:w-[85%] h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* -------- LEADERSHIP SECTION -------- */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our <span className="text-green-500">Leadership</span>
          </h2>
          <div className="w-20 h-[3px] bg-yellow-400 mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src={leader1} className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">Rahul Sharma</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src={leader2} className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">Naina Kapoor</h3>
              <p className="text-gray-500">Creative Director</p>
            </div>

          </div>
        </div>
      </div>

      {/* -------- AWARDS SECTION -------- */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our <span className="text-yellow-400">Awards</span>
          </h2>
          <div className="w-20 h-[3px] bg-green-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-center">

            <img src={award1} className="w-28 mx-auto opacity-90" />
            <img src={award2} className="w-28 mx-auto opacity-90" />
            <img src={award1} className="w-28 mx-auto opacity-90" />
            <img src={award2} className="w-28 mx-auto opacity-90" />

          </div>
        </div>
      </div>

      {/* -------- CLIENTS SECTION -------- */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our <span className="text-green-500">Clients</span>
          </h2>
          <div className="w-20 h-[3px] bg-yellow-400 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">

            <img src={client1} className="w-24 mx-auto" />
            <img src={client2} className="w-24 mx-auto" />
            <img src={client3} className="w-24 mx-auto" />
            <img src={client4} className="w-24 mx-auto" />
            <img src={client1} className="w-24 mx-auto" />
            <img src={client2} className="w-24 mx-auto" />

          </div>

        </div>
      </div>

    </div>
  );
}
