import ProfileCard from "@/components/ProfileCard"
import { Celebrity } from "../types/celebrity.types";

export const fetchCelebrities = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/celebrities');
    const data = res.json();
    return data;
}
export const revalidate = 60;
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