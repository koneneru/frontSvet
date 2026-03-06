import { useReviewStore } from '../model/reviewStore';

export const useUpdateReview = () => {
  return useReviewStore.use.updateReview();
};
