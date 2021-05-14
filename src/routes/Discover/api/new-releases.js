import request from './request';

export default function NewReleases() {
  return request('new-releases', 'albums');
}
