import { mount, flushPromises } from '@vue/test-utils';
import axios from 'axios';
import AxiosMock from '@/views/unit_test/axios_mock/AxiosMock.vue';

const mockPostObject = {
  data: [
    { id: 1, name: 'title1' },
    { id: 2, name: 'title2' },
  ],
};

// Following lines tell vi to mock any call to `axios.get`
// and to return `mockPostList` instead
vi.spyOn(axios, 'get').mockResolvedValue(mockPostObject);

test('loads posts on button click', async () => {
  const wrapper = mount(AxiosMock);

  await wrapper.get('button').trigger('click');

  // Let's assert that we've called axios.get the right amount of times and
  // with the right parameters.
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');

  // Wait until the DOM updates.
  await flushPromises();

  // Finally, we make sure we've rendered the content from the API.
  const posts = wrapper.findAll('[data-test="post"]');

  expect(posts).toHaveLength(2);
  expect(posts[0].text()).toContain('title1');
  expect(posts[1].text()).toContain('title2');
});
