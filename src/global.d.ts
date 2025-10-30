declare global {
  interface Window {
    bootstrap: typeof import('bootstrap');
  }
}

export {}; // This ensures the file is treated as a module