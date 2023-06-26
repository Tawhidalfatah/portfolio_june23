import anime from "animejs";
import { useEffect } from "react";

const Code = () => {
  useEffect(() => {
    const animation = () => {
      anime({
        targets: ".st0, .st1",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "cubicBezier(.5, .05, .1, .3)",
        duration: 2500,
        delay: (el, i) => i * 250,
      });
    };

    animation();
  }, []);
  return (
    <div>
      <svg viewBox="-100 0 500 900" style={{ fill: "none", stroke: "black" }}>
        <g id="BACKGROUND"></g>
        <g id="OBJECTS">
          <g>
            <path
              className="st0"
              d="M223.35,172.84L222,162.4c0,0-12.96,0-18.57,15.67c-5.61,15.67-0.97,29.02-0.39,33.46
			c0.58,4.45,2.32,20.12,0.19,25.15c-2.13,5.03-6.77,6.38-6.77,6.38s3.29,3.48,4.64,7.35c1.35,3.87,2.51,17.99,2.32,25.53
			c-0.19,7.54-2.71,24.37,6.58,35.59c9.28,11.22,21.66,11.8,21.66,11.8l0.77-11.03c0,0-10.25-2.51-12.77-6.77
			c-2.51-4.26-7.16-10.64-7.54-23.6c-0.39-12.96,0.97-21.28,0-26.89c-0.97-5.61-2.9-9.09-2.9-9.09s6-15.67,4.64-27.47
			c-1.35-11.8-1.74-20.5-1.55-27.66c0.19-7.16,1.55-12.57,4.06-14.31C218.9,174.78,223.35,172.84,223.35,172.84z"
            />
            <path
              className="st0"
              d="M209.23,245.96c0,0,4-8.53,3.75-17.55c-0.24-9.01-0.24-19.49-0.49-24.84c-0.24-5.36-0.24-18.02,0.73-22.16
			c0.97-4.14,5.36-6.82,5.36-6.82l4.76-1.74l-0.38-10.68l4.87,3.17l0.24,11.45c0,0-2.44,0-5.12,2.92c-2.68,2.92-4.14,5.6-4.14,11.93
			c0,6.33,0.24,20.46,1.22,28.25c0.97,7.79,1.46,10.47-0.24,18.27c-1.7,7.79-4.14,9.26-4.14,9.26s1.7,2.68,2.68,9.99
			c0.97,7.31,0.24,16.32,0,23.38c-0.24,7.06-0.73,11.45,3.17,16.56c3.9,5.11,4.38,7.31,7.79,9.26c3.41,1.95,9.5,4.87,9.5,4.87V320
			l-5.85,2.92l-0.49-9.74c0,0-7.79-2.44-11.93-6.58c-4.14-4.14-6.82-11.2-8.04-19.24c-1.22-8.04-0.73-15.1,0-21.43
			c0.73-6.33,0.73-9.26-0.24-13.15C211.28,248.88,209.23,245.96,209.23,245.96z"
            />
            <path
              className="st0"
              d="M239.93,311.67c-0.01-0.27-0.11-0.47-0.24-0.64c0.01-0.3-0.13-0.57-0.41-0.79c-0.33-0.26-0.69-0.34-1.07-0.33
			c-0.03-0.01-0.05-0.02-0.08-0.03c-8.77-2.32-15.12-8.98-17.38-17.73c-2.45-9.49-0.41-19.22-0.99-28.84
			c-0.32-5.25-0.75-10.42-3-15.22c0.14-0.08,0.27-0.19,0.38-0.36c2.58-3.69,3.7-8.5,4.26-12.9c0.64-4.96,0.39-9.98-0.03-14.95
			c-0.44-5.21-0.98-10.41-1.23-15.63c-0.25-5.18-0.57-10.51-0.13-15.68c0.41-4.87,3.52-8.78,8.42-9.72
			c0.43-0.08,0.66-0.42,0.71-0.79c0.17-0.15,0.28-0.35,0.31-0.58c0.27-0.78,0.14-1.55,0.1-2.37c-0.05-0.89-0.1-1.79-0.15-2.68
			c-0.1-1.81-0.25-3.57-0.48-5.36c-0.01-0.07-0.04-0.13-0.06-0.19c0.21-0.42,0.22-0.95-0.18-1.39c-1.52-1.71-3.29-3.09-5.31-4.14
			c-0.35-0.44-0.96-0.54-1.44-0.35c-0.04-0.01-0.07-0.03-0.11-0.04c-2.77-0.5-5.63,0.46-8.12,1.66c-2.56,1.23-4.88,3.04-6.78,5.15
			c-4.14,4.61-6.24,10.61-7.03,16.68c-0.92,7.03-0.01,14.1,0.95,21.07c0.51,3.7,1.02,7.41,1.54,11.11
			c0.49,3.53,1.12,7.08,1.29,10.64c0.17,3.59-0.18,7.31-2.15,10.4c-1.5,2.35-4.03,4.37-6.86,4.7c-0.24-0.11-0.46-0.22-0.71-0.31
			c-1.11-0.42-1.87,1.4-0.81,1.92c0.02,0.01,0.04,0.02,0.06,0.03c0.16,0.3,0.44,0.53,0.88,0.56c0.05,0,0.09,0,0.14,0
			c5.35,3.29,6.92,9.75,7.19,15.76c0.35,7.73,0.19,15.52,0.29,23.26c0.09,6.99,0.19,14.22,2.6,20.87
			c2.02,5.56,5.63,10.31,10.35,13.85c2.58,1.94,5.48,3.45,8.53,4.51c2.71,0.93,6.01,1.83,8.92,1.36c0.42,0.35,1.1,0.32,1.48-0.06
			c1.5-0.97,3.15-1.74,4.79-2.42c0.11-0.04,0.2-0.1,0.28-0.16c0.64,0.09,1.35-0.27,1.38-1.12C240.17,317.5,240,314.58,239.93,311.67
			z M215.45,180.97c0.95,0.98,2.22,1.91,3.58,2.24c-0.39,0.8-0.67,1.62-0.88,2.47c-0.52-0.17-1.09-0.22-1.61-0.39
			c-0.75-0.24-1.43-0.63-2.06-1.11C214.69,183.06,215.02,181.98,215.45,180.97z M213.97,189.52c1.05,0.79,2.36,1.63,3.64,1.87
			c-0.02,1.42-0.03,2.85,0,4.27c-0.5-0.16-1.04-0.26-1.52-0.48c-0.74-0.35-1.37-0.84-1.94-1.43c-0.07-0.07-0.14-0.1-0.21-0.12
			C213.91,192.25,213.92,190.89,213.97,189.52z M214.32,185.23c1.03,0.75,2.44,1.48,3.64,1.36c-0.2,1.09-0.3,2.2-0.34,3.31
			c0,0.12,0,0.24,0,0.35c-0.49-0.19-1-0.34-1.47-0.57c-0.75-0.37-1.45-0.82-2.12-1.33C214.09,187.3,214.18,186.26,214.32,185.23z
			 M214.7,217.82c-0.01-0.72-0.02-1.45-0.04-2.17c1.09,1.08,2.71,2.27,4.25,2.41c0.12,1.34,0.23,2.69,0.33,4.04
			c-0.69-0.31-1.43-0.53-2.11-0.85c-0.84-0.4-1.64-0.86-2.42-1.36C214.71,219.19,214.71,218.5,214.7,217.82z M217.24,216.37
			c-0.9-0.45-1.69-1.06-2.39-1.79c-0.07-0.07-0.14-0.1-0.21-0.12c-0.03-1.53-0.08-3.07-0.13-4.6c0.62,0.58,1.27,1.13,1.98,1.59
			c0.55,0.36,1.23,0.82,1.92,1.06c0.05,0.63,0.1,1.25,0.16,1.88c0.08,0.85,0.16,1.7,0.23,2.55
			C218.28,216.76,217.74,216.62,217.24,216.37z M218.32,211.24c-0.4-0.18-0.81-0.35-1.16-0.57c-0.94-0.56-1.79-1.25-2.57-2.02
			c-0.04-0.04-0.08-0.05-0.11-0.08c-0.05-1.31-0.09-2.63-0.14-3.94c0.66,0.37,1.32,0.75,1.98,1.12c0.56,0.31,1.11,0.67,1.69,0.96
			C218.09,208.22,218.2,209.73,218.32,211.24z M214.4,231.22c0.66,0.59,1.33,1.15,2.04,1.67c0.8,0.58,1.71,1.32,2.67,1.6
			c-0.13,1-0.29,2-0.5,2.99c-0.67-0.4-1.46-0.68-2.13-1.04c-0.86-0.47-1.7-0.98-2.52-1.52C214.16,233.7,214.3,232.46,214.4,231.22z
			 M217.24,232.22c-0.92-0.63-1.78-1.33-2.6-2.07c-0.05-0.04-0.1-0.07-0.15-0.09c0.11-1.53,0.17-3.07,0.2-4.6
			c0.69,0.47,1.38,0.93,2.1,1.34c0.81,0.47,1.73,1.13,2.68,1.21c0,0.94-0.01,1.88-0.05,2.82c-0.04,0.88-0.11,1.76-0.2,2.64
			C218.6,233,217.87,232.65,217.24,232.22z M217.15,225.79c-0.84-0.47-1.65-0.99-2.44-1.53c0.01-1.08,0.02-2.15,0.01-3.22
			c1.37,0.93,3.01,1.91,4.59,2.19c0.08,1.26,0.13,2.51,0.15,3.77C218.79,226.5,217.86,226.19,217.15,225.79z M213.97,194.88
			c0.95,0.9,2.38,1.86,3.65,1.83c0.01,0.42,0.01,0.84,0.02,1.26c0.02,0.82,0.05,1.63,0.08,2.44c-0.7-0.39-1.59-0.5-2.32-0.87
			c-0.46-0.23-0.89-0.51-1.29-0.81C214.05,197.45,214,196.17,213.97,194.88z M215.02,200.5c0.8,0.41,1.81,0.91,2.72,0.76
			c0.05,1.4,0.11,2.8,0.19,4.21c-0.37-0.2-0.75-0.38-1.12-0.58c-0.84-0.45-1.68-0.9-2.52-1.34c-0.03-0.76-0.06-1.53-0.08-2.29
			c-0.01-0.42-0.03-0.84-0.05-1.26C214.43,200.18,214.72,200.35,215.02,200.5z M212.99,239.68c0.67,0.4,1.34,0.79,2.01,1.19
			c0.73,0.43,1.46,0.94,2.26,1.25c-0.24,0.63-0.5,1.26-0.78,1.88c-1.35-0.74-2.77-1.36-4.21-1.91
			C212.54,241.3,212.78,240.5,212.99,239.68z M211.95,242.96c1.41,0.59,2.76,1.27,4.11,1.99c-0.26,0.56-0.53,1.11-0.8,1.67
			c-1.3-0.65-3.01-0.84-4.49-0.88C211.22,244.84,211.6,243.91,211.95,242.96z M212.72,247.81c0.85,0.23,1.67,0.69,2.54,0.83
			c0.01,0,0.01,0,0.02,0c0.49,1.44,0.91,2.91,1.25,4.39c-1.3-0.84-2.65-1.63-3.98-2.42c-0.43-1.16-1-2.25-1.75-3.23
			C211.44,247.5,212.09,247.63,212.72,247.81z M217.69,289.58c-0.48-0.31-1.06-0.52-1.54-0.72c-0.77-0.33-1.57-0.59-2.38-0.8
			c-0.17-1.17-0.31-2.35-0.4-3.53c1,0.49,1.97,1.02,2.9,1.64c0.36,0.24,0.71,0.51,1.05,0.79
			C217.42,287.84,217.54,288.71,217.69,289.58z M213.21,276.19c1.12,0.71,2.43,1.59,3.77,2.08c0,0.07,0,0.13-0.01,0.2
			c-0.01,0.66-0.01,1.32-0.01,1.98c-1.22-0.31-2.37-0.7-3.51-1.36c-0.1-0.06-0.19-0.06-0.28-0.05
			C213.17,278.09,213.18,277.14,213.21,276.19z M217.17,272.68c-1.23-0.58-2.55-1.03-3.76-1.54c0.05-1.02,0.1-2.04,0.15-3.05
			c0.74,0.32,1.49,0.65,2.24,0.97c0.49,0.21,1,0.46,1.51,0.66C217.26,270.71,217.22,271.69,217.17,272.68z M217.12,273.82
			c-0.05,1.09-0.08,2.19-0.11,3.28c-0.32-0.13-0.64-0.27-0.95-0.42c-0.81-0.4-1.6-0.84-2.38-1.31c-0.17-0.1-0.33-0.08-0.45,0
			c0.03-1.06,0.08-2.13,0.13-3.19C214.59,272.73,215.84,273.36,217.12,273.82z M213.18,279.97c1.17,0.69,2.46,1.26,3.8,1.55
			c0.02,1.25,0.08,2.51,0.18,3.75c-1.15-0.73-2.4-1.32-3.47-1.81c-0.14-0.07-0.28-0.06-0.4-0.03
			C213.23,282.28,213.19,281.12,213.18,279.97z M217.36,268.68c-0.4-0.17-0.81-0.31-1.2-0.47c-0.85-0.35-1.7-0.7-2.55-1.05
			c0.07-1.55,0.14-3.1,0.17-4.65c0.03,0.1,0.09,0.19,0.22,0.25c0.86,0.44,1.73,0.87,2.59,1.31c0.31,0.16,0.63,0.33,0.94,0.49
			C217.48,265.93,217.43,267.31,217.36,268.68z M217.08,263.23c-0.87-0.42-1.74-0.84-2.62-1.27c-0.32-0.15-0.6,0.07-0.68,0.32
			c0.01-0.5,0.02-1,0.02-1.5c0.01-0.73,0-1.47-0.02-2.23c1.18,0.55,2.46,1.26,3.74,1.69c0.05,1.02,0.08,2.05,0.05,3.07
			c0,0.05,0,0.1-0.01,0.15C217.41,263.39,217.24,263.31,217.08,263.23z M216.83,254.49c0.29,1.48,0.5,2.97,0.62,4.47
			c-1.18-0.54-2.5-0.93-3.62-1.39c-0.03-0.01-0.05-0.01-0.07-0.01c-0.08-1.82-0.28-3.67-0.74-5.42
			C214.27,252.96,215.53,253.77,216.83,254.49z M215.88,289.97c0.67,0.33,1.31,0.85,2.05,0.95c0.24,1.19,0.54,2.36,0.9,3.51
			c-1.23-0.51-2.68-0.78-3.92-1.03c-0.07-0.23-0.14-0.45-0.2-0.68c-0.31-1.16-0.56-2.33-0.76-3.51
			C214.61,289.43,215.26,289.67,215.88,289.97z M216.97,295.06c0.77,0.24,1.53,0.58,2.31,0.73c0.36,1,0.77,1.97,1.24,2.93
			c-0.29-0.03-0.59-0.04-0.89-0.07c-0.92-0.07-1.84-0.15-2.76-0.22c-0.62-1.25-1.16-2.54-1.59-3.84
			C215.85,294.73,216.41,294.88,216.97,295.06z M219.44,299.71c0.56,0.06,1.12,0.14,1.67,0.14c0.54,0.98,1.14,1.93,1.81,2.85
			c-1.06,0.11-2.11,0.26-3.16,0.38c-0.87-1.12-1.64-2.33-2.33-3.58C218.11,299.58,218.77,299.65,219.44,299.71z M223.79,303.83
			c0.35,0.42,0.7,0.84,1.08,1.24c0.42,0.45,0.86,0.89,1.32,1.31c-0.81,0.14-1.62,0.4-2.37,0.68c-0.03,0.01-0.04,0.03-0.07,0.04
			c-1.14-0.89-2.19-1.9-3.15-3.01C221.66,304.03,222.73,303.96,223.79,303.83z M227.27,307.33c1.63,1.36,3.43,2.54,5.35,3.49
			c-0.02,0-0.03-0.01-0.05-0.01c-2.91-0.33-5.51-1.39-7.79-2.93C225.61,307.65,226.44,307.51,227.27,307.33z M237.38,312.63
			c0.15,0.04,0.29,0.05,0.43,0.05c-0.03,1.04-0.06,2.09-0.09,3.13c-1.29,0.08-2.69,0.62-3.92,1.12c-0.02-1.15-0.03-2.31-0.05-3.46
			c1.08-0.25,2.15-0.51,3.23-0.76c0.13-0.03,0.26-0.06,0.39-0.08C237.37,312.63,237.37,312.63,237.38,312.63z M233.81,317.99
			c0.75-0.26,1.51-0.49,2.28-0.7c0.53-0.14,1.07-0.24,1.6-0.39c-0.02,0.93-0.02,1.85-0.01,2.78c-1.39,0.51-2.64,1.2-3.81,2.04
			C233.85,320.47,233.83,319.23,233.81,317.99z M217.6,241.22c-0.64-0.48-1.4-0.83-2.09-1.21c-0.76-0.42-1.51-0.84-2.27-1.25
			c0.22-0.91,0.4-1.83,0.56-2.76c0.77,0.51,1.54,1.01,2.35,1.46c0.71,0.39,1.45,0.86,2.24,1.1c-0.03,0.12-0.05,0.24-0.08,0.35
			C218.11,239.69,217.86,240.46,217.6,241.22z M219.56,182.3c-1.33-0.58-2.53-1.1-3.58-2.23c-0.02-0.02-0.04-0.03-0.06-0.04
			c0.62-1.16,1.4-2.18,2.38-3c0.51,0.49,1.1,0.9,1.66,1.32c0.59,0.44,1.19,0.96,1.84,1.31C220.92,180.4,220.17,181.29,219.56,182.3z
			 M222.55,179.05c-0.54-0.55-1.24-0.94-1.88-1.36c-0.58-0.39-1.16-0.81-1.78-1.15c1.21-0.85,2.66-1.41,4.37-1.58
			c0.09-0.01,0.17-0.04,0.25-0.07c0.83,0.42,1.63,0.9,2.37,1.46c0.29,0.22,0.56,0.48,0.83,0.74
			C225.22,177.47,223.8,178.14,222.55,179.05z M227.3,169.88c0.01,0.66,0.03,1.33,0.05,2c-0.54-0.58-1.23-1.03-1.83-1.53
			c-0.41-0.35-0.81-0.71-1.2-1.08c-0.04-0.65-0.09-1.31-0.15-1.96c0.37,0.39,0.76,0.76,1.16,1.12
			C225.94,168.95,226.58,169.52,227.3,169.88z M227.07,174.65c-0.84-0.61-1.75-1.08-2.7-1.49c0.04-0.89,0.04-1.78,0.01-2.67
			c0.21,0.2,0.42,0.4,0.64,0.59c0.69,0.61,1.41,1.35,2.3,1.66c0.02,0.01,0.04,0,0.06,0c0.02,0.66,0,1.4,0.01,2.13
			C227.27,174.79,227.17,174.72,227.07,174.65z M226.98,167.22c0.1,0.13,0.22,0.22,0.34,0.28c-0.01,0.46-0.01,0.91-0.01,1.36
			c-0.52-0.41-1.09-0.79-1.59-1.22c-0.59-0.52-1.14-1.09-1.67-1.68c-0.06-0.58-0.11-1.16-0.17-1.75
			C225.02,165.1,226.06,166.09,226.98,167.22z M228.5,321.17c-1.41-0.24-2.8-0.59-4.16-1.04c-2.71-0.9-5.27-2.25-7.59-3.91
			c-4.73-3.38-8.27-8.23-10.03-13.77c-2.18-6.85-2.03-14.17-2.13-21.28c-0.05-3.89-0.11-7.78-0.17-11.67
			c-0.06-3.58-0.02-7.17-0.37-10.74c-0.51-5.33-2.3-11.14-6.46-14.59c4.01-1.24,7.01-5.02,8.13-9.1c0.92-3.35,0.82-6.89,0.47-10.31
			c-0.37-3.52-0.91-7.03-1.39-10.54c-0.99-7.27-2.28-14.6-2.48-21.95c-0.17-6.47,0.7-13.18,3.97-18.87
			c1.63-2.83,3.85-5.31,6.59-7.11c1.35-0.88,2.79-1.61,4.33-2.1c1.38-0.44,2.82-0.63,4.23-0.95c0.57,3.11,0.7,6.31,0.97,9.46
			c-3.87-0.22-7.44,2.99-9.02,6.33c-2.25,4.78-1.97,10.36-1.87,15.51c0.21,11.67,1.5,23.35,0.74,35.03
			c-0.38,5.81-1.31,11.71-4.24,16.83c-0.24,0.43-0.16,0.84,0.07,1.13c0.02,0.14,0.08,0.29,0.18,0.44c2.93,4.15,3.16,8.86,3.08,13.78
			c-0.09,5.76-0.62,11.5-0.62,17.27c0,9.77,1.73,20.31,8.82,27.57c3.26,3.34,7.32,5.6,11.9,6.34c0.08,2.89,0.17,5.79,0.27,8.68
			C230.66,321.42,229.58,321.35,228.5,321.17z"
            />
          </g>
          <g>
            <path
              className="st0"
              d="M270.55,170.96c0,0,1.16-11.61,1.74-11.41c0.58,0.19,9.67,1.55,15.09,7.93s6.38,15.47,6,23.21
			c-0.39,7.74-3.68,24.18-3.87,32.11c-0.19,7.93-1.93,8.51,1.55,11.99c3.48,3.48,7.54,6.19,7.54,6.19s-6.38,5.03-6.96,14.31
			c-0.58,9.28-1.35,34.62-2.32,42.75c-0.97,8.12-5.22,12.96-9.09,16.25c-3.87,3.29-17.22,6.58-17.22,6.58l-1.93-0.58l0.77-9.87
			c0,0,10.06-1.55,14.89-9.48c4.84-7.93,6-17.22,5.61-24.57c-0.39-7.35-1.55-13.73,0-21.47c1.55-7.74,3.29-10.06,3.29-10.06
			s-3.29-3.48-3.87-14.12c-0.58-10.64,0.19-21.28,0-27.85c-0.19-6.58,0.19-18.38-1.16-23.02s-4.64-6.96-6.19-7.54
			C272.87,171.74,270.55,170.96,270.55,170.96z"
            />
            <path
              className="st0"
              d="M263,320.88c0,0,12.09,0.42,19.4-9.08c7.31-9.5,7.31-11.69,7.79-18.02c0.49-6.33,0.73-21.92,0.97-28.25
			c0.24-6.33,0.49-13.15,2.68-18.02c2.19-4.87,3.41-5.6,3.41-5.6s-2.44,0.24-4.38-3.65c-1.95-3.9-4.14-9.5-3.17-18.02
			s3.65-23.87,3.65-23.87l0.24-16.81l-2.44-6.33c0,0,4.38,3.41,4.87,14.13c0.49,10.72-1.7,27.77-2.44,32.88s-0.97,10.47,0,13.4
			c0.97,2.92,2.68,5.36,4.63,5.6c1.95,0.24,2.92,0.49,2.92,0.49l2.92,4.38c0,0-6.82,2.19-6.82,12.67c0,10.47,0.73,27.04,0.49,33.13
			c-0.24,6.09-1.95,13.64-4.63,19.73c-2.68,6.09-6.33,9.01-10.47,11.93c-4.14,2.92-14.13,6.09-14.13,6.09L263,320.88z"
            />
            <path
              className="st0"
              d="M303.74,242.73c-0.6-0.56-1.22-1.09-1.84-1.62c0.01-0.34-0.14-0.67-0.38-0.9c0.21-0.48-0.04-1.18-0.68-1.12
			c-2.63,0.23-4.78-1.51-5.69-3.91c-0.93-2.45-0.79-5.19-0.68-7.76c0.26-5.85,1.19-11.63,2.04-17.41c1.45-9.9,2.55-20.01-0.37-29.77
			c-1.16-3.87-3-7.66-5.69-10.71c-0.47-0.76-0.98-1.51-1.53-2.24c-1.91-2.51-4.31-4.67-7.08-6.21c-2.69-1.49-6.01-2.73-9.1-2.17
			c-0.04,0.01-0.07,0.03-0.11,0.04c-0.69-0.28-1.62,0.01-1.71,1.06c-0.33,3.93-0.92,7.79-0.67,11.75c0,0.06,0.03,0.1,0.04,0.16
			c0,0.02,0.01,0.03,0.01,0.04c0.02,0.08,0.04,0.17,0.08,0.24c0.16,0.37,0.49,0.67,0.95,0.72c4.74,0.48,7.62,3.96,8.63,8.44
			c0.54,2.39,0.59,4.86,0.61,7.29c0.03,2.8-0.02,5.6-0.1,8.4c-0.32,10.97-1.17,22.04-0.1,32.99c0.49,5.08,1.56,10.13,3.99,14.64
			c-2.96,3.26-3.49,8.11-3.56,12.32c-0.09,5.46,0.4,10.91,0.57,16.37c0.3,9.71-0.38,20.64-7.03,28.37
			c-3.13,3.63-7.47,6.47-12.31,7.02c-0.62,0.07-1.13,0.47-1.14,1.14c-0.07,3.82-0.13,7.64-0.18,11.46
			c-0.01,0.51,0.29,0.83,0.66,0.96c0.02,0.02,0.03,0.05,0.05,0.07c1.1,0.97,2.18,1.97,3.28,2.93c0.88,0.77,1.73,1.68,2.67,2.38
			c0.24,0.49,0.76,0.87,1.43,0.78c11.85-1.65,22.42-9.91,27.06-20.9c5.93-14.04,2.51-29.44,2.31-44.11
			c-0.08-5.96,0.06-14.05,5.91-17.45c0.11-0.06,0.18-0.14,0.25-0.22c0.37-0.08,0.74-0.29,0.82-0.7
			C305.34,244.02,304.46,243.4,303.74,242.73z M298.33,248.95c-1.01-0.24-1.94-0.51-2.83-1.07c0.5-0.99,1.1-1.91,1.81-2.76
			c0.79,0.55,1.76,1.14,2.75,1.42C299.39,247.27,298.82,248.08,298.33,248.95z M296.11,296.81c-1.3-0.96-2.67-1.81-3.94-2.82
			c0.21-1.58,0.35-3.18,0.45-4.78c1.16,0.92,2.57,1.99,4.02,2.5C296.54,293.42,296.37,295.12,296.11,296.81z M292.1,309.3
			c-0.36-0.43-0.83-0.79-1.27-1.16c-0.75-0.65-1.5-1.29-2.25-1.94c0.31-0.59,0.6-1.19,0.87-1.81c0.33-0.76,0.62-1.53,0.88-2.3
			c1.2,0.95,2.44,2.03,3.77,2.76C293.54,306.4,292.87,307.88,292.1,309.3z M289.24,313.71c-0.42-0.42-0.88-0.8-1.34-1.2
			c-0.74-0.63-1.47-1.26-2.21-1.89c0.84-1.07,1.6-2.19,2.29-3.36c0.67,0.58,1.33,1.16,2,1.74c0.49,0.43,1,0.96,1.6,1.27
			C290.87,311.47,290.09,312.61,289.24,313.71z M293.74,253.3c0.88,0.31,1.81,0.58,2.75,0.7c-0.28,1.26-0.47,2.54-0.58,3.78
			c-0.03,0.32-0.04,0.65-0.06,0.97c-0.89-0.15-1.79-0.24-2.68-0.37c-0.01,0-0.01,0-0.02,0C293.23,256.68,293.41,254.97,293.74,253.3
			z M296.58,279.75c0.08,1.49,0.14,2.99,0.18,4.48c-1.32-0.7-2.67-1.24-3.92-2.09c0.02-1.27,0.03-2.54,0.05-3.81
			c1.2,0.43,2.44,0.9,3.69,1.15C296.57,279.58,296.58,279.67,296.58,279.75z M293.07,260.79c0.01-0.44,0.02-0.89,0.03-1.33
			c0.89,0.14,1.78,0.3,2.67,0.41c-0.09,1.86-0.1,3.73-0.05,5.61c-0.81-0.33-1.62-0.68-2.39-1.17c-0.1-0.07-0.2-0.09-0.3-0.09
			C293.04,263.07,293.05,261.93,293.07,260.79z M295.77,266.93c0.08,1.82,0.19,3.65,0.32,5.47c-0.25-0.1-0.51-0.21-0.75-0.34
			c-0.78-0.41-1.49-0.9-2.16-1.46c-0.07-0.05-0.13-0.09-0.2-0.11c0.01-1.65,0.03-3.3,0.05-4.94
			C293.87,266.09,294.8,266.59,295.77,266.93z M296.19,273.79c0.11,1.5,0.21,2.99,0.31,4.48c-1.15-0.5-2.42-0.83-3.6-1.21
			c0.02-1.7,0.05-3.41,0.06-5.11C293.89,272.69,295.03,273.45,296.19,273.79z M295.81,289.85c-0.92-0.51-1.8-1.09-2.63-1.74
			c-0.16-0.12-0.34-0.15-0.5-0.13c0.07-1.41,0.11-2.82,0.13-4.23c0-0.08,0-0.15,0-0.23c1.17,0.77,2.48,1.51,3.82,1.78
			c0.05,0.01,0.1,0.01,0.15,0c0.03,1.67,0.01,3.34-0.06,5C296.42,290.16,296.11,290.02,295.81,289.85z M296.75,252.92
			c-0.94-0.19-1.87-0.37-2.79-0.68c0.27-1.17,0.62-2.3,1.08-3.37c0.82,0.54,1.79,0.97,2.77,1.1
			C297.38,250.91,297.03,251.9,296.75,252.92z M295.63,188.83c0.08,0.91,0.15,1.83,0.18,2.74c-0.19,0.02-0.38,0.04-0.57,0.03
			c-0.11-0.01-0.21-0.05-0.32-0.07c0.04-0.96,0.07-1.93,0.08-2.89C295.21,188.71,295.41,188.79,295.63,188.83z M295.84,195.36
			c-0.01,0.38-0.03,0.75-0.05,1.13c-0.24-0.03-0.48-0.02-0.72-0.04c-0.17-0.01-0.35-0.04-0.52-0.06c0.13-1.3,0.24-2.61,0.32-3.92
			c0.33,0.08,0.66,0.11,0.97,0.06C295.86,193.48,295.86,194.42,295.84,195.36z M293.33,206.11c0.15-1.1,0.31-2.22,0.46-3.35
			c0.48,0.19,0.99,0.33,1.46,0.29c-0.18,1.55-0.39,3.09-0.62,4.63c-0.09,0-0.18,0-0.27,0c-0.42-0.05-0.83-0.19-1.19-0.41
			C293.22,206.88,293.28,206.49,293.33,206.11z M295.36,202.18c-0.28-0.11-0.58-0.19-0.87-0.28c-0.19-0.06-0.37-0.13-0.55-0.2
			c0.19-1.43,0.37-2.87,0.52-4.33c0.14,0.02,0.27,0.05,0.41,0.06c0.28,0.03,0.59,0.07,0.89,0.05
			C295.67,199.05,295.53,200.61,295.36,202.18z M291.44,219.74c0.43,0.31,0.89,0.56,1.39,0.71c-0.14,1.32-0.26,2.64-0.35,3.96
			c-0.12-0.01-0.24-0.03-0.36-0.06c-0.45-0.12-0.84-0.37-1.15-0.71C291.09,222.35,291.26,221.04,291.44,219.74z M292.94,219.42
			c-0.43-0.18-0.83-0.4-1.19-0.71c-0.05-0.04-0.1-0.07-0.16-0.09c0.08-0.54,0.15-1.08,0.23-1.62c0.17-1.22,0.34-2.44,0.51-3.65
			c0.1,0.04,0.2,0.08,0.3,0.12c0.36,0.15,0.72,0.35,1.09,0.3C293.44,215.65,293.17,217.53,292.94,219.42z M291.59,225.37
			c0.22,0.08,0.52,0.16,0.82,0.2c-0.07,1.42-0.09,2.83-0.06,4.26c-0.41-0.24-0.82-0.46-1.24-0.69c-0.06-0.03-0.12-0.04-0.18-0.05
			c-0.04-0.45-0.08-0.9-0.09-1.35c-0.03-0.91-0.01-1.82,0.04-2.73C291.1,225.14,291.33,225.27,291.59,225.37z M292.39,231.07
			c0.1,1.78,0.37,3.6,1.09,5.22c-1.28-1.73-2-3.74-2.36-5.83C291.54,230.67,291.96,230.88,292.39,231.07z M293.85,212.88
			c-0.24-0.18-0.55-0.27-0.84-0.39c-0.18-0.07-0.35-0.14-0.53-0.21c0.18-1.32,0.37-2.64,0.55-3.96c0.32,0.16,0.66,0.27,1.02,0.33
			c0.14,0.02,0.28,0.04,0.44,0.06C294.28,210.1,294.06,211.49,293.85,212.88z M295.53,187.8c-0.15-0.04-0.3-0.07-0.44-0.1
			c-0.03-0.01-0.06-0.01-0.09-0.02c-0.02-1.5-0.09-2.99-0.24-4.46C295.1,184.73,295.35,186.26,295.53,187.8z M281.25,294.39
			c3.79-10.34,2.39-21.54,2.03-32.28c-0.1-2.86-0.19-5.77,0.15-8.62c0.33-2.81,1.25-5.25,2.88-7.56c0.1-0.14,0.16-0.29,0.18-0.43
			c0.24-0.3,0.32-0.71,0.07-1.14c-2.61-4.55-3.65-9.76-4.1-14.94c-0.5-5.73-0.45-11.49-0.22-17.24c0.23-5.84,0.6-11.68,0.77-17.52
			c0.14-5.21,0.63-10.99-1.13-16c-1.4-3.98-5.17-8.31-9.71-8.01c0.27-3.15,0.4-6.34,0.97-9.45c2.66,0.64,5.18,1.05,7.61,2.45
			c2.48,1.44,4.67,3.43,6.32,5.78c3.72,5.27,5.09,11.79,5.21,18.15c0.14,7.34-1.14,14.66-2.13,21.92
			c-0.49,3.64-1.01,7.28-1.48,10.92c-0.44,3.38-0.77,6.8-0.29,10.2c0.7,4.95,3.81,10.07,8.6,11.53c-3.48,2.9-5.4,7.49-6.12,11.96
			c-0.58,3.6-0.6,7.26-0.66,10.9c-0.06,3.73-0.12,7.46-0.17,11.19c-0.1,7.2,0.2,14.62-1.47,21.67c-1.4,5.9-4.41,11.06-9.04,14.99
			c-2.43,2.07-5.27,3.75-8.26,4.87c-1.45,0.54-2.95,0.97-4.46,1.27c-1.31,0.26-2.63,0.34-3.94,0.57c0.1-2.89,0.19-5.79,0.27-8.68
			C271.83,309.47,278.29,302.49,281.25,294.39z M281.14,321.1c-0.6-0.5-1.47-0.79-2.12-1.19c-0.78-0.48-1.51-1.02-2.21-1.61
			c0.5-0.29,1-0.58,1.48-0.89c0.83-0.54,1.62-1.13,2.39-1.75c0.75,0.53,1.51,1.05,2.26,1.58c0.57,0.4,1.15,0.89,1.79,1.19
			C283.58,319.4,282.39,320.29,281.14,321.1z M272.45,325.06c-0.74-0.71-1.64-1.3-2.43-1.91c-0.62-0.48-1.24-0.96-1.86-1.44
			c0.81-0.2,1.6-0.42,2.34-0.65c0.17-0.05,0.34-0.12,0.5-0.18c0,0.15,0.05,0.31,0.2,0.43c1.27,0.95,2.52,2.06,3.89,2.87
			C274.23,324.51,273.35,324.8,272.45,325.06z M275.8,323.55c-1.17-1.12-2.61-2.02-3.93-2.97c1.38-0.5,2.73-1.1,4.03-1.79
			c0.76,0.72,1.56,1.38,2.43,1.95c0.51,0.33,1.11,0.77,1.73,1.03c-1.33,0.78-2.71,1.46-4.13,2.06
			C275.92,323.74,275.88,323.64,275.8,323.55z M264.17,322.27c0.91-0.01,1.83-0.12,2.74-0.29c0.83,0.65,1.67,1.31,2.5,1.96
			c0.6,0.47,1.2,0.99,1.83,1.45c-0.87,0.22-1.75,0.41-2.64,0.56c-0.77-0.84-1.73-1.57-2.58-2.28
			C265.42,323.18,264.8,322.72,264.17,322.27z M285.88,317.42c-0.11,0.1-0.23,0.19-0.33,0.29c-0.52-0.63-1.36-1.05-2.02-1.5
			c-0.64-0.44-1.29-0.87-1.93-1.31c1.23-1.05,2.37-2.2,3.42-3.43c0.7,0.61,1.4,1.23,2.1,1.84c0.48,0.42,0.95,0.85,1.46,1.23
			C287.73,315.55,286.84,316.52,285.88,317.42z M295.16,301.56c-0.19,0.73-0.41,1.46-0.64,2.17c-1.14-1.06-2.55-1.94-3.81-2.85
			c0.54-1.77,0.94-3.57,1.23-5.39c1.21,1.04,2.54,2.03,3.95,2.61C295.69,299.27,295.46,300.42,295.16,301.56z M300.92,245.71
			c-0.47-0.18-0.95-0.32-1.4-0.52c-0.53-0.23-1.03-0.53-1.51-0.85c0.64-0.64,1.36-1.22,2.17-1.73c0.62,0.55,1.23,1.11,1.81,1.69
			c0.11,0.11,0.22,0.24,0.34,0.37C301.83,244.99,301.36,245.33,300.92,245.71z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Code;
