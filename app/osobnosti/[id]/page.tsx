import { createClient } from '@supabase/supabase-js';

export const fetchCelebrity = async (nickname: string) => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
    const { data, error } = await supabase.from('celebrities').select().ilike('nickname', nickname).single();
    console.log('EEEERRRRRROOOOORRRRR:' + error)
    console.log(data)
    if (data) return data;
    return null;
}
export const revalidate = 10;
const OsobnostPage = async ({ params }: { params: { id: string } }) => {
    const celebrity = await fetchCelebrity(params.id);
    return (
        <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
            <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="px-5 py-2 flex flex-col gap-3 pb-6">
                <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full h-full rounded-full object-center object-cover" /></div>
                <div className="">
                    <h3 className="text-xl text-slate-900 relative font-bold leading-6">{celebrity.real_name}</h3>
                    <p className="text-sm text-gray-600">@{celebrity.nickname}</p>
                </div>
                <div className="flex gap-3 flex-wrap"><span className="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Developer</span><span className="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Design</span><span className="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Managements</span><span className="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">Projects</span></div>
                {/*<h4 className="text-md font-medium leading-3">About</h4>*/}
                <p className="text-sm text-stone-500">{celebrity.description}</p>
                <h4 className="text-md font-medium leading-3">Experiences</h4>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                    </svg>
                        <div className="leading-3">
                            <p className=" text-sm font-bold text-slate-700">Ui Designer</p><span className="text-xs text-slate-600">5 years</span>
                        </div>
                        <p className="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                    </div>
                    <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                    </svg>
                        <div className="leading-3">
                            <p className=" text-sm font-bold text-slate-700">Ui Designer</p><span className="text-xs text-slate-600">5 years</span>
                        </div>
                        <p className="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                    </div>
                    <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                    </svg>
                        <div className="leading-3">
                            <p className=" text-sm font-bold text-slate-700">Ui Designer</p><span className="text-xs text-slate-600">5 years</span>
                        </div>
                        <p className="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OsobnostPage