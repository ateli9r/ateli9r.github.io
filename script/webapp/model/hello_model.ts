export default class HelloModel {
    private prefix: string = 'Hello'
    private splitter: string = ', '

    hello(name: string = '') {
        if (name.length > 0)
            return `${this.prefix}${this.splitter}${name}`
        else
            return `${this.prefix}`
    }

    setPrefix(prefix: string) {
        this.prefix = prefix
    }

    setSplitter(splitter: string) {
        this.splitter = splitter
    }
}
