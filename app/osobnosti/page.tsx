import ProfileCard from "@/components/ProfileCard"
import { useEffect, useState } from "react";
import { Celebrity } from "../types/celebrity.types";
import { createClient } from "@supabase/supabase-js";

export const fetchCelebrities = async () => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
    const { data } = await supabase.from('celebrities').select();
    if (data) return data;
    return null;
}

const OsobnostiPage = async () => {
    const celebrities: Celebrity[] = await fetchCelebrities();

    return (
        <div>
            <h1>Osobnosti</h1>
            <div className="grid grid-cols-4">
                {celebrities.length > 0 && celebrities.map(celebrity => <div key={celebrity.id} className="m-1">{<ProfileCard celebrity={celebrity} />}</div>)}
            </div>

        </div>
    )
}

export default OsobnostiPage