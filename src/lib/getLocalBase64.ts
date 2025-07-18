import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    //console.log(`base64: ${base64}`)

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

// Send all images at once to avoide request water fall
export async function addBluredDataUrls(images: string[]) {
  const base64Promises = images.map((image) => getBase64(image));
  const base64Images = await Promise.all(base64Promises);
  //   console.log(base64Images);
  return base64Images;
}
