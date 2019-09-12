import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
// import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
// import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import axios from 'axios';

// Make a request for a user with a given ID
axios
  .get('http://codechallenge.boohma.com/choices')
  .then(function(response) {
    // handle success
    // eslint-disable-next-line
    console.log(response);
  })
  .catch(function(error) {
    // handle error
    // eslint-disable-next-line
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>

      <div>
        <button>Rock</button>
        <button>Paper</button>
        <button>Spock</button>
        <button>Scissors</button>
        <button>Lizard</button>
      </div>

      {/* <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal> */}
    </Box>
    {/* <Gallery items={data.homeJson.gallery} /> */}
    {/* <div style={{ height: '50vh' }} /> */}
    {/* <IOExample /> */}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
