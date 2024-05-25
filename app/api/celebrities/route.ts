import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/supabaseClient";

export async function GET(reques: Request) {
    const { data } = await supabase
        .from('celebrities')
        .select('*')
    if (data) return NextResponse.json(Object.values(data));
    return null;
}