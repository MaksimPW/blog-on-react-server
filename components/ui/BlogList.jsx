import React, { DOM } from 'react';
import _ from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ( { posts } ) => (
  DOM.div(
    { },
    _.map(
      posts,
      (post) => (
        React.createElement(BlogItem, { props: { text: post.text, image: { src: post.image },  key: post.id }})
      )
    )
  )
)

export default BlogList;
