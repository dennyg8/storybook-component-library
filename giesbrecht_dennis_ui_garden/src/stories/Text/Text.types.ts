import 'react';

export interface TextProps {
  /**
   * What color to use for the text
   */
  color?: string;
  /**
   * Label text
   */
  label: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Font style for the text
   */
  fontStyle?: 'sans-serif' | 'name' | 'subHeading';
  /** 
   * Font size  
   */
  fontSize?: 'small' | 'medium' | 'large'; 
}