export type Speciality = {
  id: number;
  name: string;
  activity: boolean;
  documentId: string;
  task: string
};

 type DataSpeciality = {
  data: Speciality[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export async function getSpecialities(): Promise<DataSpeciality> {
  const resp = await fetch('http://localhost:1337/api/specialities');

  return resp.json();
}

