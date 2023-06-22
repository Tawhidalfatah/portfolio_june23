import { useEffect, useState } from "react";

const Hero = () => {
  const [h1AnimationFinished, setH1AnimationFinished] = useState(false);
  const [h1Text, setH1Text] = useState("");
  const [h2AnimationFinished, setH2AnimationFinished] = useState(false);
  const [h2Text, setH2Text] = useState("");

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const h1Value = "I AM TAWHID";
    const h2Value = "MERN Stack Developer";

    let h1Iteration = 0;
    let h1Interval = null;

    const animateH1Text = () => {
      clearInterval(h1Interval);

      h1Interval = setInterval(() => {
        setH1Text(
          h1Value
            .split("")
            .map((letter, index) => {
              if (index < h1Iteration) {
                return h1Value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (h1Iteration >= h1Value.length) {
          clearInterval(h1Interval);
          setH1AnimationFinished(true);
        }

        h1Iteration += 1 / 3;
      }, 30);
    };

    const animateH2Text = () => {
      const h2Interval = setInterval(() => {
        setH2Text("");
      }, 30);

      setTimeout(() => {
        clearInterval(h2Interval);
        setH2Text(h2Value);
        setH2AnimationFinished(true);
      }, 1100);
    };
    animateH1Text();
    animateH2Text();
  }, []);

  useEffect(() => {
    if (h1AnimationFinished && h2AnimationFinished) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const h2Value = "MERN Stack Developer";

      let h2Iteration = 0;
      let h2Interval = null;

      const animateH2Text = () => {
        clearInterval(h2Interval);

        h2Interval = setInterval(() => {
          const animatedText = h2Value
            .split("")
            .map((letter, index) => {
              if (index < h2Iteration) {
                return h2Value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          setH2Text(animatedText);

          if (h2Iteration >= h2Value.length) {
            clearInterval(h2Interval);
          }

          h2Iteration += 1 / 3;
        }, 30);
      };

      animateH2Text();
    }
  }, [h1AnimationFinished, h2AnimationFinished]);

  return (
    <div id="hero" className="flex justify-center mt-32 md:mt-80 h-[580px]">
      <div>
        <h1
          id="hero-title"
          className="text-5xl md:text-8xl font-medium text-left"
        >
          {h1Text}
        </h1>
        <br />
        <h2 id="mern" className="text-2xl md:text-5xl font-medium text-center">
          {h2Text}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
