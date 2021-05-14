import request from './request';

export default function Categories() {
  return request('categories', 'categories');
}
