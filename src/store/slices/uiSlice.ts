import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  language: string;
  theme: 'light' | 'dark';
  isMobileMenuOpen: boolean;
  isChatbotOpen: boolean;
  isB2BMode: boolean;
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
  }>;
}

const initialState: UIState = {
  language: 'de',
  theme: 'light',
  isMobileMenuOpen: false,
  isChatbotOpen: false,
  isB2BMode: false,
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    toggleChatbot: (state) => {
      state.isChatbotOpen = !state.isChatbotOpen;
    },
    toggleB2BMode: (state) => {
      state.isB2BMode = !state.isB2BMode;
    },
    addNotification: (state, action: PayloadAction<Omit<UIState['notifications'][0], 'id'>>) => {
      const notification = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.notifications.push(notification);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
  },
});

export const {
  setLanguage,
  setTheme,
  toggleMobileMenu,
  closeMobileMenu,
  toggleChatbot,
  toggleB2BMode,
  addNotification,
  removeNotification,
} = uiSlice.actions;

export default uiSlice.reducer;