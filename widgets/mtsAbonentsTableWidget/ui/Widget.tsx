import { mtsAbonentApi } from '@/entities/mtsAbonent';
import { departmentApi } from '@/entities/department';
import { DictionaryHydrator } from '@/shared/dictionaries';
import { Content } from './WidgetContent';

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export async function MtsAbonentsTableWidget({ searchParams }: Props) {
  const filters = await searchParams;
  const [abonents, departments] = await Promise.all([
    mtsAbonentApi.fetch(filters),
    departmentApi.fetch(),
  ]);

  return (
    <>
      <DictionaryHydrator departments={departments} />

      <Content abonents={abonents} />
    </>
  );
}
