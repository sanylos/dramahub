import { supabase } from "@/utils/supabase/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { nickname: string } }) {
    const { data } = await supabase
        .from('celebrities')
        .select('*')
        .ilike('nickname', params.nickname)
        .single()
    if (data) return NextResponse.json(data);
    return NextResponse.json(null);
}