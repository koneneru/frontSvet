import { ReviewUpdateDTO } from '@/entities/review';

export function mapFormDataToUpdateDto(formData: FormData): ReviewUpdateDTO {
  return {
    timestamp: new Date(formData.get('timestamp')?.toString() || ''),
    machine: formData.get('machine')?.toString().trim() || '',
    appraisal: Number(formData.get('rating')),
    problem: formData.get('problem')?.toString().trim(),
    solution: formData.get('solution')?.toString().trim(),
    comment: formData.get('comment')?.toString().trim(),
  };
}
