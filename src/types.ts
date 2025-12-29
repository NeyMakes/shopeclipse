
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ShopItem {
  id: string;
  name: string;
  category: 'server' | 'bot' | 'emojis' | 'nitro';
  price: string;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
