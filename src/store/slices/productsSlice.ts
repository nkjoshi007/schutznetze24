import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface ProductsState {
  items: Product[];
  categories: string[];
  filteredItems: Product[];
  isLoading: boolean;
  error: string | null;
  filters: {
    category: string;
    priceRange: [number, number];
    inStock: boolean;
    searchQuery: string;
  };
}

const initialState: ProductsState = {
  items: [],
  categories: [],
  filteredItems: [],
  isLoading: false,
  error: null,
  filters: {
    category: '',
    priceRange: [0, 1000],
    inStock: false,
    searchQuery: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
      state.categories = [...new Set(action.payload.map(p => p.category))];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<ProductsState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
      
      // Apply filters
      let filtered = state.items;
      
      if (state.filters.category) {
        filtered = filtered.filter(p => p.category === state.filters.category);
      }
      
      if (state.filters.searchQuery) {
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(state.filters.searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(state.filters.searchQuery.toLowerCase())
        );
      }
      
      if (state.filters.inStock) {
        filtered = filtered.filter(p => p.inStock);
      }
      
      filtered = filtered.filter(p => 
        p.price >= state.filters.priceRange[0] && 
        p.price <= state.filters.priceRange[1]
      );
      
      state.filteredItems = filtered;
    },
  },
});

export const { setProducts, setLoading, setError, setFilters } = productsSlice.actions;
export default productsSlice.reducer;