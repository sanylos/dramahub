import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/supabaseClient";

export async function GET(reques: Request) {
    const { data } = await supabase
        .from('news')
        .select('celebrities_news(celebrities(*))')
        .order('created_at', { ascending: false })
        .limit(4)
    if (data) return NextResponse.json(Object.values(data.map(item => { return item.celebrities_news[0].celebrities })));
    return null;
}