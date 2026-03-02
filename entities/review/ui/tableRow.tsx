import { toIsoString } from '@/shared/lib/date';
import { Review } from '../model/types';

export default function ReviewRow({ review }: { review: Review }) {
  return (
    <tr key={review.id}>
      <td className="text-end">{review.id}</td>
      <td className="text-center text-nowrap">{toIsoString(review.timestamp).slice(0, 19).replace('T', ' ')}</td>
      <td className="text-start">{review.machine}</td>
      <td className="text-center">{review.rating}</td>
      <td className="text-start">{review.problem}</td>
      <td className="text-start">{review.solution}</td>
      <td className="text-start">{review.comment}</td>
    </tr>
  )
}