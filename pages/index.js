import Head from 'next/head'
import Layout, { siteTitle } from '../public/components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Devin Hight. I am a software engineer currently residing in Las Vegas, NV</p>
        <p>
          This is my dedicated portfolio site
        </p>
      </section>
    </Layout>
  )
}