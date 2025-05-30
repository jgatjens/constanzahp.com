/** @jsx jsx */
import * as React from "react";
import { Flex, jsx, useColorMode } from "theme-ui";
import "./style.css";

const SocialLinks = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <React.Fragment>
      <a
        href="https://cal.com/constanza-humano-puente"
        className="btn--agendar"
        target="_blank"
        aria-label="Mail"
      >
        Agendar
      </a>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <a
          href="mailto:cotidelgrecco@gmail.com"
          target="_blank"
          aria-label="Mail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            height="1.2em"
            width="1.2em"
            viewBox="0 0 512 512"
          >
            <rect
              x="48"
              y="96"
              width="416"
              height="320"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M112 160l144 112 144-112"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/constanzahumanopuente/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            stroke="currentColor"
            fill="currentColor"
          >
            <title>Logo Instagram</title>
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
          </svg>
        </a>
        <a
          href="https://wa.me/5493584403876?text=Hola, quiero agendar una consulta :)"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            stroke="currentColor"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
              fillRule="evenodd"
            />
          </svg>
        </a>
        <a
          onClick={toggleColorMode}
          sx={{ paddingLeft: "20px" }}
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              width="1em"
              viewBox="0 0 512 512"
            >
              <title>Moon</title>
              <path
                d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              width="1em"
              viewBox="0 0 512 512"
            >
              <title>Sunny</title>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
              />
              <circle
                cx="256"
                cy="256"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
          )}
        </a>
      </Flex>
    </React.Fragment>
  );
};

export default SocialLinks;
