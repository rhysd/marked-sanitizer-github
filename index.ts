export default class SanitizeState {
    private tagStack = [];

    reset() {
        this.tagStack = [];
    }

    getSanitizer() {
        return this.sanitize.bind(this);
    }

    private sanitize(tag: string) {
        // TODO
        return tag;
    }
}
