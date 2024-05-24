import { supabase } from "@/utils/supabase/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { nickname: string } }) {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/celebrities/' + params.nickname);
    const data = await res.json();
    if (data.youtube_id) {
        const googleRes = await fetch('https://www.googleapis.com/youtube/v3/channels?key=' + process.env.NEXT_PUBLIC_GOOGLE_API_KEY + '&part=snippet,id,statistics&id=' + data.youtube_id);
        const googleData = await googleRes.json();
        if (googleData.items[0].snippet.thumbnails.medium.url) {
            return NextResponse.json(googleData.items[0].snippet.thumbnails.medium.url);
        }
    }
    return NextResponse.json(null);
}