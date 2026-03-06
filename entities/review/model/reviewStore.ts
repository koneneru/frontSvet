import { create } from 'zustand';
import { Review, ReviewFilters, ReviewUpdateDTO } from './types';
import { createSelectors } from '@/shared/lib/zustand/createSelectors';
import { fetchReviews, updateReview } from '../api/reviewApi';

interface ReviewState {
  reviewsById: Record<string, Review>
  reviewIds: string[]
  loading: boolean

  fetchReviews: (filters: ReviewFilters) => Promise<void>
  // updateReview: (id: string, data: Partial<Review>) => Promise<void>
  updateReview: (id: string, data: ReviewUpdateDTO) => Promise<void>
}

const reviewStore = create<ReviewState>((set, get) => ({
  reviewsById: {},
  reviewIds: [],
  reviews: [],
  loading: false,

  fetchReviews: async (filters) => {
    set({ loading: true });

    try {
      const fetchedReviews = await fetchReviews(filters);

      const byId: Record<string, Review> = {};
      const ids: string[] = [];

      for (const review of fetchedReviews) {
        byId[String(review.id)] = review;
        ids.push(String(review.id));
      }

      set({
        reviewsById: byId,
        reviewIds: ids,
      });
    } finally {
      set({
        loading: false,
      });
    }    
  },

  updateReview: async (id, dto) => {
    const updatedReview = await updateReview(id, dto);
    
    set({
      reviewsById: {
        ...get().reviewsById,
        [String(updatedReview.id)]: updatedReview,
      },
    });
  },
}));

export const useReviewStore = createSelectors(reviewStore);