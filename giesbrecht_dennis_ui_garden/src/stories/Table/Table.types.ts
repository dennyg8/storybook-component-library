import 'react';

export interface TableProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Content for the table header
   */
  headerContent: string[];
  /**
   * Content for the table rows
   */
  rowData: string[][];
  /**
   * Content for the table footer
   */
  footerContent: string[];
}
