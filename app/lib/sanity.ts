import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'qsbs10y6',
    dataset: 'production',
    apiVersion: '2024-05-04',
    // token: 'skoar0N1RlgYZc3muUppoMeypGUnCyDbxOZmfkMlakCYuq5jsD48fruSuvdvjEUCHdEoJEuaNMbkgFENNmS0zVHk3uoARqwOZ3WnrgoOSHhoZ2cARCqXdTT8wtBluKvoUyZ5LvCEoMTZHKDnWZW0194hsjnh7KJCc3vLGo8JJjbeyCzZRMLS',
    useCdn: false,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}