import { useReviewStore } from '../model/reviewStore'

export const useFetchReviews = () => {
  const fetchReviews = useReviewStore.use.fetchReviews();
  const loading = useReviewStore.use.loading();

  return { fetch: fetchReviews, loading };
}