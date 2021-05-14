import request from './request';

export default function FeaturedPlaylists() {
  return request('featured-playlists', 'playlists');
}