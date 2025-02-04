import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Oops! Bir şeyler yanlış gitti
            </h2>
            <p className="text-gray-600 mb-4">
              Özür dileriz, bir hata oluştu. Lütfen sayfayı yenileyin veya sorun devam ederse bizimle iletişime geçin.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#C5A572] hover:bg-[#B89355] text-white px-6 py-2 rounded-lg transition"
            >
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}