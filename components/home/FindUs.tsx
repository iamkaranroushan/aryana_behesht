export default function FindUs() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full h-[clamp(40rem,50vw,60rem)] lg:h-[clamp(30rem,50vw,40rem)]">

      {/* Left: Map */}
      <div className="basis-1/2 h-full relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1417.7453448048602!2d-63.67052030160521!3d44.7095962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5989edcac6d4a1%3A0x1c7cea666b36bb60!2sAryana%20behesht!5e0!3m2!1sen!2sin!4v1773994597147!5m2!1sen!2sin"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* Right: Info */}
      <div className="basis-1/2 flex flex-col justify-center items-center md:items-start bg-black px-8 py-[clamp(5rem,5vw,10rem)] text-center md:text-left">
        
        <div className="flex items-center mb-2 text-stone-400 text-sm lg:text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          <span>Find us at</span>
        </div>

        <h3 className="text-[clamp(2rem,3vw,8rem)] font-extrabold mb-4 text-white">
          Aryana Behesht
        </h3>

        <p className="text-[clamp(1.4rem,3vw,2.5rem)] leading-snug text-stone-400">
          805 Bedford Hwy,
          <br />
          Bedford, NS B4A 0K1,
          <br />
          Canada
        </p>
      </div>
    </div>
  );
}