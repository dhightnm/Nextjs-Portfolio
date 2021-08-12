import Link from 'next/link';
import Head from 'next/head';
import Nav from '../../public/components/Nav';
import Layout from '../../public/components/layout';

export default function About() {
  return (
    <>
    <Nav />
      <Head>
        <title> About Me </title>
      </Head>
        <h1>About Me</h1>
    </>
  )
}