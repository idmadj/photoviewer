/**
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from 'ionic-native';
 *
 * PhotoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * PhotoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false}, callback);
 * ```
 */
export declare class PhotoViewer {
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {any}
     * @param callback {function}
     */
    static show(url: string, title?: string, options?: {
        share?: boolean;
    }, callback?: () => void): void;
}
