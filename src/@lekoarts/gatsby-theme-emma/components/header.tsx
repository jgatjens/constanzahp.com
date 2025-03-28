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
// const SvgIcon = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="40"
//     height="40"
//     fill="none"
//     viewBox="0 0 24 24"
//   >
//     <path
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.5"
//       d="M20.333 2H3.667C2.747 2 2 2.746 2 3.667v16.667C2 21.254 2.746 22 3.667 22h16.666c.92 0 1.667-.746 1.667-1.666V3.666C22 2.747 21.254 2 20.333 2M8.667 7.834v8.333M15.334 7.834v8.333M8.667 12h6.666"
//     ></path>
//   </svg>
// );

const Header = ({ meta, nav }: HeaderProps) => {
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
          justifyContent: ["end", `center`, `center`],
        }}
      >
        <Link
          aria-label={`Back to homepage`}
          sx={(t) => ({
            color: `text`,
            textDecoration: `none`,
            fontWeight: `normal`,
            ":hover": { color: `primary`, textDecoration: `none` },
          })}
          to="/"
        >
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
          justifyContent: ["space-between", `flex-end`],
          flex: 1,
          display: `flex`,
          order: 3,
        }}
      >
        <SocialLinks />
      </div>
    </Flex>
  );
};

export default Header;
