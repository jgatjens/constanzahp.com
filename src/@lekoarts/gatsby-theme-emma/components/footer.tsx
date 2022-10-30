/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui";
import Logo from "./logo";

const Footer = () => {
  const [colorMode] = useColorMode();
  // const isDark = colorMode === `dark`;

  return (
    <Box as="footer" variant="layout.footer">
      Copyright constanzahp.com &copy; {new Date().getFullYear()}. Todos los
      derechos reservados.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <Logo />
        {` `}
        {/* <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="#"
        >
          Site
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.jgatjens.com/"
        >
          Lu
        </Link> */}
      </Flex>
    </Box>
  );
};

export default Footer;
