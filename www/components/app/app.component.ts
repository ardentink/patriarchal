import {data} from './mock-data.ts';

class AppComponent {
    public is;
    public properties;

    beforeRegister() {
        this.is = 'patriarchal-app';
        this.properties = {
            userID: Number,
            user: String,
            blessingText: String
        }
    }

    ready() {
        this.userID = 0;
        this.user = data[this.userID].user;
        this.blessingText = data[this.userID].blessing;
    }
    attached() {}
    detached() {}
    attributeChanged() {}
}

Polymer(AppComponent);
