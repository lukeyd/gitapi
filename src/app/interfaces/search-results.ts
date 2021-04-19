import { User } from './user';

export interface SearchResults {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
