"use client"
import ProfileCard from "@/components/ProfileCard"
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from "react";
const OsobnostiPage = () => {
    const supabase = createClient()
    const [celebrities, setCelebrities] = useState([]);
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
            <ProfileCard />
        </div>
    )
}

export default OsobnostiPage