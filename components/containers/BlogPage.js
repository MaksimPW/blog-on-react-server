import React, { Component } from 'react';

import BlogList from '../ui/BlogList';

const posts = [
  {
   id: 0,
   image: 'http://maksim.pw/wp-content/uploads/2017/01/yXa_Zvmys_-ToDOhci2TupdbratAP4cvUQFXdxKTLScDJmxS-508x381.jpg'
  },
  {
   id: 1,
   image: 'http://maksim.pw/wp-content/uploads/2016/08/kurs-973x730.jpg',
   text: 'Отзыв о курсе'
  },
  {
   id: 2,
   text: 'Полумарафон'
  }
];

export default class BlogPage extends Component {
  constructor(props){
    super(props);

    this.state = { posts };
  }

  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts })
  }
}
