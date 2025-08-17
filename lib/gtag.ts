declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID || "";

// Log page views
export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({ action, params }: { action: string; params: object }) => {
  if (window.gtag) {
    window.gtag("event", action, params);
  }
};