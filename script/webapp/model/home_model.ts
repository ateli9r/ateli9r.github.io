import { marked } from 'marked'

/**
 * 홈페이지 모델
 */
export default class HomeModel {
    private debug: boolean = false

    /**
     * 테스트 플래그 설정
     * @param debug 디버그 모드
     */
    setDebugMode(debug: boolean) {
        this.debug = debug
    }

    /**
     * markdown 텍스트 변환
     * @param text markdown 텍스트
     * @returns html 텍스트
     */
    parse(text: string): string {
        const resp = marked.parse(text) as string
        return resp.substring(0, resp.length-1)
    }

    /**
     * markdown 파일 읽기
     * @param path 요청 경로
     * @returns 파일 내용
     */
    async load(path: string): Promise<string | null> {
        let ret = null
        try {
            if (!this.debug) { // fetch를 통한 http 요청 (정상 요청)
                const resp = await fetch(path)
                if (!resp.ok) return null
                ret = await resp.text()
            } else { // node 파일 읽기 (디버그 모드)
                const fs = require('fs')
                const filePath = `../../docs/${path}`.replace(/\/\//, '/')
                if (fs.existsSync(filePath)) {
                    const resp = fs.readFileSync(filePath)
                    ret = resp.toString('utf-8')
                }
            }
        } catch (e) {

        }
        return ret
    }

    /**
     * 컨텐츠 가져오기
     * @param contentId 컨텐츠 ID
     * @returns html 변환된 텍스트
     */
    async content(contentId: string): Promise<string | null> {
        const resp = await this.load(`/contents/home/${contentId}.md`)
        if (resp == null) return null
        return this.parse(resp)
    }
}