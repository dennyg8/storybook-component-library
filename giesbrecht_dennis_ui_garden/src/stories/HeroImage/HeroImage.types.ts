import 'react'

export interface HeroImageProps {
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
