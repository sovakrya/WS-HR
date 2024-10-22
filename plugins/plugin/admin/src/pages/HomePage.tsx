import {
  Main,
  Typography,
  SingleSelectOption,
  SingleSelect,
  Box,
  Button,
} from '@strapi/design-system';
import { useEffect, useState } from 'react';
import { DataSpeciality, getSpecialities } from '../api/plugin';

const HomePage = () => {
  const [specialities, setSpecialities] = useState<DataSpeciality>();

  function getSpecialitiesFromFetch() {
    getSpecialities().then((res) => {
      setSpecialities(res);
    });
  }
  useEffect(() => {
    getSpecialitiesFromFetch();
  }, []);

  return (
    <Main
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 56,
        paddingRight: 56,
      }}
    >
      <Typography variant="beta" style={{ fontSize: 32, fontWeight: 400, color: '#32324D' }}>
        Выбор задания
      </Typography>

      {!specialities ? (
        <Typography style={{ fontWeight: 400, fontSize: 14, color: '#32324D' }}>
          Для выбора задания необходимо добавить хотя бы одну активную специальность и хотя бы одно
          активное задания для нее.
        </Typography>
      ) : (
        <>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Typography>Специальность</Typography>
            <SingleSelect placeholder="Выберите специальность" style={{ width: 640, height: 43 }}>
              {specialities.data.map((speciality) => {
                if(!speciality.activity && speciality.task){
                  return
                }else {
                  return <SingleSelectOption value={speciality.id} key={speciality.id}>{speciality.name}</SingleSelectOption>
                }
              })}
            </SingleSelect>
          </Box>

          <Button style={{ width: 270, height: 33 }}>Сгенерировать ссылку на задание</Button>
        </>
      )}
    </Main>
  );
};

export { HomePage };
