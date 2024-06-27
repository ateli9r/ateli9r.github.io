export default class CounterModel {
    private count: number = 0

    getCount() {
        return this.count
    }

    resetCount() {
        this.count = 0
    }

    increase() {
        this.count += 1
    }
}