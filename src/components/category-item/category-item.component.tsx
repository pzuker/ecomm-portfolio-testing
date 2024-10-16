import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryRoute } from '../categories/categories.component';

import {
  BackgroundImage,
  CategoryItemContainer,
  Body,
} from './category-item.styles';

type CategoryItemProps = {
  category: CategoryRoute;
};

const CategoryItem: FC<CategoryItemProps> = ({
  category: { imageUrl, title, route },
}) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
