"use client"
import ProfileCard from "@/components/ProfileCard"
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from "react";
import { Celebrity } from "../types/celebrity.types";
const OsobnostiPage = () => {
    const supabase = createClient()
    const [celebrities, setCelebrities] = useState<Celebrity[]>([]);
    const fetchCelebrities = async () => {
        const { data } = await supabase
            .from('celebrities').select()
        setCelebrities(data);
    }
    useEffect(() => {
        fetchCelebrities();
    })
    return (
        <div>
            <h1>Osobnosti</h1>
            {JSON.stringify(celebrities)}
            <div className="flex">
                {celebrities && celebrities.map(celebrity => <ProfileCard key={celebrity.id} celebrity={celebrity} />)}
            </div>

        </div>
    )
}

export default OsobnostiPage