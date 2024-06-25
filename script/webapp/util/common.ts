export default class CommonUtil {
    static async templateHTML(fileName: string) {
        return await (await fetch(`/html/${fileName}.html`)).text()
    }
}