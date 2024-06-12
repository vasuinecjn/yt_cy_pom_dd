class Page {

    static pageLocators = new Map();

    locators;

    constructor() {
        if(!Page.pageLocators.has(this.constructor.name)) {
            Page.pageLocators.set(this.constructor.name, require("../page_locators/"+ this.constructor.name + ".json"))
        }
        this.locators = Page.pageLocators.get(this.constructor.name)
    }

    getLocator(key) {
        return this.locators[key];
    }


}

export default Page;