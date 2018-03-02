export default class SanitizeState {
    private tagStack = [];

    reset() {
        this.tagStack = [];
    }

    isInUse() {
        return this.tagStack.length !== 0;
    }

    getSanitizer() {
        return this.sanitize.bind(this);
    }

    private sanitize(tag: string) {
        // TODO
        return tag;
    }
}
