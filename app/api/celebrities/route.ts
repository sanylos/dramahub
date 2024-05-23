import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";


export async function GET(reques: Request) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
    const { data } = await supabase
        .from('celebrities')
        .select()
    if (data) return NextResponse.json(Object.values(data));
    return null;
}