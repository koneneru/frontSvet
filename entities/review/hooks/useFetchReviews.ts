import { useReviewStore } from '../model/reviewStore'

export const useFetchReviews = () => {
  return useReviewStore.use.fetchReviews();
}