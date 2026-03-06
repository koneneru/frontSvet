import { useReviewStore } from '../model/reviewStore';

export const useReviewsById = () => {
  return useReviewStore.use.reviewsById();
};
