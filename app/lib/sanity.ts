import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'qsbs10y6',
    dataset: 'production',
    apiVersion: '2024-05-04',
    token: 'skw3QqztyswXK8Wcnq5x3n4RvovwriheQSWcmVb80LNSjDjgD5Jrg2gqxDGESOp1obqZsLUbFL25MM7OFuTMer73dyrR8FlLU5tvp0IwtutIwBigh6ACRTtDwupLCNlrJSgxgvsJeqw5gdZxO5S58w1srPgjTHnbxesC2xXVp1bzjsteBXdw',
    useCdn: false,
    ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}