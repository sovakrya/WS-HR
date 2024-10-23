import {
  Main,
  Typography,
  SingleSelectOption,
  SingleSelect,
  Box,
  Button,
} from '@strapi/design-system';
import { useEffect, useState } from 'react';
import { Speciality, getSpecialities } from '../api/plugin';

const HomePage = () => {
  const [specialities, setSpecialities] = useState<Speciality[]>([]);

  function getSpecialitiesFromFetch() {
    const correctedSpecialities: Speciality[] = [];
    getSpecialities().then((res) => {
      for (let spesiality of res.data) {
        for (let task of spesiality.tasks) {
          if (spesiality.activity && task.activity) {
            correctedSpecialities.push(spesiality);
          }
        }
      }

      setSpecialities(correctedSpecialities)
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

      {!specialities.length ? (
        <Typography style={{ fontWeight: 400, fontSize: 14, color: '#32324D' }}>
          Для выбора задания необходимо добавить хотя бы одну активную специальность и хотя бы одно
          активное задания для нее.
        </Typography>
      ) : (
        <>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Typography>Специальность</Typography>
            <SingleSelect placeholder="Выберите специальность" style={{ width: 640, height: 43 }}>
              {specialities.map((spesiality) => {
                return (
                  <SingleSelectOption key={spesiality.id} value={spesiality.documentId}>
                    {spesiality.name}
                  </SingleSelectOption>
                );
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
