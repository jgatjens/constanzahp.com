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
          justifyContent: navEmpty ? `flex-start` : [`flex-end`, `center`],
        }}
      >
        <Link
          aria-label={`${meta.siteTitle}, Back to homepage`}
          sx={(t) => ({
            ...t.styles?.a,
            color: `text`,
            ":hover": { color: `primary`, textDecoration: `none` },
          })}
          to="/"
        >
          {meta.siteTitle}
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

        <a onClick={toggleColorMode} aria-label="Toggle dark mode">
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
