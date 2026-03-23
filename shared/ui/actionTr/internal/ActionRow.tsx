import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export function ActionTr({ children }: Props) {
  return (
    <tr>
      <td
        colSpan={100}
        className="py-1 px-0"
      >
        <div
          className="px-4 py-3"
          style={{
            backgroundColor: '#E2F3E2',
            borderTop: '1px solid #afc9af',
            borderBottom: '1px solid #afc9af',
          }}
        >
          {children}
        </div>
      </td>
    </tr>
  );
}
