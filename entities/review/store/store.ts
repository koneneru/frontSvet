import { create } from 'zustand';
import { fetchReviews, updateReview } from '../api';
import { Review, ReviewFilters, ReviewUpdateDTO } from '../model/types';
import { createSelectors } from '@/shared/lib/zustand/createSelectors';

interface ReviewState {
  reviews: Review[]
  fetchReviews: (filters: ReviewFilters) => Promise<void>
  updateReview: (id: string, data: ReviewUpdateDTO) => Promise<void>
}

const reviewStore = create<ReviewState>((set) => ({
  reviews: [],
  fetchReviews: async (filters: ReviewFilters) => {
    const reviews = await fetchReviews(filters);
    set({ reviews: reviews });
  },
  updateReview: async (id: string, dto: ReviewUpdateDTO) => {
    const updatedReview = await updateReview(id, dto);
    set(state => ({
      reviews: state.reviews.map(r => r.id !== updatedReview.id ? r : updatedReview)
    }));
  },
}));

export const useReviewStore = createSelectors(reviewStore);