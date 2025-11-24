export interface ServiceItem {
  title: string;
  description: string;
  icon: string; // Ionicons name
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  petName: string;
  content: string;
  image: string;
}

// Augment the global JSX namespace to include the custom element 'ion-icon' and allow standard elements.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
      [elemName: string]: any;
    }
  }
}
