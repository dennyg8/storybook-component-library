import 'react'

export interface ImageProps {
    /**
     * The URL of the image to display
     */
    src: string;
    /**
     * Alternate text for the image
     */
    alt: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
}
