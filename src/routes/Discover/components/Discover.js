import React, { Component } from 'react';
import { NewReleases, FeaturedPlaylists, Categories } from '../api';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount = async () => {
    // Wait for each for a visually cleaner loading experience
    await this.getData('newReleases', NewReleases);
    await this.getData('playlists', FeaturedPlaylists);
    await this.getData('categories', Categories);
  };

  getData = (key, fetchFunction) => {
    return new Promise(async resolve => {
      this.setState({ [key]: await fetchFunction() }, resolve);
    })
  };


  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
