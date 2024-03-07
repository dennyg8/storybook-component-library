import 'react'

export interface CardProps {
  /**
   * The title of the card
   */
  title: string;
  /**
   * The text content of the card
   */
  text: string;
  /**
   * The URL of the image source 
   */
  src: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Background color 
   */
  backgroundColor?: string;
  }
  