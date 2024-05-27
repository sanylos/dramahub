import Link from 'next/link';
import React from 'react'
export const fetchNews = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/news');
    const data = res.json();
    return data;
}
const NewsPage = async () => {
    const news = await fetchNews();
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto max-w-7x1">
                    <div className="flex flex-wrap w-full mb-4 p-4">
                        <div className="w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Novinky</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            news && news.map(post => (
                                <div key={post.id} className="xl:w-1/3 md:w-1/2 p-4">
                                    <Link href={'/novinky/' + post.slug}>
                                        <div className="bg-white p-6 rounded-lg">
                                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400" />
                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">NOVINKY</h3>
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.title}</h2>
                                            <p className="leading-relaxed text-base">{post.content.substr(0, 64)}...</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsPage