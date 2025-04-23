import { CardStackText } from "../../our-story/_components/cardStack";

export const CARDS = [
  [
    {
      id: 0,
      type: "content" as const,
      content: (
        <CardStackText number={1} title="June 2023: The Spark">
          <div>
            <h3 className="text-base sm:text-lg text-gray-600 font-medium">
              Problem Identification:
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Bidding professionals drowning in paperwork and inefficient tender
              processes
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg text-gray-600 font-medium">
              Vision Formed:
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Create a digital solution that transforms how businesses handle
              tenders
            </p>
          </div>
        </CardStackText>
      ),
    },
    {
      id: 1,
      type: "image" as const,
      imageSrc:
        "https://mytender.b-cdn.net/Our%20Story/Journey%20images%201%20-5/Sam%20Progreening.jpg",
    },
  ],
  [
    {
      id: 0,
      type: "content" as const,
      content: (
        <CardStackText number={2} title="Sep 2023: The foundation">
          <div>
            <p className="text-sm sm:text-base text-gray-600">
              First line of code written for mytender.io platform <br />
              <br />
              Core team assembled - bringing together procurement experts and
              tech innovators
              <br />
              <br /> Beta testing begins with a handful of trusted partner
            </p>
          </div>
        </CardStackText>
      ),
    },
    {
      id: 1,
      type: "image" as const,
      imageSrc:
        "https://mytender.b-cdn.net/Our%20Story/Journey%20images%201%20-5/Software%20SS%20(For%20Our%20Story%20Page).png",
    },
  ],
  [
    {
      id: 0,
      type: "content" as const,
      content: (
        <CardStackText number={3} title="Feb 2024: Launch & Learn">
          <div>
            <p className="text-sm sm:text-base text-gray-600">
              Official launch of mytender.io to the public
              <br />
              <br />
              Key partnerships established with industry leaders
            </p>
          </div>
        </CardStackText>
      ),
    },
    {
      id: 1,
      type: "image" as const,
      imageSrc:
        "https://mytender.b-cdn.net/Our%20Story/Journey%20images%201%20-5/Presenting%20at%20the%20SJM%20Opening.png",
    },
  ],
  [
    {
      id: 0,
      type: "content" as const,
      content: (
        <CardStackText number={4} title="Summer 2024: Scaling Heights">
          <div>
            <p className="text-sm sm:text-base text-gray-600">
              User base grows 300% as word spreads <br />
              <br />
              Enterprise solution developed for larger organisations
              <br />
              <br /> <span className="font-medium">
                Industry recognition:
              </span>{" "}
              Winner of VFS 2024 "Innovation Award"
            </p>
          </div>
        </CardStackText>
      ),
    },
    {
      id: 1,
      type: "image" as const,
      imageSrc:
        "https://mytender.b-cdn.net/Our%20Story/Journey%20images%201%20-5/93d8af76-3085-4002-83f3-22b4c09fdce6.JPG",
    },
  ],
  [
    {
      id: 0,
      type: "content" as const,
      content: (
        <CardStackText number={5} title="March 2025: A new chapter">
          <div>
            <p className="text-sm sm:text-base text-gray-600">
              Rapid growth and customer success stories attracts VC investment
              from Fuel Ventures <br />
              <br /> mytender.io are now leading the way to better bidding
            </p>
          </div>
        </CardStackText>
      ),
    },
    {
      id: 1,
      type: "image" as const,
      imageSrc:
        "https://mytender.b-cdn.net/Our%20Story/Journey%20images%201%20-5/MyTender_Photos_27.jpeg",
    },
  ],
];
