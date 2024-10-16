import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../category.selector';

const mockState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          {
            id: 1,
            name: 'prod 1',
          },
          {
            id: 2,
            name: 'prod 2',
          },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'test2',
        items: [
          {
            id: 3,
            name: 'prod 3',
          },
          {
            id: 4,
            name: 'prod 4',
          },
        ],
      },
    ],
  },
};

describe('Category Selector tests', () => {
  test('selectCategories should return the categories data', () => {
    const categoriesSlice = selectCategories(mockState);
    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test('selectCategoriesIsLoading should return isLoading state', () => {
    const isLoading = selectCategoriesIsLoading(mockState);
    expect(isLoading).toEqual(false);
  });

  test('selectCategoriesMap should convert the items array into the appropriate map', () => {
    const expectedCategoriesMap = {
      mens: [
        {
          id: 1,
          name: 'prod 1',
        },
        {
          id: 2,
          name: 'prod 2',
        },
      ],
      womens: [
        {
          id: 3,
          name: 'prod 3',
        },
        {
          id: 4,
          name: 'prod 4',
        },
      ],
    };

    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
