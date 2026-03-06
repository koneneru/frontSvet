import { useReviewStore } from '../model/reviewStore'

export const useLoading = () => {
  return useReviewStore.use.loading();
}
