'use client';

import { Review } from '@/entities/review';
import { ReviewFilterForm } from '@/features/review-filter';
import { Suspense } from 'react';
import { ReviewsTable } from './Table';
import { SkeletonMain } from '@/shared/ui/skeleton';

interface Props {
  reviews: Review[]
}

export function Content({ reviews }: Props) {
  return (
    <div className="container-lg">
      <div className="d-flex justify-content-between mb-3">
        <p className="fs-4 fs-semibold m-0">Обращения пользователей</p>
      </div>

      <ReviewFilterForm />

      <div className="bg-body-tertiary border rounded shadow-sm">
        <Suspense fallback={SkeletonMain()}>
          <ReviewsTable reviews={reviews} />
        </Suspense>
      </div>
    </div>
  );
}
