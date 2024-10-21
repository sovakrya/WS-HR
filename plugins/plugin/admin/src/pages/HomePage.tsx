import { SingleSelectOption } from '@strapi/design-system';
import { Typography } from '@strapi/design-system';
import { Main } from '@strapi/design-system';
import { SingleSelect } from '@strapi/design-system';

const HomePage = () => {
  return (
    <Main>
      <h1 >Выбор задания</h1>

      <SingleSelect>
        <SingleSelectOption value="front">Front</SingleSelectOption>
        <SingleSelectOption value="front">Back</SingleSelectOption>
      </SingleSelect>
    </Main>
  );
};

export { HomePage };
