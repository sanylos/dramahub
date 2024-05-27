import { supabase } from "@/utils/supabase/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { nickname: string } }) {
    const { data } = await supabase
        .from('celebrities')
        .select('celebrities_news(*, news(*))')
        .ilike('nickname', params.nickname)
    if (data) return NextResponse.json(data);
    return NextResponse.json(null);
}