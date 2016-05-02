class AppComponent {
    public is;
    public properties;

    beforeRegister() {
        this.is = 'ds-app';
        this.properties = {
        }
    }

    ready() {}
    attached() {}
    detached() {}
    attributeChanged() {}
}

Polymer(AppComponent);
