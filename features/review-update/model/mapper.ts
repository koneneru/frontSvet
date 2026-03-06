import { ReviewUpdateDTO } from '@/entities/review';
import type { ReviewEditFormValues } from './types.js';

export function mapFormValuesToUpdateDTO(values: ReviewEditFormValues): ReviewUpdateDTO {
  return {
    timestamp: new Date(values.timestamp),
    machine: values.machine.trim(),
    appraisal: Number(values.rating),
    problem: values.problem.trim(),
    solution: values.solution.trim(),
    comment: values.comment.trim(),
  };
}
