import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import ProductCard from '../product-card.component';

describe('Product Card tests', () => {
  test('It should add the product item when Product Card button is clicked', async () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'test',
      name: 'item A',
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCardButtonElement = screen.queryByText(/add to cart/i);
    await fireEvent.click(addToCardButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
