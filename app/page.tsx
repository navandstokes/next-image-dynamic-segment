/** Add your relevant code here for the issue to reproduce */
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Static</p>
      <Image src={`/api`} width="200" height="200" alt="an image" />
      <p>Dynamic Segment</p>
      <Image
        src={`/api/dynamic-segment/jfkdlsjfds`}
        width="200"
        height="200"
        alt="an image"
      />
      <p>Header</p>
      <Image src={`/api/header/page`} width="200" height="200" alt="an image" />
      <p>Dynamic Params</p>
      <Image
        src={`/api/dynamic-params/page`}
        width="200"
        height="200"
        alt="an image"
      />
      <p>Force Dynamic</p>
      <Image
        src={`/api/force-dynamic/page`}
        width="200"
        height="200"
        alt="an image"
      />
      <p>Revalidate 0</p>
      <Image
        src={`/api/revalidate/page`}
        width="200"
        height="200"
        alt="an image"
      />
      <p>Edge Runtime</p>
      <Image
        src={`/api/edge-runtime/page`}
        width="200"
        height="200"
        alt="an image"
      />
    </div>
  );
}
