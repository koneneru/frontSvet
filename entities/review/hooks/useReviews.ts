import { useReviewStore } from '../model/reviewStore'

export const useReviews = () => {
  return useReviewStore.use.reviews();
}
