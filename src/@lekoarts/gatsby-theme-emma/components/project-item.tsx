/** @jsx jsx */
import { jsx } from "theme-ui";
import { animated } from "react-spring";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type ProjectItemProps = {
  node: {
    color: string;
    title: string;
    slug: string;
    service: string;
    client: string;
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  style: any;
  eager?: boolean;
};

const ProjectItem = ({ node, style, eager }: ProjectItemProps) => (
  <animated.div
    sx={{
      position: `relative`,
      "&:before": {
        content: `""`,
        display: `block`,
        paddingTop: `100%`,
      },
    }}
    style={style}
  >
    <div
      sx={{
        left: 0,
        height: `100%`,
        position: `absolute`,
        top: 0,
        width: `100%`,
        a: {
          color: `white`,
          height: `100%`,
          left: 0,
          opacity: 0,
          padding: 4,
          position: `absolute`,
          top: 0,
          width: `100%`,
          zIndex: 10,
          transition: `all 0.3s ease-in-out`,
          textDecoration: `none`,
          "&:hover": {
            color: `white`,
            opacity: 1,
            textDecoration: `none`,
          },
        },
      }}
    >
      <div
        sx={{
          // @ts-ignore
          "> div": {
            height: `100%`,
            left: 0,
            position: `absolute !important`,
            top: 0,
            width: `100%`,
            "> div": {
              position: `static !important`,
            },
          },
        }}
      >
        <GatsbyImage
          loading={eager ? `eager` : `lazy`}
          image={node.cover.childImageSharp.gatsbyImageData}
          alt=""
        />
      </div>
      <a
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 3,
        }}
        aria-label={`${node.title}`}
      >
        <div
          sx={{
            backgroundColor: node.color,
            height: `100%`,
            left: 0,
            position: `absolute`,
            top: 0,
            width: `100%`,
            zIndex: -2,
          }}
        />
        <div
          sx={{
            fontSize: 5,
            lineHeight: 1,
            fontWeight: `bold`,
            textAlign: "center",
          }}
        >
          {node.client}
        </div>
        <div sx={{ fontSize: 2, textAlign: "center" }}>{node.service}</div>
      </a>
    </div>
  </animated.div>
);

export default ProjectItem;
