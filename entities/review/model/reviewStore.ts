import { create } from 'zustand';
import { Review, ReviewFilters } from './types';
import { createSelectors } from '@/shared/lib/zustand/createSelectors';
import { fetchReviews, updateReview } from '../api/reviewApi';

interface ReviewState {
  reviews: Review[]
  loading: boolean

  fetchReviews: (filters: ReviewFilters) => Promise<void>
  updateReview: (id: string, data: Partial<Review>) => Promise<void>
}

const reviewStore = create<ReviewState>((set, get) => ({
  reviews: [],
  loading: false,

  fetchReviews: async (filters) => {
    set({ loading: true });

    try {
      const fetchedReviews = await fetchReviews(filters);
      set({
        reviews: fetchedReviews,
      });
    } catch (err) {
      throw err;
    } finally {
      set({
        loading: false,
      });
    }    
  },

  updateReview: async (id, dto) => {
    const updatedReview = await updateReview(id, dto);
    set({
      reviews: get().reviews.map(
        r => r.id !== updatedReview.id ? r : updatedReview
      )
    });
  },
}));

export const useReviewStore = createSelectors(reviewStore);