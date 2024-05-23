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
export const revalidate = 10;
const OsobnostiPage = async () => {
    const celebrities: Celebrity[] | null = await fetchCelebrities();

    return (
        <div>
            <h1>Osobnosti</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
                {celebrities && celebrities.map(celebrity => <div key={celebrity.id} className="m-1">{<ProfileCard celebrity={celebrity} />}</div>)}
            </div>

        </div>
    )
}

export default OsobnostiPage