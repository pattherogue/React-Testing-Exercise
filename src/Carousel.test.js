import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import TEST_IMAGES from './_testCommon.js';

test('renders Carousel without crashing', () => {
  render(<Carousel photos={[]} title="Test Title" />);
});

test('matches snapshot', () => {
  const { asFragment } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('clicking on the right arrow moves to the next image', () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  fireEvent.click(container.querySelector('.bi-arrow-right-circle'));

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

test('clicking on the left arrow moves to the previous image', () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // Move to the second image
  fireEvent.click(container.querySelector('.bi-arrow-right-circle'));

  fireEvent.click(container.querySelector('.bi-arrow-left-circle'));

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});
