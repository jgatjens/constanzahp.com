/** @jsx jsx */
import { Flex, jsx, useColorMode } from "theme-ui";
import { Link } from "gatsby";
import Navigation from "./navigation";
import SocialLinks from "./social-links";

type HeaderProps = {
  meta: {
    [key: string]: string;
  };
  nav: {
    title: string;
    slug: string;
  }[];
};
const SvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20.333 2H3.667C2.747 2 2 2.746 2 3.667v16.667C2 21.254 2.746 22 3.667 22h16.666c.92 0 1.667-.746 1.667-1.666V3.666C22 2.747 21.254 2 20.333 2M8.667 7.834v8.333M15.334 7.834v8.333M8.667 12h6.666"
    ></path>
  </svg>
);

const Header = ({ meta, nav }: HeaderProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  const navEmpty = nav.length === 0;

  return (
    <Flex as="header" variant="layout.header">
      {!navEmpty && <Navigation nav={nav} />}
      <Flex
        sx={{
          fontWeight: `bold`,
          fontSize: 4,
          flex: navEmpty ? 1 : [`1 0 50%`, 1],
          alignItems: `center`,
          justifyContent: "center",
        }}
      >
        <Link
          aria-label={`Back to homepage`}
          sx={(t) => ({
            // ...t.styles?.a,
            position: `relative`,
            top: `7px`,
            color: `text`,
            ":hover": { color: `primary`, textDecoration: `none` },
          })}
          to="/"
        >
          {/* <SvgIcon /> */}
          Inicio
        </Link>
      </Flex>
      <div
        sx={{
          a: {
            fontSize: 4,
            color: `text`,
            display: `flex`,
            alignItems: `center`,
            "&:hover": {
              color: `primary`,
            },
            "&:not(:first-of-type)": {
              ml: 2,
            },
          },
          justifyContent: `flex-end`,
          flex: 1,
          display: `flex`,
          order: 3,
        }}
      >
        <SocialLinks />

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
      </div>
    </Flex>
  );
};

export default Header;
