import { useReviewStore } from '../model/reviewStore';

export const useReviewIds = () => {
  return useReviewStore.use.reviewIds();
};
