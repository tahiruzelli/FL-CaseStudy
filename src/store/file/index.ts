import { create } from "zustand";
import axios from "axios";
import { Urls } from "@/src/utils/constans/urls";

interface FileStore {
  files: [];
  loading: boolean;
  error: string | null;
  fetchFiles: () => Promise<void>;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  loading: false,
  error: null,
  fetchFiles: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${Urls.baseUrl}${Urls.files}`);
      set({ files: response.data.datas, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch users", loading: false });
    }
  },
}));
