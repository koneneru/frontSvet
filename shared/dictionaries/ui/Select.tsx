import { SelectHTMLAttributes } from 'react';
import { dictionaryStore } from '../model/store';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  type: 'departments' | 'gateways'
  placeholder?: string
}

export function DictionarySelect({ type, placeholder, ...props }: Props) {
  const data = dictionaryStore(state => state[type]);

  return (
    <select className="form-control form-control-sm" {...props}>
      <option value="">{placeholder || '-- Не выбрано --'}</option>
      {data.map(item => (
        <option key={item.id} value={String(item.id)}>{item.name}</option>
      ))}
    </select>
  );
}
