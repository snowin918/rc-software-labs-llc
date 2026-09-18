import type { Metadata } from "next";
import { displayName } from "@/data/company";
const title = "Engineering Insights" + " | " + displayName;
const description = "Articles and perspectives on software development, engineering practices, and technology.";
export const metadata: Metadata = { title, description, openGraph: { title, description }, twitter: { title, description } };
import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
  ]
  return (
    <>
      <HeroSub
        title='Blog'
        description={description}
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  )
}

export default BlogPage
