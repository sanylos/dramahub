export const getPictureUrl = async (youtube_id: string) => {
    if (youtube_id) {
        const res = await fetch('https://www.googleapis.com/youtube/v3/channels?key=' + process.env.NEXT_PUBLIC_GOOGLE_API_KEY + '&part=snippet,id,statistics&id=' + youtube_id);
        const data = await res.json();
        if (data.items[0].snippet.thumbnails.medium.url) {
            return data.items[0].snippet.thumbnails.medium.url;
        }
    }
    return null;
}