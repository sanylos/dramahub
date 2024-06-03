import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/supabaseClient";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const { data } = await supabase
        .from('news')
        .select('*')
        .eq('slug', params.slug)
        .single();
    if (data) return NextResponse.json(data);
    return null;
}