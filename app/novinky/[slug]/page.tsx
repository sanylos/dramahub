import { News } from '@/app/types/news.types';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const generateStaticParams = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/news');
    const data = await res.json();
    return data.map((news: News) => news.slug);
}

export const fetchNews = async (slug: string) => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/news/' + slug);
    const data = res.json();
    return data;
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
    const news = await fetchNews(params.slug);
    return {
        title: news.title,
        description: news.description
    }
}

export const revalidate = 60;
const NewsContentPage = async ({ params }: { params: { slug: string } }) => {
    const news = await fetchNews(params.slug);
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto max-w-7x1">
                    <div className="flex flex-wrap w-full mb-4 p-4">
                        <div className="w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">{news.title}</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            <span>{new Date(news.created_at).toISOString().split('T')[0]}</span><br />
                            <div className='text-xl font-semibold'>{news.description}</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap m-4 text-xl">
                        {news.content}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsContentPage