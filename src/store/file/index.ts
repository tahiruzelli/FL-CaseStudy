import { create } from "zustand";
import axios from "axios";
import { Urls } from "@/src/utils/constans/urls";

interface FileStore {
  files: [];
  loading: boolean;
  error: string | null;
  postFileSuccess: boolean;
  fetchFiles: () => Promise<void>;
  postFile: (values: any) => Promise<void>;
  editFile: (values: any) => Promise<void>;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  loading: false,
  error: null,
  postFileSuccess: false,
  fetchFiles: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${Urls.baseUrl}${Urls.files}`);
      set({ files: response.data.datas, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch file", loading: false });
    }
  },
  postFile: async (values: any) => {
    set({ loading: true, postFileSuccess: false });
    try {
      const response = await axios.post(`${Urls.baseUrl}${Urls.files}`, values);
      set({
        files: response.data.datas,
        loading: false,
        postFileSuccess: true,
      });
    } catch (error) {
      set({
        error: "Failed to post file",
        loading: false,
        postFileSuccess: false,
      });
    }
  },
  editFile: async (values: any) => {
    set({ loading: true, postFileSuccess: false });
    try {
      const response = await axios.put(`${Urls.baseUrl}${Urls.files}`, values);
      set({
        files: response.data.datas,
        loading: false,
        postFileSuccess: true,
      });
    } catch (error) {
      set({
        error: "Failed to post file",
        loading: false,
        postFileSuccess: false,
      });
    }
  },
}));
