import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/supabaseClient";
import { Celebrity } from "@/app/types/celebrity.types";

export async function GET(reques: Request) {
    const { data } = await supabase
        .from('news')
        .select('celebrities_news(celebrities(*))')
        .order('created_at', { ascending: false })
        .limit(4);
    const celebrities: Celebrity[] | undefined = data?.map(item => { return item.celebrities_news[0]?.celebrities }).flat();
    if (data) return NextResponse.json(Array.from(new Map(celebrities?.map(celebrity => [celebrity.id, celebrity])).values()));
    return null;
}