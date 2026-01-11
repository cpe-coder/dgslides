export interface RecentFile {
   id: number;
   name: string;
   slides: number;
   emoji: string;
   gradient: string[];
   lastEdited: string;
}

export interface Template {
   name: string;
   emoji: string;
   gradient: string[];
   category?: string;
}

export interface Slide {
   id: number;
   emoji: string;
   active: boolean;
   content?: string;
}

export interface Tool {
   icon: any;
   label: string;
   action?: string;
}

export interface CloudService {
   name: string;
   icon: string;
   enabled: boolean;
}

export interface ExportFormat {
   name: string;
   icon: string;
   color: string;
}
