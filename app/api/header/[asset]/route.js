import { headers, cookies } from "next/headers"
import { NextResponse } from "next/server"

const IMMUTABLE = "public, max-age=31536000, immutable"
const REVALIDATE = "public, s-maxage=59, stale-while-revalidate"

export async function GET(req, { params }) {
    try {
        const headersList = headers()
        const allCookies = cookies().getAll()
        let url = "https://picsum.photos/200"

        let contentType, contentLength, h

        const stream = await fetch(url).then((r) => {
            h = r.headers
            contentType = r.headers.get("content-type")
            contentLength = r.headers.get("content-length")

            const reader = r.body.getReader()
            return new ReadableStream({
                start(controller) {
                    return pump()
                    function pump() {
                        return reader.read().then(({ done, value }) => {
                            // When no more data needs to be consumed, close the stream
                            if (done) {
                                controller.close()
                                return
                            }
                            // Enqueue the next data chunk into our target stream
                            controller.enqueue(value)
                            return pump()
                        })
                    }
                },
            })
        })

        const newHeaders = new Headers(h)
        newHeaders.set("Cache-Control", REVALIDATE)

        return new NextResponse(stream, {
            status: 200,
            newHeaders,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, { status: 500 })
    }
}
